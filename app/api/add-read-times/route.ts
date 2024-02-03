import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
    try{
        const {searchParams}=new URL(request.url)
        const title=searchParams.get('title')
        const { rows } = await sql`SELECT * from Posts where Title=${title};`;
        const updateReadtimes = await sql`UPDATE Posts SET Readtimes=${
          rows[0].readtimes + 1
        } where Title=${title};`;
        const updated= await sql`SELECT * from Posts where Title=${title};`;
        return NextResponse.json(updated.rows)

    }catch(e){
        return NextResponse.json(e)
    }
}