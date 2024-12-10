import { NextRequest } from 'next/server'
import { products } from '@/app/data/productData'
import prisma from '@/prisma/db_client'

export async function PUT(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const body = await req.json()
	const { title, description, price, category, img } = body

	const UpdatedProduct = await prisma.product.update({
		where: {
			id: parseInt(params.id),
		},
		data: {
			title: title,
			price: price,
			description: description,
			category: category,
			img: img,
		},
	})

	return Response.json(UpdatedProduct, { status: 200 })
}

export async function DELETE(
	req: NextRequest,
	{ params }: { params: { id: string } }
) {
	const productIndex = products.findIndex(
		product => product.id == parseInt(params.id)
	)
	products.splice(productIndex, 1)[0]

	return Response.json('Delete successfully', { status: 200 })
}
