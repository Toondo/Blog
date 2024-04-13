import mysql, { RowDataPacket } from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

const dbInfo = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: 'login_info',
};

export async function POST(req: NextRequest) {
  const data = await req.json();
  const connection = await mysql.createConnection(dbInfo);

  const { login_id, login_password } = data;

  if (!login_id || !login_password) {
    return NextResponse.json({ result: false });
  }

  const [rows] = await connection.query(
    'SELECT user_name FROM logininfo WHERE login_id = ? AND login_password = ?', // loginId와 password로 사용자 검증
    [login_id, login_password],
  );

  console.log(rows);

  await connection.end();

  if (Array.isArray(rows) && rows.length > 0) {
    // result가 RowDataPacket[] 타입이고, 요소가 하나 이상 있는 경우
    const userData = rows[0] as RowDataPacket; // 첫 번째 결과를 RowDataPacket 타입으로 처리
    if (userData.user_name) {
      return NextResponse.json({ result: true, user_name: userData.user_name });
    }
  } else {
    // 예상치 못한 결과 타입이거나 결과가 비어 있는 경우
    console.log('No user found or unexpected result type.');
    return NextResponse.json({ result: false });
  }
}
