import { auth, currentUser } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function GET(req:any, res:any) {
    const {userId} = auth()
    const posts = await prisma.users.findUnique({
        where: {
        id: userId || ''
        },
        select: {
        posts: true
        }
    })
    return NextResponse.json({data:posts})
}