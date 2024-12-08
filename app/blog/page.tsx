export default async function BlogMainPage({
	searchParams,
}: {
	searchParams: { query: string }
}) {
	const { query } = await searchParams
	return <div>{query}</div>
}
