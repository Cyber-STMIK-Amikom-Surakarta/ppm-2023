<script>
	import { Slide, Layout, Image, Stack } from '@components'

	import WebinarKriptografi1 from '@assets/kegiatan/webinar-kriptografi-1.webp'
	import WebinarKriptografi2 from '@assets/kegiatan/webinar-kriptografi-2.webp'
	import WebinarKriptografi3 from '@assets/kegiatan/webinar-kriptografi-3.webp'

	import Arduino1 from '@assets/kegiatan/arduino-1.webp'
	import Arduino2 from '@assets/kegiatan/arduino-2.webp'

	import PelatihanMikrotik1 from '@assets/kegiatan/pelatihan-mikrotik-1.webp'
	import PelatihanMikrotik2 from '@assets/kegiatan/pelatihan-mikrotik-2.webp'

	import TextLineSpawnEffect from '../components/TextLineSpawnEffect.svelte'
	import TextDropEffect from '../components/TextDropEffect.svelte'
	import TextLineEffect from '../components/TextLineEffect.svelte'

	let animateProkerTitleSpawn = 'NONE'
	let animateProkerTitleLine = 'NONE'
	let animateWebinarKriptografi = 'NONE'
	let animatePelatihanArduino = 'NONE'
	let animatePelatihanMikrotik = 'NONE'
</script>

<Slide
	on:in={() => (animateProkerTitleSpawn = 'ANIMATE')}
	on:out={() => (animateProkerTitleSpawn = 'REVERT')}
	animate
>
	<Layout>
		<TextDropEffect
			animate={animateProkerTitleSpawn}
			duration={800}
			text="Program Kerja"
			customClass="text-[6rem] font-bold tracking-wider"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animateWebinarKriptografi = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
		</Stack>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animateWebinarKriptografi = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
		</Stack>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animateWebinarKriptografi = 'ANIMATE'
	}}
	on:out={() => (animateWebinarKriptografi = 'REVERT')}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi3} alt="Webinar Kriptografi" />
		</Stack>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animatePelatihanArduino = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={Arduino1} alt="Arduino 1" />
		</Stack>
		<TextLineSpawnEffect
			animate={animatePelatihanArduino}
			class="text-6xl"
			text="Pelatihan Arduino"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animatePelatihanArduino = 'ANIMATE'
	}}
	on:out={() => (animatePelatihanArduino = 'REVERT')}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={Arduino1} alt="Arduino 1" />
			<Image src={Arduino2} alt="Arduino 2" />
		</Stack>
		<TextLineSpawnEffect
			animate={animatePelatihanArduino}
			class="text-6xl"
			text="Pelatihan Arduino"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animatePelatihanMikrotik = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
		</Stack>
		<TextLineSpawnEffect
			animate={animatePelatihanMikrotik}
			class="text-6xl"
			text="Pelatihan Set-up Mikrotik"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateProkerTitleLine = 'ANIMATE'
		animatePelatihanMikrotik = 'ANIMATE'
	}}
	on:out={() => {
		animateProkerTitleLine = 'REVERT'
		animatePelatihanMikrotik = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateProkerTitleLine}
			delay={1000}
			text="Program Kerja"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Stack>
			<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
			<Image src={PelatihanMikrotik2} alt="Pelatihan Mikrotik 2" />
		</Stack>
		<TextLineSpawnEffect
			animate={animatePelatihanMikrotik}
			class="text-6xl"
			text="Pelatihan Set-up Mikrotik"
		/>
	</Layout>
</Slide>
