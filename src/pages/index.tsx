import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<Layout title="Home" description="CODSite Homepage">
			<div style={{ margin: '0 auto', paddingTop: 0 }}>

				<center>
					<Image priority src="/images/banners/welcome.png" alt="Welcome banner" width={700} height={300}/>
				</center>

				{/* CODS Community */}
				<div className="px-5 md:px-20 pt-10 pb-5">
					<h2 className="text-center font-normal">
						CODS is a global community made for Chemistry Olympiad participants
					</h2>
					<h3 className="text-center font-light">
						Haven&apos;t joined the community yet?
						You can join <a className="text-blue-400" href="https://discord.gg/chemistryolympiad">here</a>.
					</h3>
				</div>

				{/* Mission Statement */}
				<div className="bg-blue-100 px-5 md:px-20 py-10">
					<h3 className="font-light">Our mission is to make Competitive Chemistry more...</h3>
					<dl className="md:grid md:grid-cols-3">
						{mission.map(card => (
							<div key={card.header} className="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl rounded-md mx-5 my-4 transform hover:-translate-y-1 hover:scale-110">
								<h2 className="text-gray-800 text-3xl font-medium mb-3">{card.header}</h2>
								<p className="mt-2 text-gray-700 text-lg">{card.description}</p>
							</div>
						))}
					</dl>
				</div>

				{/* Website Purpose */}
				<div style={{ padding: '1.45rem 1.0875rem 1.45rem' }}>
					<h2 className="font-mediummt-10 text-center">What is CODSite for?</h2>
					<p className="md:px-20">
						CODSite is an all-purpose website made for your community (competitive chemistry enthusiasts).
						Everything on CODSite is free to use for anybody, no sign-ups or membership required.
						We provide custom <b>open educational resources</b> such as lectures, detailed notes, useful websites, problem sets, guides, tools, and all of our past competition papers.
						Anything a chemistry freak could dream of lies within this website.
					</p>
				</div>

				{/* Resources QuickLinks */}
				<div className="text-center md:px-20">
					<h2 className="font-medium trackign-wide mt-20 mb-16">Open Educational Resources at CODSite</h2>
					<dl className="md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
						{resources.map(resource => (
							<div key={resource.title} className="transition duration-300 ease-in-out max-w-md py-4 px-5 bg-white hover:shadow-2xl transform hover:-translate-y-1 hover:scale:110 rounded-xl mx-5 my-4">
								<dt>
									<h2 className="mt-2 mb-5 font-normal tracking-wide text-blue-400">{resource.title}</h2>
								</dt>
								<dd className="text-base">
									{resource.description}
								</dd>
								{resource.link && (
									<Link href={resource.link} className="after:absolute after:inset-0"/>
								)}
							</div>
						))}
					</dl>
				</div>

			</div>
		</Layout>
	)
}

const mission = [
	{
		header: "Competitive",
		description: "by leveling out the playing field of competitive chemistry, we hope to increase the standards of Chemistry Olympiads.",
	},
	{
		header: "Accessible",
		description: "to a wider audience. We run four annual competitions for anyone around the world to compete in and provide guides for anyone to get started.",
	},
	{
		header: "Fair",
		description: "for everyone by providing guides for all levels of participants. We also provide high quality custom study resources to asssist your journey.",
	}
];

const resources = [
	{
		link: "https://www.youtube.com/channel/UCyO5Wn2qKDRYWC-F5EfN2kA",
		title: "Lectures",
		description: "We provide lectures for everyone, from introductory lectures to problem solving and advanced topic lectures. You can watch our lectures on our YouTube channel.",
	},
	{
		link: "https://drive.google.com/drive/u/4/folders/195kcNDwljvw1w5ZKVWzpE7LCdbvwQzVL",
		title: "CODSNotes",
		description: "Made specially for the CODS community, these notes cover the fundamentals required for competitive chemistry, from Atomic Strucutres to Organic Chemistry.",
	},
	{
		link: "/guides",
		title: "Guides",
		description: "Our staff is dedicated to writing guides for all levels. From introductory guides to those for the IChO level, there is a guide for anyone written by the the best in the competitive chemistry scene.",
	},
	{
		link: "/competitions",
		title: "Past Papers",
		description: "All of our pastcompetition papers are released to the public and can be accessed immediately. Click here to access our list of past exams.",
	},
	{
		title: "Competitions",
		description: (
			<>
				We provide four annual chemistry competitions for anyone to participate. For more information:
				<ul className="ml-0 pl-0">
					<li className="text-blue-400 mt-2" style={{"listStyle": "none"}}><Link href="/competitions/competitors_guide">Competitor&apos;s Guide</Link></li>
					<li className="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link href="/competitions/acot">ACOT</Link></li>
					<li className="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link href="/competitions/wcc">WCC</Link></li>
					<li className="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link href="/competitions/socc">SOCC</Link></li>
					<li className="text-blue-400 mt-1" style={{"listStyle": "none"}}><Link href="/compeitions/scho">SChO</Link></li>
				</ul>
			</>
		)
	},
	{
		title: "Courses (WIP)",
		description: "Made specifically for chemistyr olympiad participants, these courses will go over the fundamentals required for competitive chemistry, providing a variety of practice problems, tips, and tricks for competitors at any skill level."
	}
]