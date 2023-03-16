export async function load({ fetch }) {
    let repos = await fetch("/api/repos")
    return {
        repos: await repos.json(),
    }
}