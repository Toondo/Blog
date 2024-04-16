import { randomBytes } from 'crypto';

import bcrypt from 'bcryptjs';
import { serialize as serializeCookie } from 'cookie';
import mysql, { FieldPacket, RowDataPacket } from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

interface User extends RowDataPacket {
  user_name: string;
  password_hash: string;
}

const dbInfo = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: 'next-db',
};

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const data = await req.json();
  const connection = await mysql.createConnection(dbInfo);

  try {
    const { email, password }: { email: string; password: string } = data;

    if (!email || !password) {
      return NextResponse.json({ result: false, message: 'Login ID and password must not be empty.' });
    }

    const [rows, fields]: [User[], FieldPacket[]] = await connection.query(
      'SELECT user_name, password_hash FROM Users WHERE email = ?',
      [email],
    );

    if (rows.length > 0) {
      const userData: User = rows[0];
      const passwordMatch = await bcrypt.compare(password, userData.password_hash);
      if (passwordMatch) {
        const sessionId = createSessionId(); // 세션 ID 생성
        const response = NextResponse.json({ result: true, user_name: userData.user_name });
        setSessionCookie(response, sessionId); // 쿠키 설정
        return response;
      } else {
        console.log('Field information:', fields);
        return NextResponse.json({ result: false, message: 'Invalid password' });
      }
    } else {
      console.log('Field information:', fields);
      return NextResponse.json({ result: false, message: 'User not found' });
    }
  } finally {
    // Ensure the connection is closed even if there is an error
    await connection.end();
  }
}

function setSessionCookie(response: NextResponse, sessionId: string) {
  const cookie = serializeCookie('session', sessionId, {
    path: 'localhost',
    httpOnly: false, // 클라이언트 측에서 JS를 통한 접근 금지
    secure: false, // HTTPS를 통해서만 쿠키 전송
    sameSite: 'lax',
    maxAge: 60 * 5,
  });
  response.headers.set('Set-Cookie', cookie);
}

function createSessionId() {
  return randomBytes(16).toString('hex');
}
