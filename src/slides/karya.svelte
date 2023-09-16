<script>
	import { Slide, Layout, Image, Stack } from '@components'

	// import OnlinePortfolio1 from '@assets/karya/online-portfolio-1.webp'
	// import OnlinePortfolio2 from '@assets/karya/online-portfolio-2.webp'
	import OnlinePortfolio1Gif from '@assets/karya/online-portfolio-1.gif'

	import Schmhotel1 from '@assets/karya/schmhotel-1.webp'
	import Schmhotel2 from '@assets/karya/schmhotel-2.webp'
	import CyberWeb1 from '@assets/karya/cyber-1.webp'
	import CyberWeb2 from '@assets/karya/cyber-2.webp'
	import CyberWeb3 from '@assets/karya/cyber-3.webp'

	import TextPoppingEffect from '../components/TextPoppingEffect.svelte'
	import TextLineSpawnEffect from '../components/TextLineSpawnEffect.svelte'
	import TextLineEffect from '../components/TextLineEffect.svelte'

	let animateKaryaTitle = 'NONE'
	let animateKaryaTitleLine = 'NONE'
	let animatePortfolioOnline = 'NONE'
	let animateWebsiteECommerce = 'NONE'
	let animateWebCyber = 'NONE'
</script>

<Slide
	on:in={() => (animateKaryaTitle = 'ANIMATE')}
	on:out={() => (animateKaryaTitle = 'REVERT')}
	animate
>
	<Layout>
		<TextPoppingEffect
			animate={animateKaryaTitle}
			text="Karya"
			class="text-[6rem] font-bold tracking-wider"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animatePortfolioOnline = 'ANIMATE'
	}}
	on:out={() => (animatePortfolioOnline = 'REVERT')}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://unknownrori.vercel.app">
			<Stack>
				<Image src={OnlinePortfolio1Gif} alt="Portofolio Online" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animatePortfolioOnline}
			text="Portfolio Online"
			class="text-6xl"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animateWebsiteECommerce = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://github.com/UnknownRori/reservation-room-app">
			<Stack>
				<Image src={Schmhotel1} alt="Website E-Commerce" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animateWebsiteECommerce}
			text="Website E-Commerce"
			class="text-6xl"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animateWebsiteECommerce = 'ANIMATE'
	}}
	on:out={() => {
		animateWebsiteECommerce = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://github.com/UnknownRori/reservation-room-app">
			<Stack>
				<Image src={Schmhotel1} alt="Website E-Commerce" />
				<Image src={Schmhotel2} alt="Website E-Commerce" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animateWebsiteECommerce}
			text="Website E-Commerce"
			class="text-6xl"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animateWebCyber = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animateWebCyber}
			text="Web Cyber"
			class="text-6xl"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animateWebCyber = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
				<Image src={CyberWeb2} alt="Website Cyber" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animateWebCyber}
			text="Web Cyber"
			class="text-6xl"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateKaryaTitleLine = 'ANIMATE'
		animateWebCyber = 'ANIMATE'
	}}
	on:out={() => {
		animateKaryaTitleLine = 'REVERT'
		animateWebCyber = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateKaryaTitleLine}
			delay={1000}
			text="Karya"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
				<Image src={CyberWeb2} alt="Website Cyber" />
				<Image src={CyberWeb3} alt="Website Cyber" />
			</Stack>
		</a>
		<TextLineSpawnEffect
			animate={animateWebCyber}
			text="Web Cyber"
			class="text-6xl"
		/>
	</Layout>
</Slide>
