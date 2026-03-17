export async function getRepos() {
  const res = await fetch("https://api.github.com/users/riverajulianm98-oss/repos", {
    headers: {
      Accept: "application/vnd.github+json",
    },
    next: { revalidate: 3600 } // refresca cada hora
  });

  const data = await res.json();

  return data
    .filter((repo: any) => !repo.fork)
    .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6);
}