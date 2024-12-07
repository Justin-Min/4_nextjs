export default function BlogPage({ params }: { params: { id: number } }) {
	return <div>Blog Detail No.{params.id}</div>
}
