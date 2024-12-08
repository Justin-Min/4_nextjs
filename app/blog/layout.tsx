export default function BlogLayoutPage({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<h1 className='text-4xl'>header</h1>
			{children}
			<h2>bottom</h2>
		</>
	)
}
