import Head from 'next/head';

export default function Layout({ children, title, description } : { children: React.ReactNode, title: string, description: string }) {
	return (
		<div>
			<Head>
				<title>CODsite | {title}</title>
				<meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>{children}</main>
		</div>
	)
}