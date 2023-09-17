<script>
	import { Slide, Layout } from '@components'
	import anime from 'animejs'

	import TextEffectSlow from '../components/TextEffectSlow.svelte'
	import TextSlowAppearEffect from '../components/TextSlowAppearEffect.svelte'

	import Logo from '@assets/logo.webp'

	let animateTitle = 'NONE'
	let animateDesc = 'NONE'
	let animateLine = 'NONE'
	let element = null

	$: {
		if (animateLine == 'ANIMATE') {
			anime({
				targets: element,
				scaleX: 150,
				duration: 500,
				elasticity: 800,
				delay: 1500,
			})
		}
	}
</script>

<Slide
	on:in={() => {
		animateTitle = 'ANIMATE'
		animateLine = 'ANIMATE'
	}}
	on:out={() => {
		animateTitle = 'REVERT'
		animateLine = 'REVERT'
	}}
	animate
>
	<Layout>
		<img src={Logo} alt="Logo Cyber" class="w-72" />
		<TextEffectSlow
			animate={animateTitle}
			duration={1000}
			class="text-[6rem] font-bold tracking-wide"
			text="Cyber Amikom Surakarta"
		/>
		<div
			bind:this={element}
			data-id="line"
			class="h-[0.25rem] w-[0.25rem] bg-white test"
		></div>
	</Layout>
</Slide>

<Slide
	on:in={() => (animateDesc = 'ANIMATE')}
	on:out={() => {
		animateDesc = 'REVERT'
		animateLine = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<div data-id="line" class="h-[0.25rem] w-[960px] bg-white"></div>
		<TextSlowAppearEffect
			animate={animateDesc}
			class="tracking-widest leading-loose text-5xl text-left"
			text="UKM Cyber adalah sebuah Unit Kegiatan Mahasiswa STMIK Amikom Surakara yang
			bergerak di bidang IT, programming & web design."
		/>
	</Layout>
</Slide>
