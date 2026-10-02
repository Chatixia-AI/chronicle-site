// Links and copy shared across the pages. The docs live at /docs/, built from agents-chronicle.
const repo = "https://github.com/Chatixia-AI/agents-chronicle";

export const links = {
  docs: "/docs/",
  install: "/docs/install/",
  github: repo,
  releases: `${repo}/releases/latest`,
  changelog: `${repo}/blob/main/CHANGELOG.md`,
  pypi: "https://pypi.org/project/agents-chronicle/",
  chatixia: "https://chatixia.net",
};

export const installCommand = "uv tool install --python 3.13 agents-chronicle";
