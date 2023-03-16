<script>
	import anime from 'animejs';
	import { onMount } from 'svelte';
	onMount(() => {
		var ml4 = {};
		ml4.opacityIn = [0, 1];
		ml4.scaleIn = [0.2, 1];
		ml4.durationIn = 400;
		ml4.durationOut = 400;
		ml4.delay = 400;

		anime
			.timeline({ loop: true })
			.add({
				targets: '.ml4 .letters-1',
				opacity: ml4.opacityIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-1',
				opacity: 0,
				duration: ml4.durationOut,
				easing: 'easeInOutExpo',
				delay: ml4.delay
			})
			.add({
				targets: '.ml4 .letters-2',
				opacity: ml4.opacityIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-2',
				opacity: 0,
				duration: ml4.durationOut,
				easing: 'easeInOutExpo',
				delay: ml4.delay
			})
			.add({
				targets: '.ml4 .letters-3',
				opacity: ml4.opacityIn,
				duration: ml4.durationIn
			})
			.add({
				targets: '.ml4 .letters-3',
				opacity: 0,
				duration: ml4.durationOut,
				easing: 'easeInOutExpo',
				delay: ml4.delay
			})
	});
    function scrollIntoView({ target }) {
        const el = document.querySelector(target.getAttribute('href'));
        if (!el) return;
        el.scrollIntoView({
            behavior: 'smooth'
        });
    }

</script>

<header class="h-screen w-full flex flex-col items-center justify-around p-0 m-0">
	<h1 class="ml4 md:text-8xl text-6xl text-center">
		<span class="letters letters-1">beldmian</span>
		<span class="letters letters-2">portfolio</span>
		<span class="letters letters-3">backend</span>
	</h1>
    <a href="#about" on:click|preventDefault={scrollIntoView} class="text-black bg-white p-4 rounded-2xl text-xl">More about me</a>
</header>

<style scoped>
	header {
		background-image: url('../assets/hero.jpg');
		background-size: cover;
        overflow: hidden;
	}
</style>
