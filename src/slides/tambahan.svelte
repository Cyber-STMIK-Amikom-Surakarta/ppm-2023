<script>
	import { Slide, Layout, Code } from '@components'

	import TextEffectSlow from '../components/TextEffectSlow.svelte'
	import TextLineEffect from '../components/TextLineEffect.svelte'
	import TextPoppingEffect from '../components/TextPoppingEffect.svelte'

	let animateTitle = 'NONE'
	let animateTitleLine = 'NONE'
	let animateJoinUs = 'NONE'
</script>

<Slide
	on:in={() => (animateTitle = 'ANIMATE')}
	on:out={() => (animateTitle = 'REVERT')}
	animate
>
	<Layout>
		<TextEffectSlow
			animate={animateTitle}
			text="Presentasi ini dibuat menggunakan kodingan"
			class="text-[5rem] font-bold tracking-wider"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => (animateTitleLine = 'ANIMATE')}
	on:out={() => (animateTitleLine = 'REVERT')}
	animate
>
	<Layout>
		<TextLineEffect
			animate={animateTitleLine}
			delay={1000}
			text="Presentasi ini dibuat menggunakan kodingan"
			class="text-[2rem] font-bold tracking-wider"
		/>
		<Code lang="svelte">
			{`
<Presentation>
	<Vertical>
		<Slide animate>
			<Layout>
				<img src={Logo} alt="Logo Cyber" class="w-72" />
				<TextEffectSlow
					duration={1000}
					class="text-[6rem] font-bold tracking-wide"
					text="Cyber Amikom Surakarta"
				/>
			</Layout>
		</Slide>
		...
	</Vertical>
	...
</Presentation>
					`}
		</Code>
	</Layout>
</Slide>

<Slide
	image="http://i.giphy.com/90F8aUepslB84.gif"
	on:in={() => (animateJoinUs = 'ANIMATE')}
	on:out={() => (animateJoinUs = 'REVERT')}
>
	<Layout>
		<TextPoppingEffect
			animate={animateJoinUs}
			class="text-[6rem] font-bold tracking-wider"
			text="Join us Now"
		/>
	</Layout>
</Slide>
