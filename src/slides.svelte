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

	import {
		WaitingSlide,
		PerkenalanSlide,
		VisiMisiSlide,
		BenefitSlide,
		ProkerSlide,
		KaryaSlide,
		TambahanSlide,
		PenutupSlide,
	} from './slides'

	new Blobity({
		invert: true,
		dotColor: '#3CCF91',
		font: 'Fira Code',
		fontSize: 13,
	})
</script>

<Presentation>
	<WaitingSlide />

	<Vertical>
		<PerkenalanSlide />
	</Vertical>

	<Vertical>
		<VisiMisiSlide />
	</Vertical>

	<Vertical>
		<BenefitSlide />
	</Vertical>

	<Vertical>
		<ProkerSlide />
	</Vertical>

	<Vertical>
		<KaryaSlide />
	</Vertical>

	<Vertical>
		<TambahanSlide />
	</Vertical>

	<Vertical>
		<PenutupSlide />
	</Vertical>
</Presentation>
