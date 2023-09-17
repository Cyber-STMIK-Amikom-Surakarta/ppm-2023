<script>
	export let src = ''
	export let alt = ''
</script>

<img
	{src}
	{alt}
	class={($$props.class || '') + 'w-[960px] h-[500px] object-cover'}
/>
