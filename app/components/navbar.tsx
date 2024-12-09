'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const pathname = usePathname()
	console.log(pathname)

	return (
		<nav className='bg-gray-800 p-4'>
			<ul className='flex space-x-4'>
				<li
					className={
						pathname === '/'
							? 'text-white bg-gray-900 px-3 py-2 rounded-md'
							: 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
					}
				>
					<Link href='/'>Home</Link>
				</li>
				<li
					className={
						pathname === '/products'
							? 'text-white bg-gray-900 px-3 py-2 rounded-md'
							: 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
					}
				>
					<Link href='/products'>Products</Link>
				</li>
				<li
					className={
						pathname === '/about'
							? 'text-white bg-gray-900 px-3 py-2 rounded-md'
							: 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
					}
				>
					<Link href='/about'>About</Link>
				</li>
				<li
					className={
						pathname === '/contact'
							? 'text-white bg-gray-900 px-3 py-2 rounded-md'
							: 'text-gray-300 hover:text-white px-3 py-2 rounded-md'
					}
				>
					<Link href='/contact'>Contact</Link>
				</li>
			</ul>
		</nav>
	)
}
