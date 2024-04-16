import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';

const dbInfo = {
  host: process.env.NEXT_PUBLIC_DB_HOST,
  user: process.env.NEXT_PUBLIC_DB_USER,
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,
  // database: 'MyBlogDB',
  database: 'next-db',
};

export async function GET() {
  let connection;
  let result;
  try {
    connection = await mysql.createConnection(dbInfo);
    const [rows] = await connection.execute('SELECT * FROM users');
    result = rows;
  } catch (error) {
    console.log(error);
  } finally {
    if (connection) {
      await connection.end();
    }
  }

  return NextResponse.json(result);
}

// export async function POST(req: NextRequest) {
//   const data = await req.json();
//   const connection = await mysql.createConnection(dbInfo);

//   if (!data) {
//     return NextResponse.json({ result: false, error: 'Request Body Null' });
//   }

//   const { first_name, last_name } = data;

//   const [fields] = await connection.query('INSERT INTO sakila.actor (first_name, last_name) VALUES (?, ?)', [
//     first_name,
//     last_name,
//   ]);

//   await connection.end();

//   if (fields) {
//     return NextResponse.json({ result: false, message: 'SQL Query Not Success' });
//   }

//   return NextResponse.json({ result: true, message: 'Success' });
// }
