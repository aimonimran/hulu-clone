import requests from '@/utils/requests';
import { useRouter } from 'next/router';

function Nav() {
	const router = useRouter();

	return (
		<nav className='relative'>
			<div className='flex px-10 sm:px-20 whitespace-nowrap text-md sm:text-lg md:text-2xl space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
				{Object.entries(requests).map(([key, { title, url }]) => (
					<h2
						key={key}
						onClick={() => router.push(`/?genre=${key}`)}
						className='last:pr-10 cursor-pointer hover:text-white transition duration-100 transform hover:scale-125 active:text-red-500'
					>
						{title}
					</h2>
				))}
			</div>
			<div className='absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A]' />
		</nav>
	);
}

export default Nav;
