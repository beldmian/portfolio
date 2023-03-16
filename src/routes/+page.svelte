<script>
    export let data;
	import About from '../components/About.svelte';
	import Header from '../components/Header.svelte';
	import Projects from '../components/Projects.svelte';
</script>

<div>
    <Header />
    <About />
    <Projects repos={data.repos} />
</div>
