<script>
	import { Slide } from '@components'
	import TextDropEffect from '../components/TextDropEffect.svelte'

	let animatePenutup = 'NONE'
</script>

<Slide
	on:in={() => (animatePenutup = 'ANIMATE')}
	on:out={() => (animatePenutup = 'REVERT')}
	animate
>
	<TextDropEffect
		animate={animatePenutup}
		customClass="text-[8rem] tracking-wider"
		text="Fin"
	/>
</Slide>
