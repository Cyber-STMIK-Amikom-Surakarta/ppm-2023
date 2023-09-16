<script>
	import { Slide, Layout, Step } from '@components'
	import TextLineSpawnEffect from '../components/TextLineSpawnEffect.svelte'

	let animateVisiTitle = 'NONE'
	let animateMisiTitle = 'NONE'
</script>

<Slide animate>
	<Layout class="gap-2">
		<h1 class="text-[6rem] tracking-wider">Visi & Misi</h1>
		<h2 class="text-[4rem] tracking-wide">Cyber Amikom Surakarta</h2>
	</Layout>
</Slide>

<Slide on:in={() => (animateVisiTitle = 'ANIMATE')} animate>
	<Layout class="gap-4">
		<TextLineSpawnEffect
			animate={animateVisiTitle}
			class="text-[6rem] font-bold tracking-wider"
			text="Visi"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => (animateVisiTitle = 'ANIMATE')}
	on:out={() => (animateVisiTitle = 'REVERT')}
	animate
>
	<Layout class="gap-4">
		<TextLineSpawnEffect
			animate={animateVisiTitle}
			class="text-[6rem] font-bold tracking-wider"
			text="Visi"
		/>
		<p class="text-6xl tracking-wider leading-relaxed">
			Menjadi organisasi mahasiswa dibidang sistem informasi yang bermanfaat
			bagi diri sendiri, instansi dan masyarakat
		</p>
	</Layout>
</Slide>

<Slide on:in={() => (animateMisiTitle = 'ANIMATE')} animate>
	<Layout class="gap-4">
		<TextLineSpawnEffect
			animate={animateMisiTitle}
			class="text-[6rem] font-bold tracking-wider"
			text="Misi"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => (animateMisiTitle = 'ANIMATE')}
	on:out={() => (animateMisiTitle = 'REVERT')}
	animate
>
	<Layout class="gap-4">
		<TextLineSpawnEffect
			animate={animateMisiTitle}
			class="text-[6rem] font-bold tracking-wider"
			text="Misi"
		/>
		<ul class="flex flex-col gap-2 list-decimal text-left">
			<Step>
				<li>
					Menyelenggarakan pelatihan dan pembinaan dalam bidang sistem
					informasi.
				</li>
			</Step>
			<Step>
				<li>
					Mewujudkan generasi muda yang peduli, madiri, kreatif dan inovatif
					melalui pemberdayaan masyarakat.
				</li>
			</Step>
			<Step>
				<li>
					Sebagai suatu wadah pembekalan dan persiapan untuk mengikuti
					kompetisi-kompetisi berskala regional, nasional maupun internasional.
				</li>
			</Step>
		</ul>
	</Layout>
</Slide>
