<script>
	import anime from 'animejs'
	import { onMount } from 'svelte'

	export let type = 'h1'
	export let text = ''

	export let loop = false
	export let duration = 1000

	let element = null

	onMount(() => {
		element.innerHTML = element.textContent.replace(
			/\S/g,
			"<span class='letter'>$&</span>"
		)
		anime.timeline({ loop: loop }).add({
			targets: element.querySelectorAll('.letter'),
			opacity: [0, 1],
			easing: 'easeInOutQuad',
			duration: duration,
			delay: (el, i) => 150 * (i + 1),
		})
	})
</script>

<svelte:element
	this={type}
	bind:this={element}
	class={$$props.class}
	{...$$restProps}
>
	{text}
</svelte:element>
