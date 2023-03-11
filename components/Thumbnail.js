import Image from 'next/image';
import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import { forwardRef } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/original/';

// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({ result }, ref) => {
	return (
		<div
			ref={ref}
			className='group p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'
		>
			<Image
				src={
					`${BASE_URL}${result.backdrop_path || result.poster_path}` ||
					`${BASE_URL}${result.poster_path}`
				}
				alt='movie-poster'
				height={1080}
				width={1920}
			/>
			<div className='p-2'>
				<p className='truncate max-w-md'>{result.overview}</p>
				<h1 className='text-2xl text-white mt-1 transition-all ease-in-out duration-100 group-hover:font-bold'>
					{result.title || result.original_name}
				</h1>
				<p className='flex items-center opacity-0 group-hover:opacity-100'>
					{result.media_type && `${result.media_type} •`}{' '}
					{result.release_date || result.first_air_date} •<HandThumbUpIcon className='h-5 mx-2' />
					{result.vote_count}
				</p>
			</div>
		</div>
	);
});

export default Thumbnail;
