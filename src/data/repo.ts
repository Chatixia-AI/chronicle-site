import { links } from "./site";

/** Below this many stars the header shows the GitHub link without its counts: a handful reads as nobody uses it. The
 * counts appear by themselves on the first build past it. */
export const minStarsShown = 100;

export interface RepoStats {
  stars: number;
  forks: number;
}

/** Stars and forks for the header's GitHub link. With GITHUB_TOKEN set (CI), the request counts against the
 * workflow's limit rather than the runner's shared address. */
async function loadRepoStats(): Promise<RepoStats | null> {
  try {
    const token = process.env.GITHUB_TOKEN;
    const response = await fetch(links.github.replace("https://github.com/", "https://api.github.com/repos/"), {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
    const repo = await response.json();
    if (typeof repo.stargazers_count !== "number" || typeof repo.forks_count !== "number") {
      throw new Error("GitHub's answer has no star or fork count");
    }
    return { stars: repo.stargazers_count, forks: repo.forks_count };
  } catch (error) {
    console.warn("GitHub stars and forks unavailable; the header shows the GitHub link alone.", error);
    return null;
  }
}

// Read once per build (the site rebuilds daily), so visitors make no API requests.
export const repoStats = loadRepoStats();
