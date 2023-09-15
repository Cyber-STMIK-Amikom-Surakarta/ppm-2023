<script>
	export let src = ''
	export let alt = ''
</script>

<img
	{src}
	{alt}
	class={($$props.class || '') + 'w-[92vw] h-[92vh] object-cover'}
/>
