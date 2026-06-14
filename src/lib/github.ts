export async function getLatestCommit(owner: string, repo: string) {
  const token = process.env.GITHUB_TOKEN
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github.v3+json',
  }
  if (token) headers.Authorization = `token ${token}`

  const res = await fetch(
    `https://api.github.com/repos/${owner}/${repo}/commits?per_page=1`,
    { headers }
  )

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }

  const data = await res.json()
  if (!data || data.length === 0) throw new Error('No commits found')

  const c = data[0]
  return {
    sha: c.sha.slice(0, 7),
    html_url: c.html_url,
    date: c.commit?.committer?.date ?? null,
  }
}
