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
</script>

<Slide animate>
	<Layout>
		<h1 class="text-[6rem] font-bold tracking-wider">Karya</h1>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://unknownrori.vercel.app">
			<Stack>
				<Image src={OnlinePortfolio1Gif} alt="Portofolio Online" />
			</Stack>
		</a>
		<h2 class="text-6xl">Portfolio Online</h2>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://github.com/UnknownRori/reservation-room-app">
			<Stack>
				<Image src={Schmhotel1} alt="Website E-Commerce" />
			</Stack>
		</a>
		<h2 class="text-6xl">Website E-Commerce</h2>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://github.com/UnknownRori/reservation-room-app">
			<Stack>
				<Image src={Schmhotel1} alt="Website E-Commerce" />
				<Image src={Schmhotel2} alt="Website E-Commerce" />
			</Stack>
		</a>
		<h2 class="text-6xl">Website E-Commerce</h2>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
			</Stack>
		</a>
		<h2 class="text-6xl">Website Cyber</h2>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
				<Image src={CyberWeb2} alt="Website Cyber" />
			</Stack>
		</a>
		<h2 class="text-6xl">Website Cyber</h2>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
		<a href="https://cyberamikomsolo.netlify.app/">
			<Stack>
				<Image src={CyberWeb1} alt="Website Cyber" />
				<Image src={CyberWeb2} alt="Website Cyber" />
				<Image src={CyberWeb3} alt="Website Cyber" />
			</Stack>
		</a>
		<h2 class="text-6xl">Website Cyber</h2>
	</Layout>
</Slide>
