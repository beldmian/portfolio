<script>
    export let data;
	import About from '../components/About.svelte';
	import Header from '../components/Header.svelte';
	import Projects from '../components/Projects.svelte';
	import Skills from '../components/Skills.svelte';
</script>

<div class="overflow-y-scroll h-screen snap-mandatory snap-y">
    <Header />
    <About />
    <Projects repos={data.repos} />
    <Skills />
</div>

<style scoped>
div::-webkit-scrollbar {
    width: 0.5em;
}

div::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
}
</style>