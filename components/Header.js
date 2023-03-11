import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
	HomeIcon,
	BoltIcon,
	CheckBadgeIcon,
	CircleStackIcon,
	MagnifyingGlassIcon,
	UserIcon
} from '@heroicons/react/24/outline';

function Header() {
	return (
		<header className='m-5 flex flex-col sm:flex-row justify-between items-center h-auto'>
			<div className='flex flex-grow justify-evenly max-w-2xl'>
				<HeaderItem title='HOME' Icon={HomeIcon} />
				<HeaderItem title='TRENDING' Icon={BoltIcon} />
				<HeaderItem title='VERIFIED' Icon={CheckBadgeIcon} />
				<HeaderItem title='COLLECTIONS' Icon={CircleStackIcon} />
				<HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon} />
				<HeaderItem title='ACCOUNT' Icon={UserIcon} />
			</div>
			<Image
				className='object-contain w-auto h-auto'
				src='/logo.PNG'
				alt='logo'
				width={100}
				height={50}
			/>
		</header>
	);
}

export default Header;
