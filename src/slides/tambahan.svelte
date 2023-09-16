<script>
	import { Slide, Layout, Code } from '@components'
</script>

<Slide animate>
	<Layout>
		<h1 class="text-[5rem] font-bold tracking-wider">
			Presentasi ini dibuat menggunakan kodingan
		</h1>
	</Layout>
</Slide>

<Slide animate>
	<Layout>
		<h1 class="text-[2rem] font-bold tracking-wider">
			Presentasi ini dibuat menggunakan kodingan
		</h1>
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

<Slide image="http://i.giphy.com/90F8aUepslB84.gif">
	<Layout>
		<h1 class="text-[6rem] font-bold tracking-wider">Join us Now</h1>
	</Layout>
</Slide>
