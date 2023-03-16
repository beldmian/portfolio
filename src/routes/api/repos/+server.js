import {GITHUB_TOKEN} from '$env/static/private'

export async function GET() {
    let repos = await fetch(
        "https://api.github.com/users/beldmian/repos",
        {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        }
    )
    return repos
}