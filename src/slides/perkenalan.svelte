<script>
	import { Slide, Layout } from '@components'

	import TextEffectSlow from '../components/TextEffectSlow.svelte'
	import TextOpenWithLineEffect from '../components/TextOpenWithLineEffect.svelte'

	import Logo from '@assets/logo.webp'

	let animateTitle = 'NONE'
	let animateDesc = 'NONE'
</script>

<Slide
	on:in={() => (animateTitle = 'ANIMATE')}
	on:out={() => (animateTitle = 'REVERT')}
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
	</Layout>
</Slide>

<Slide
	on:in={() => (animateDesc = 'ANIMATE')}
	on:out={() => (animateDesc = 'REVERT')}
	animate
>
	<Layout>
		<TextOpenWithLineEffect
			animate={animateDesc}
			class="tracking-widest leading-loose text-5xl text-left"
			text="UKM Cyber adalah sebuah Unit Kegiatan Mahasiswa STMIK Amikom Surakara yang
			bergerak di bidang IT, programming & web design."
		/>
	</Layout>
</Slide>
