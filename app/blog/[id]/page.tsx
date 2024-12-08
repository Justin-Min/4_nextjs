import Link from 'next/link'

export default async function BlogPage({
	params,
	searchParams,
}: {
	params: { id: string }
	searchParams: { query: string; number: string }
}) {
	const { id } = await params
	const { query, number } = await searchParams

	return (
		<>
			<div>
				Blog Detail No.{id} and query is {query} and number is {number}
			</div>
			<Link
				href={{
					pathname: '/blog',
					query: { category: 'javascript' },
				}}
			>
				Link
			</Link>
		</>
	)
}
