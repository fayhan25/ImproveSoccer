
import {PrismaClient} from "@prisma/client"
import { NextResponse } from "next/server";
import { auth, currentUser } from '@clerk/nextjs/server'
import { AssistantResponse } from "ai"

export async function POST(request:any){
    const prisma = new PrismaClient()
    const res = await request.json();
    const {userId} = auth()
    if (!userId) {
        return null
      }

    const {shooting, passing, dribbling, speed, weight,height, style,myMessage} = res;

    const result = await prisma.post.create({
        data:{
            shooting,
            passing,
            dribbling,
            speed,
            weight,
            height,
            style,
            messages: myMessage,
            userId
        }
    })
    return NextResponse.json({data:res})
}