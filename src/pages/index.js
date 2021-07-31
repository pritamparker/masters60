import React from 'react'
import Layout from '../layouts/index'
import Hero from '../components/hero/Hero'
import HeroIllustration from '../components/hero/HeroIllustration'

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Masters 60"
				content1="NEET/JEE/BOARD/FOUNDATIONS"
				content2="For more details contact us-7990460284"
				illustration={HeroIllustration}
			/>
		</Layout>
	)
}
