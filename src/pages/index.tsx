import Layout from '@/components/layout';
import Image from 'next/image';
import { Text, Heading, Center, Container, Card, CardHeader, CardBody, Box, Grid, List, UnorderedList, ListItem } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'

export default function Home() {
	return (
		<Layout title="Home" description="CODSite Homepage">
				<Center>
					<Image priority src="/images/banners/welcome.png" alt="Welcome banner" width={700} height={300}/>
				</Center>

				{/* CODS Community */}
				<Heading textAlign='center'>
					CODS is a global community made for Chemistry Olympiad participants
				</Heading>
				<Heading fontSize="lg" fontWeight={400} textAlign='center'>
					Haven&apos;t joined the community yet?
					You can join <Link href="https://discord.gg/chemistryolympiad" color='blue.400'>here</Link>.
				</Heading>
				
				<Container px='20' maxW='full'>
					{/* Mission Statement */}
					<Heading fontSize='2xl' fontWeight={400} mt='10'>Our mission is to make Competitive Chemistry more...</Heading>
					<Grid templateColumns='repeat(3, 1fr)' gap='8'>
						{mission.map(card => (
							<Card key={card.header}>
								<CardBody>
									<Heading fontSize='2xl' fontWeight={600}>{card.header}</Heading>
									<Text>{card.description}</Text>
								</CardBody>
							</Card>
						))}
					</Grid>

					{/* Website Purpose */}
					<Heading fontSize='2xl' fontWeight={400} textAlign='center' mt='10'>What is CODSite for?</Heading>
					<Text align='center'>
						CODSite is an all-purpose website made for your community (competitive chemistry enthusiasts).
						Everything on CODSite is free to use for anybody, no sign-ups or membership required.
						We provide custom <b>open educational resources</b> such as lectures, detailed notes, useful websites, problem sets, guides, tools, and all of our past competition papers.
						Anything a chemistry freak could dream of lies within this website.
					</Text>

					{/* Resources QuickLinks */}
					<Heading fontSize='2xl' fontWeight={400} textAlign='center' mt='10'>Open Educational Resources at CODSite</Heading>
					<Grid templateColumns='repeat(3, 1fr)' gap='8'>
						{resources.map(resource => (
							<Card key={resource.title}>
								<CardBody>
									<Heading fontSize='2xl' fontWeight={400} textAlign='center'>{resource.title}</Heading>
									<Text textAlign='center'>
										{resource.description}
									</Text>
								</CardBody>
								{resource.link && (
									<Link href={resource.link} className="after:absolute after:inset-0"/>
								)}
							</Card>
						))}
					</Grid>
				</Container>
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
				<UnorderedList mt='2'>
					<ListItem color="blue.400" style={{"listStyle": "none"}} my='2'><Link href="/competitions/competitors_guide">Competitor&apos;s Guide</Link></ListItem>
					<ListItem color="blue.400" style={{"listStyle": "none"}} my='2'><Link href="/competitions/acot">ACOT</Link></ListItem>
					<ListItem color="blue.400" style={{"listStyle": "none"}} my='2'><Link href="/competitions/wcc">WCC</Link></ListItem>
					<ListItem color="blue.400" style={{"listStyle": "none"}} my='2'><Link href="/competitions/socc">SOCC</Link></ListItem>
					<ListItem color="blue.400" style={{"listStyle": "none"}} my='2'><Link href="/compeitions/scho">SChO</Link></ListItem>
				</UnorderedList>
			</>
		)
	},
	{
		title: "Courses (WIP)",
		description: "Made specifically for chemistyr olympiad participants, these courses will go over the fundamentals required for competitive chemistry, providing a variety of practice problems, tips, and tricks for competitors at any skill level."
	}
]