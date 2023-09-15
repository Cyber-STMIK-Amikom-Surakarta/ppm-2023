<script lang="ts">
	import Blobity from 'blobity'
	import { Presentation, Slide, Layout, Vertical } from '@components'
	import TextEffectSlow from './components/TextEffectSlow.svelte'

	import Logo from './assets/logo.webp'

	new Blobity({
		invert: true,
		dotColor: '#3CCF91',
		font: 'Fira Code',
		fontSize: 13,
	})
</script>

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
		<Slide animate>
			<Layout>
				<p class="tracking-widest leading-loose text-5xl text-left">
					UKM Cyber adalah sebuah Unit Kegiatan Mahasiswa STMIK Amikom Surakara
					yang bergerak di bidang IT, programming & web design.
				</p>
			</Layout>
		</Slide>
	</Vertical>
</Presentation>
