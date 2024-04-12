import mysql from 'mysql2/promise';
import { NextRequest, NextResponse } from 'next/server';

const dbInfo = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  database: 'login_info',
};

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const connection = await mysql.createConnection(dbInfo);

//   const { login_id, login_password } = data;

//   if (!login_id || !login_password) {
//     return NextResponse.json({ result: false });
//   }

//   const [rows, fields] = await connection.query(
//     'SELECT user_name FROM logininfo WHERE login_id = ? AND login_password = ?', // loginId와 password로 사용자 검증
//     [login_id, login_password],
//   );

//   console.log(rows);

//   await connection.end();

//   if (rows.length === 0) {

//     return NextResponse.json({ result: false });
//   }

//   return NextResponse.json({ result: true, user_name: rows[0].user_name });
// }
