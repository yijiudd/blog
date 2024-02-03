import { sql } from "@vercel/postgres";

export async function GET(request: Request) {
    try{
        const {searchParams}=new URL(request.url)
        const title=searchParams.get('title')
        const { rows } = await sql`SELECT * from Posts where Title=${title};`;
        const updateReadtimes = await sql`UPDATE Posts SET Readtimes=${
          rows[0].readtimes + 1
        } where Title=${title};`;
        const updated= await sql`SELECT * from Posts where Title=${title};`;
        return Response.json(updated.rows)

    }catch(e){
        return Response.json(e)
    }
}