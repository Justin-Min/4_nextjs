'use client'

export default function LoginForm() {
	const handleSubmit = async (e: any) => {
		e.preventDefault()
		const formData = new FormData(e.target)
		console.log('Email:', formData.get('email'))
		console.log('Password:', formData.get('password'))
	}
	return (
		<div className='flex flex-col items-center'>
			<h1 className='text-3xl'>Login</h1>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col gap-4 border p-2 max-auto mt-8'
			>
				<label htmlFor='email'>Enter email</label>
				<input type='email' name='email' className='border' />
				<label htmlFor='password'>Enter password</label>
				<input type='password' name='password' className='border' />
				<button className='w-full bg-blue-500 text-white py-2 rounded'>
					Login
				</button>
			</form>
		</div>
	)
}
