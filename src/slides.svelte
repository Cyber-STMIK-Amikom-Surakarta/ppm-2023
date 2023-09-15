<script lang="ts">
	import Blobity from 'blobity'
	import {
		Presentation,
		Slide,
		Layout,
		Vertical,
		Image,
		Stack,
		Code,
	} from '@components'
	import TextEffectSlow from './components/TextEffectSlow.svelte'

	import Logo from './assets/logo.webp'

	import Makrab1 from '@assets/kegiatan/makrab-1.webp'
	import Makrab2 from '@assets/kegiatan/makrab-2.webp'
	import Makrab3 from '@assets/kegiatan/makrab-3.webp'

	import PertemuanRutin1 from '@assets/kegiatan/pertemuan-rutin-1.webp'
	import PertemuanRutin2 from '@assets/kegiatan/pertemuan-rutin-2.webp'

	import WebinarKriptografi1 from '@assets/kegiatan/webinar-kriptografi-1.webp'
	import WebinarKriptografi2 from '@assets/kegiatan/webinar-kriptografi-2.webp'
	import WebinarKriptografi3 from '@assets/kegiatan/webinar-kriptografi-3.webp'

	import Arduino1 from '@assets/kegiatan/arduino-1.webp'
	import Arduino2 from '@assets/kegiatan/arduino-2.webp'

	import PelatihanMikrotik1 from '@assets/kegiatan/pelatihan-mikrotik-1.webp'
	import PelatihanMikrotik2 from '@assets/kegiatan/pelatihan-mikrotik-2.webp'

	// import OnlinePortfolio1 from '@assets/karya/online-portfolio-1.webp'
	// import OnlinePortfolio2 from '@assets/karya/online-portfolio-2.webp'
	import OnlinePortfolio1Gif from '@assets/karya/online-portfolio-1.gif'

	import Schmhotel1 from '@assets/karya/schmhotel-1.webp'
	import Schmhotel2 from '@assets/karya/schmhotel-2.webp'
	import CyberWeb1 from '@assets/karya/cyber-1.webp'
	import CyberWeb2 from '@assets/karya/cyber-2.webp'
	import CyberWeb3 from '@assets/karya/cyber-3.webp'

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
				<Stack>
					<Image src={Makrab1} alt="Makrab 1" />
				</Stack>
				<h2 class="text-6xl">Bahas PR</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Benefit</h1>
				<Stack>
					<Image src={Makrab1} alt="Makrab 1" />
					<Image src={Makrab2} alt="Makrab 2" />
				</Stack>
				<h2 class="text-6xl">Menambah Relasi</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Benefit</h1>
				<Stack>
					<Image src={Makrab1} alt="Makrab 1" />
					<Image src={Makrab2} alt="Makrab 2" />
					<Image src={Makrab3} alt="Makrab 3" />
				</Stack>
				<h2 class="text-6xl">Menambah Relasi</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Benefit</h1>
				<Stack>
					<Image src={Makrab1} alt="Makrab 1" />
					<Image src={Makrab2} alt="Makrab 2" />
					<Image src={Makrab3} alt="Makrab 3" />
					<Image src={PertemuanRutin1} alt="Pertemuan Rutin 1" />
				</Stack>
				<h2 class="text-6xl">Pertemuan Rutin</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Benefit</h1>
				<Stack>
					<Image src={Makrab1} alt="Makrab 1" />
					<Image src={Makrab2} alt="Makrab 2" />
					<Image src={Makrab3} alt="Makrab 3" />
					<Image src={PertemuanRutin1} alt="Pertemuan Rutin 1" />
					<Image src={PertemuanRutin2} alt="Pertemuan Rutin 2" />
				</Stack>
				<h2 class="text-6xl">Pertemuan Rutin</h2>
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
				<Stack>
					<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
				</Stack>
				<h2 class="text-6xl">Webinar Kriptografi</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
					<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
				</Stack>
				<h2 class="text-6xl">Webinar Kriptografi</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={WebinarKriptografi1} alt="Webinar Kriptografi" />
					<Image src={WebinarKriptografi2} alt="Webinar Kriptografi" />
					<Image src={WebinarKriptografi3} alt="Webinar Kriptografi" />
				</Stack>
				<h2 class="text-6xl">Webinar Kriptografi</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={Arduino1} alt="Arduino 1" />
				</Stack>
				<h2 class="text-6xl">Pelatihan Arduino</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={Arduino1} alt="Arduino 1" />
					<Image src={Arduino2} alt="Arduino 2" />
				</Stack>
				<h2 class="text-6xl">Pelatihan Arduino</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
				</Stack>
				<h2 class="text-6xl">Pelatihan Set-up Mikrotik</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Program Kerja</h1>
				<Stack>
					<Image src={PelatihanMikrotik1} alt="Pelatihan Mikrotik 1" />
					<Image src={PelatihanMikrotik2} alt="Pelatihan Mikrotik 2" />
				</Stack>
				<h2 class="text-6xl">Pelatihan Set-up Mikrotik</h2>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
		<Slide animate>
			<Layout>
				<h1 class="text-[6rem] font-bold tracking-wider">Karya</h1>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://unknownrori.vercel.app">
					<Stack>
						<Image src={OnlinePortfolio1Gif} alt="Portofolio Online" />
					</Stack>
				</a>
				<h2 class="text-6xl">Portfolio Online</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://github.com/UnknownRori/reservation-room-app">
					<Stack>
						<Image src={Schmhotel1} alt="Website E-Commerce" />
					</Stack>
				</a>
				<h2 class="text-6xl">Website E-Commerce</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://github.com/UnknownRori/reservation-room-app">
					<Stack>
						<Image src={Schmhotel1} alt="Website E-Commerce" />
						<Image src={Schmhotel2} alt="Website E-Commerce" />
					</Stack>
				</a>
				<h2 class="text-6xl">Website E-Commerce</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://cyberamikomsolo.netlify.app/">
					<Stack>
						<Image src={CyberWeb1} alt="Website Cyber" />
					</Stack>
				</a>
				<h2 class="text-6xl">Website Cyber</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://cyberamikomsolo.netlify.app/">
					<Stack>
						<Image src={CyberWeb1} alt="Website Cyber" />
						<Image src={CyberWeb2} alt="Website Cyber" />
					</Stack>
				</a>
				<h2 class="text-6xl">Website Cyber</h2>
			</Layout>
		</Slide>

		<Slide animate>
			<Layout>
				<h1 class="text-[2rem] font-bold tracking-wider">Karya</h1>
				<a href="https://cyberamikomsolo.netlify.app/">
					<Stack>
						<Image src={CyberWeb1} alt="Website Cyber" />
						<Image src={CyberWeb2} alt="Website Cyber" />
						<Image src={CyberWeb3} alt="Website Cyber" />
					</Stack>
				</a>
				<h2 class="text-6xl">Website Cyber</h2>
			</Layout>
		</Slide>
	</Vertical>

	<Vertical>
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
	</Vertical>

	<Vertical>
		<Slide>
			<Layout>
				<h1 class="text-[6rem] font-bold tracking-wider">Fin</h1>
			</Layout>
		</Slide>
	</Vertical>
</Presentation>
