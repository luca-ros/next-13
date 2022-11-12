import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-md'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex space-x-2 items-center'>
                    <Image src="https://i.ibb.co/YhMfWy0/logo-full-screen.png"
                        height={10}
                        width={50}
                        alt='Logo' />

                    <p className='text-blue-600'>Welome to Bob</p>
                </div>

                <Link 
                href='auth/singin'
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                > Sing In </Link>
            </div>
        </header>
    )
}

export default Header