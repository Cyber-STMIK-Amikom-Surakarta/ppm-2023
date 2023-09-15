<script lang="ts">
	import Blobity from 'blobity'
	import { Presentation, Slide, Layout, Vertical } from '@components'
	import TextEffectSlow from './components/TextEffectSlow.svelte'

	import Logo from './assets/logo.webp'
	import Makrab1 from '@assets/kegiatan/makrab-1.webp'
	import Arduino1 from '@assets/kegiatan/arduino-1.webp'
	import Arduino2 from '@assets/kegiatan/arduino-2.webp'

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

	<Vertical>
		<Slide animate>
			<Layout class="gap-2">
				<h1 class="text-[6rem] tracking-wider">Visi & Misi</h1>
				<h2 class="text-[4rem] tracking-wide">Cyber Amikom Surakarta</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout class="gap-4">
				<h1 class="text-[6rem] font-bold tracking-wider">Visi</h1>
				<p class="text-6xl tracking-wider leading-relaxed">
					Menjadi organisasi mahasiswa dibidang sistem informasi yang bermanfaat
					bagi diri sendiri, instansi dan masyarakat
				</p>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout class="gap-4">
				<h1 class="text-[6rem] font-bold tracking-wider">Misi</h1>
				<ul class="flex flex-col gap-2 list-decimal text-left">
					<li>
						Menyelenggarakan pelatihan dan pembinaan dalam bidang sistem
						informasi.
					</li>
					<li>
						Mewujudkan generasi muda yang peduli, madiri, kreatif dan inovatif
						melalui pemberdayaan masyarakat.
					</li>
					<li>
						Sebagai suatu wadah pembekalan dan persiapan untuk mengikuti
						kompetisi-kompetisi berskala regional, nasional maupun
						internasional.
					</li>
				</ul>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-[6rem] font-bold tracking-wider">Benefit</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Benefit</h1>
				<img src={Makrab1} alt="Makrab 1" class="w-8/12 object-cover" />
				<h2 class="text-6xl">Menambah Relasi</h2>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-[6rem] font-bold tracking-wider">Program Kerja</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<img src={Arduino1} alt="Arduino 1" class="h-[82vh] object-cover" />
				<h2 class="text-6xl">Pelatihan Arduino</h2>
			</Layout>
		</Slide>
	</Vertical>
</Presentation>
