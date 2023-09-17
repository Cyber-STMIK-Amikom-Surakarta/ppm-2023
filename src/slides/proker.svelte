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

	let animateProkerTitleSpawn = 'NONE'
	let animateWebinarKriptografi = 'NONE'
	let animatePelatihanArduino = 'NONE'
	let animatePelatihanMikrotik = 'NONE'
</script>

<Slide
	on:in={() => (animateProkerTitleSpawn = 'ANIMATE')}
	on:out={() => {
		animateProkerTitleSpawn = 'REVERT'
	}}
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
		animateWebinarKriptografi = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateWebinarKriptografi = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateWebinarKriptografi = 'ANIMATE'
	}}
	on:out={() => (animateWebinarKriptografi = 'REVERT')}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateWebinarKriptografi}
			class="text-6xl"
			text="Webinar Kriptografi"
		/>
		<Stack>
			<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
			<Image src={WebinarKriptografi3} alt="Webinar Kriptografi" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animatePelatihanArduino = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePelatihanArduino}
			class="text-6xl"
			text="Pelatihan Arduino"
		/>
		<Stack>
			<Image src={Arduino1} alt="Arduino 1" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animatePelatihanArduino = 'ANIMATE'
	}}
	on:out={() => (animatePelatihanArduino = 'REVERT')}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePelatihanArduino}
			class="text-6xl"
			text="Pelatihan Arduino"
		/>
		<Stack>
			<Image src={Arduino1} alt="Arduino 1" />
			<Image src={Arduino2} alt="Arduino 2" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animatePelatihanMikrotik = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePelatihanMikrotik}
			class="text-6xl"
			text="Pelatihan Set-up Mikrotik"
		/>
		<Stack>
			<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animatePelatihanMikrotik = 'ANIMATE'
	}}
	on:out={() => {
		animatePelatihanMikrotik = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePelatihanMikrotik}
			class="text-6xl"
			text="Pelatihan Set-up Mikrotik"
		/>
		<Stack>
			<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
			<Image src={PelatihanMikrotik2} alt="Pelatihan Mikrotik 2" />
		</Stack>
	</Layout>
</Slide>
