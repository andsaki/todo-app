import { PrismaClient, Todo } from '@prisma/client'
import type { NextRequest } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  // todoテーブルから全件取得
  const todos: Todo[] = await prisma.todo.findMany()
  // console.log('prisma', prisma)
  return Response.json(todos)
}

export async function POST(request: Request) {
  const { title }: { title: string } = await request.json()
  // todoテーブルに追加
  const response = await prisma.todo.create({
    data: {
      title,
    },
  })
  return Response.json(response)
}