<script>
	import { Slide, Layout, Image, Stack } from '@components'

	import Makrab1 from '@assets/kegiatan/makrab-1.webp'
	import Makrab2 from '@assets/kegiatan/makrab-2.webp'
	import Makrab3 from '@assets/kegiatan/makrab-3.webp'

	import PertemuanRutin1 from '@assets/kegiatan/pertemuan-rutin-1.webp'
	import PertemuanRutin2 from '@assets/kegiatan/pertemuan-rutin-2.webp'
	import TextPoppingEffect from '../components/TextPoppingEffect.svelte'
	import TextLineSpawnEffect from '../components/TextLineSpawnEffect.svelte'
	import TextLineEffect from '../components/TextLineEffect.svelte'

	let animateBenefitTitle = 'NONE'
	let animateBenefitTitleLine = 'NONE'
	let animateBahasPR = 'NONE'
	let animateRelasi = 'NONE'
	let animatePertemuan = 'NONE'
</script>

<Slide
	on:in={() => (animateBenefitTitle = 'ANIMATE')}
	on:out={() => (animateBenefitTitle = 'REVERT')}
	animate
>
	<Layout>
		<TextPoppingEffect
			animate={animateBenefitTitle}
			class="text-[6rem] font-bold tracking-wider"
			text="Benefit"
		/>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateBenefitTitleLine = 'ANIMATE'
		animateBahasPR = 'ANIMATE'
	}}
	on:out={() => {
		animateBenefitTitleLine = 'REVERT'
		animateBahasPR = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateBahasPR}
			class="text-6xl"
			text="Bahas PR"
		/>
		<Stack>
			<Image src={Makrab1} alt="Makrab 1" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateRelasi = 'ANIMATE'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateRelasi}
			class="text-6xl"
			text="Menambah Relasi"
		/>
		<Stack>
			<Image src={Makrab1} alt="Makrab 1" />
			<Image src={Makrab2} alt="Makrab 2" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateRelasi = 'ANIMATE'
	}}
	on:out={() => (animateRelasi = 'REVERT')}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animateRelasi}
			class="text-6xl"
			text="Menambah Relasi"
		/>
		<Stack>
			<Image src={Makrab1} alt="Makrab 1" />
			<Image src={Makrab2} alt="Makrab 2" />
			<Image src={Makrab3} alt="Makrab 3" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animatePertemuan = 'ANIMATE'
	}}
	on:out={() => {
		animatePertemuan = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePertemuan}
			class="text-6xl"
			text="Pertemuan Rutin"
		/>
		<Stack>
			<Image src={Makrab1} alt="Makrab 1" />
			<Image src={Makrab2} alt="Makrab 2" />
			<Image src={Makrab3} alt="Makrab 3" />
			<Image src={PertemuanRutin1} alt="Pertemuan Rutin 1" />
		</Stack>
	</Layout>
</Slide>

<Slide
	on:in={() => {
		animateBenefitTitleLine = 'ANIMATE'
		animatePertemuan = 'ANIMATE'
	}}
	on:out={() => {
		animateBenefitTitleLine = 'REVERT'
		animatePertemuan = 'REVERT'
	}}
	animate
>
	<Layout>
		<TextLineSpawnEffect
			animate={animatePertemuan}
			class="text-6xl"
			text="Pertemuan Rutin"
		/>
		<Stack>
			<Image src={Makrab1} alt="Makrab 1" />
			<Image src={Makrab2} alt="Makrab 2" />
			<Image src={Makrab3} alt="Makrab 3" />
			<Image src={PertemuanRutin1} alt="Pertemuan Rutin 1" />
			<Image src={PertemuanRutin2} alt="Pertemuan Rutin 2" />
		</Stack>
	</Layout>
</Slide>
