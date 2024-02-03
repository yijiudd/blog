import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
// export async function GET(request: Request) {
//   try {
//     const result= await sql`CREATE TABLE Posts ( Title varchar(255), ReadTimes int );`;
//     return NextResponse.json({result},{status:200});
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }
// }
// export async function GET(request: Request) {
//   //insert Posts
//   try{
//   const result=await sql`INSERT INTO Posts (Title, ReadTimes) VALUES ('intern','10'),('japan','5'),('quit','8'),('test','1');`
//   return NextResponse.json({result},{status:200})
//   }catch(error){
//   return NextResponse.json({error},{status:500})
//   }
// }
export async function GET(request: Request) {
  //insert Posts
  try{
  const result=await sql`SELECT * FROM Posts`
  return NextResponse.json({result},{status:200})
  }catch(error){
  return NextResponse.json({error},{status:500})
  }
}