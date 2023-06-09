import Head from 'next/head';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import requests from '@/utils/requests';
import Results from '@/components/Results';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ results }) {
	return (
		<>
			<Head>
				<title>Hulu Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Nav />
			<Results results={results} />
		</>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`
	).then((res) => res.json());

	return {
		props: {
			results: request.results
		}
	};
}
