import { auth, currentUser } from '@clerk/nextjs/server'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'
const prisma = new PrismaClient()

export async function DELETE(request:any) {
    const res = await request.json();
    const {postId} = res
    const posts = await prisma.post.delete({
        where: {
            id: postId || ''
        }
    })
    return NextResponse.json({data:posts})
}