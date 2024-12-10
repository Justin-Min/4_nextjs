import { NextRequest } from 'next/server'
import prisma from '@/prisma/db_client'

export async function GET() {
	const products = await prisma.product.findMany()
	return Response.json(products)
}

export async function POST(req: NextRequest) {
	const body = await req.json()
	const newProduct = await prisma.product.create({
		data: {
			title: body.title,
			price: body.price,
			description: body.description,
			category: body.category,
			img: body.img,
		},
	})

	return Response.json(newProduct, { status: 201 })
}
