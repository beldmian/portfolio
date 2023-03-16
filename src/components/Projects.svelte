<script>
	import SvelteMarkdown from 'svelte-markdown';

	export let repos;
	let selected_project_readme = null;
	let fetch_project_readme = async (selected_project) => {
		return (
			await fetch(
				'https://raw.githubusercontent.com/beldmian/' + selected_project + '/main/README.md'
			)
		).text();
	};
</script>

<section class="snap-start h-screen bg-gradient-to-b from-zinc-900 to-slate-900 p-10">
	<h2 class="text-6xl text-center mb-3">Projects</h2>
	{#if !selected_project_readme}
		<div
			class="md:w-11/12 w-full m-auto border-4 rounded-2xl p-2 grid md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3 overflow-y-scroll projects"
		>
			{#each repos.sort((a, b) => (a.stargazers_count < b.stargazers_count ? 1 : -1)) as repo}
				<div
					class="bg-white rounded-2xl p-3 text-black hover:bg-black cursor-pointer hover:text-white duration-500"
					on:click={() => (selected_project_readme = fetch_project_readme(repo.name))}
					on:keydown={() => (selected_project_readme = fetch_project_readme(repo.name))}
				>
					<h4 class="text-2xl">
						{repo.name} / {repo.stargazers_count}
					</h4>
					<p>{repo.description || 'No description'}</p>
				</div>
			{/each}
		</div>
	{:else}
		<div
			class="md:w-11/12 w-full  m-auto border-4 rounded-2xl p-2 bg-white overflow-y-scroll projects text-black"
		>
			{#await selected_project_readme}
				<span>Loading...</span>
			{:then text}
				<button
					on:click={() => selected_project_readme = null}>Back</button
				>
				<div class="text">
					<SvelteMarkdown source={text} />
				</div>
			{/await}
		</div>
	{/if}
</section>

<style>
	.projects {
		height: 80vh;
	}
	.projects::-webkit-scrollbar {
		width: 0.5em;
	}

	.projects::-webkit-scrollbar-thumb {
		background-color: white;
		border-radius: 10px;
	}
</style>
