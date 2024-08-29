import {PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";

export async function POST(request:any){
    const prisma = new PrismaClient()
    const res = await request.json();
    const {shooting, passing, dribbling, speed, weight,height, style} = res;
    console.log({res});
    const result = await prisma.post.create({
        data:{
            shooting,
            passing,
            dribbling,
            speed,
            weight,
            height,
            style,
            user: {create:{
                email: 'myemail25@gmail.com'
            }}
        }
    })
    return NextResponse.json({data:res})
}