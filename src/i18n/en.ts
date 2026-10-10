// The home page's words in English. ja.ts has the same shape in Japanese; the components read one or the other.
// A Seg list is a run of text where { code } parts are set in monospace.

export type Seg = string | { code: string };

export const en = {
  meta: {
    title: "Interlatch: shared memory for your coding agents",
    description:
      "Shared memory for your coding agents. Every session recorded on your own machines, and every lesson linked to the session, project and agent it came from.",
  },

  base: {
    skip: "Skip to content",
    home: "Interlatch home",
    by: "by Chatixia",
    nav: { record: "What it does", install: "Install", team: "Teams", docs: "Docs", github: "GitHub" },
    cta: "Install",
    theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
    // The link to the page in the other language, written in that language.
    other: { label: "日本語", title: "日本語のページへ" },
    footer: {
      blurb: ["Shared memory for your coding agents. Keep the work. Carry it forward. Part of ", "."],
      license: "MIT license · no telemetry",
      product: "Product",
      releases: "Releases",
      changelog: "Changelog",
      docs: "Docs",
      gettingStarted: "Getting started",
      mcp: "MCP server",
      vscode: "VS Code extension",
      hub: "A hub for your team",
      otherDocs: { label: "日本語", page: "/docs/ja/" },
      elsewhere: "Elsewhere",
      issues: "Report a bug",
      contributing: "Contributing guide",
      community: "Community Q&A",
      ideas: "Feature requests",
      roadmap: "Roadmap",
    },
  },

  copy: { copy: "Copy", copied: "Copied", select: "Select it" },

  // Under the install command, for people who know it by its old name.
  renamed: {
    text: ["Interlatch was called Chronicle: ", { code: "chronicle" }, " still works, and your sessions and settings move over automatically. "] as Seg[],
    link: "Moving from Chronicle",
  },

  hero: {
    kicker: "Shared memory for your coding agents",
    title: ["Different agents.", "Knowledge that stays."],
    body: "Interlatch records the sessions of every coding agent you use, on your own Mac. Each lesson it takes from them stays linked to the session, project and agent it came from, and earns trust as later work confirms it.",
    // The tagline in the other language, under the English one.
    aside: { lang: "ja", text: "エージェントが変わっても、学びは残る。" },
    start: "Get started",
    see: "See how memory carries forward",
    facts: "macOS 13+ · free and open source · no telemetry",
    card: {
      log: "Shared memory · billing-api",
      meta: "Today 14:52 · Claude Code · ",
      title: "Stop double charges when Stripe retries invoice.paid",
      status: "completed · 4 lessons kept",
      kind: "Gotcha",
      lesson: "Stripe webhook signatures need the raw request body",
      detail: [
        "Parsing to JSON first fails with ",
        { code: "SignatureVerificationError" },
        ". Read ",
        { code: "await request.body()" },
        " and pass that.",
      ] as Seg[],
      tink: "Tink, Interlatch's guide from the Blueprint Cast: a small robot ticking items off a clipboard",
      next: "Next session · Codex",
      reuse: "I'll use the raw request body. The earlier Claude Code session explains why.",
      source: "Source kept · Claude Code · billing-api",
      caption: "Example · learned in Claude Code, used in Codex",
      keeper: "Tink keeps the record",
    },
  },

  install: {
    label: "01 / Set up",
    title: "Connect your agents. Keep what they learn.",
    body: "Interlatch installs with uv and reads your agents' session files without changing them. It keeps the record and has the lessons ready for the next session. The analysis runs through your own Claude Code, Codex or IBM Bob, or a model provider's API with your own key: Anthropic, Amazon Bedrock, OpenAI, Azure OpenAI, OpenRouter, or Ollama on your own Mac.",
    step: "Step",
    steps: [
      {
        title: "Install",
        body: "Install the command line, then let it find the coding agents on your Mac, import their past sessions and start from login.",
      },
      {
        title: "Work as usual",
        body: "Use Claude Code, Codex, Copilot, Bob or Antigravity as you always do. Each session is recorded once it ends and read in the background.",
      },
      {
        title: "Carry the context forward",
        body: "Search earlier work with ⌘K in the dashboard at 127.0.0.1:11524, or let a connected agent retrieve project knowledge through MCP before it tackles the next problem.",
      },
    ],
    needs: "Needs",
    requirements: "macOS 13 or later, and Claude Code, Codex, IBM Bob or a model provider for the analysis",
    app: "Prefer an app? Download it for Apple silicon",
    setsUp: "What the install sets up",
  },

  record: {
    label: "02 / Memory that carries forward",
    title: "Keep the work. Carry it forward.",
    body: "A session ends. Its lessons stay with the project, linked to the work that produced them and ready for another agent to retrieve.",
    entry: "Entry",
    entries: [
      {
        tag: "Keep",
        title: "Keep the session behind the fix.",
        body: "Claude Code clears transcripts after 30 days. Interlatch keeps sessions from the agents you connect, with their project and source, so the conversation behind last month's fix is still there when you need it.",
        more: "What gets recorded",
      },
      {
        tag: "Learn",
        title: "Keep the lesson attached to its evidence.",
        body: "Interlatch reads each finished session with your own Claude Code, Codex or IBM Bob, or a model provider you choose, and keeps fixes, gotchas, decisions and commands as project knowledge. Each lesson points back to its source session and earns trust as later work confirms it, so you can check the reasoning before reusing the answer.",
        more: "How analysis works",
      },
      {
        tag: "Share",
        title: "Let the next agent use what the last learned.",
        body: "A Copilot session finds why a deployment failed. Later, Codex can retrieve that lesson through MCP, see the source and use the fix. Connected agents search the same project memory, even when you switch tools or start a fresh session.",
        more: "The MCP server",
      },
      {
        tag: "Trace",
        title: "Follow the code back to the decision.",
        body: "The VS Code extension shows the sessions behind the file you have open, across the agents that worked on it. Open the original conversation to see what changed, why it changed and what the next agent should know.",
        more: "The VS Code extension",
      },
    ],
  },

  showcase: {
    label: "03 / The dashboard",
    title: "A memory you can inspect.",
    body: "Browse sessions from different agents, inspect the lessons they produced and open the source conversation. The dashboard runs on your own machines: on your Mac, on your phone through Tailscale, or on one hub that your other computers and your team share.",
    tour: "A one-minute tour",
    tourAlt:
      "A one-minute tour of the Interlatch dashboard on demo data: Home, a session with its transcript and extracted knowledge, ⌘K search, the glossary Map and a weekly review",
    tourText: "Home, a session with what it taught, ⌘K search, the Map and a weekly review.",
    demo: "Made-up demo data",
    screens: "Screen by screen",
    tablist: "Dashboard screens",
    shots: [
      {
        label: "Home",
        alt: "Interlatch's Home page: this week's sessions, stats and recent knowledge",
        text: "This week at a glance: sessions, what they cost, what they taught.",
      },
      {
        label: "A session",
        alt: "A session page with its summary, outcome, extracted knowledge and full transcript",
        text: "Follow a lesson to its source: the session, its outcome and the full conversation behind it.",
      },
      {
        label: "⌘K search",
        alt: "The ⌘K palette searching sessions, knowledge and pages at once",
        text: "Search across agents and sessions for the earlier fix, decision or command you need now.",
      },
      {
        label: "Map",
        alt: "The glossary Map: your own vocabulary drawn as a collapsible mindmap",
        text: "Your own vocabulary, drawn as a map of how your projects connect.",
      },
      {
        label: "A project",
        alt: "A project page: its sessions, time and cost, the knowledge base Interlatch keeps for it, and its gotchas and decisions",
        text: "A knowledge base for each project: its gotchas, decisions and commands, rewritten as sessions add to them.",
      },
      {
        label: "Weekly review",
        alt: "A weekly review: the week's headline, active time, sessions and cost against the week before, and the knowledge captured",
        text: "Each finished week, written up: what changed, where the time went, and what it taught.",
      },
    ],
    more: "Also in the dashboard",
    extras: [
      {
        title: "Systems map",
        body: "Every project as a system, with its parts and where it is deployed, and lines where one project uses another. Drawn from your manifests and what sessions did, never by a model.",
        page: "dashboard/#systems-map",
      },
      {
        title: "Artifacts",
        body: "The documents, pages, diagrams, decks, pull requests and commits your agents made, each linked to its session and marked when the file has changed or is gone.",
        page: "dashboard/#artifacts",
      },
      {
        title: "Suggestions",
        body: "Lines for CLAUDE.md or AGENTS.md from what keeps going wrong and what keeps being confirmed. Nothing is written until you approve it, and Undo takes it back out.",
        page: "suggestions/",
      },
      {
        title: "Project groups",
        body: "Put related projects under one heading, by hand or by the folder they share, and filter sessions by the whole group.",
        page: "dashboard/#project-groups",
      },
    ],
  },

  sources: {
    label: "04 / Across agents",
    title: "One record for every agent.",
    body: "Bring sessions from the tools you use into one archive and project knowledge base. Keep working in the agent that suits the task; the earlier work stays searchable. Add sources from Settings or with interlatch connect.",
    agents: [
      { name: "Claude Code", when: "as each session ends" },
      { name: "Codex", when: "every 15 minutes, once idle" },
      { name: "Codex Cloud", when: "tasks, through the codex CLI" },
      { name: "GitHub Copilot", when: "VS Code and Copilot CLI" },
      { name: "IBM Bob", when: "every 15 minutes" },
      { name: "Google Antigravity", when: "every 15 minutes" },
      { name: "claude.ai and ChatGPT", when: "from your data export" },
    ],
    mcp: ["Make that memory available to Claude Desktop, Cursor, Windsurf and Gemini CLI through the ", "MCP server", "."],
  },

  team: {
    label: "05 / Your team",
    title: "One agent learns it. The whole team knows it.",
    body: "Run a hub on a server your team already has, and each person's Interlatch shares what it learned there. Transcripts can stay on each computer: the hub takes the lessons, and hands everyone's agents what their teammates learned in the same repositories.",
    points: [
      {
        title: "A hub in Docker.",
        body: "One compose file runs the hub, HTTPS through Caddy and a Postgres team store on any server. The hub analyzes nothing, so it needs no model and no API key.",
        page: "docker/",
      },
      {
        title: "Lessons travel, transcripts stay.",
        body: "Each computer analyzes its own sessions and sends the hub only each one's summary and the project's lessons. Prompts, commands, file paths and transcripts never leave it.",
        page: "devices/#sharing-knowledge-only",
      },
      {
        title: "Teammates' lessons, in your agent.",
        body: "After each push, your computer gets back what teammates learned in the same repositories, wherever each person cloned them. The MCP tools and start-of-session notes include them, marked as teammates'.",
        page: "join-a-hub/",
      },
      {
        title: "People, roles and projects.",
        body: "Invite each person as an admin, a member or read-only with a one-time code. Admins choose which projects each person sees, and every invite, sign-in and change goes into an audit log.",
        page: "devices/#people-and-roles",
      },
    ],
    join: "Joining your team's hub",
    run: "Running a hub in Docker",
  },

  rules: {
    label: "06 / Memory you can trust",
    title: "Shared context. Grounded in evidence.",
    rule: "Rule",
    rules: [
      {
        title: "It stays local.",
        body: "No server of ours, no telemetry, no account. The archive and everything learned from it live on your own machines, and a team's hub runs on a server your team chooses.",
      },
      {
        title: "Your models. Your accounts.",
        body: "Analysis runs through your own Claude Code, Codex or Bob login or your own API key, with secrets redacted first. With Ollama, it never leaves your Mac. Memory retrieved through MCP goes to the connected agent and the model you use there. No key of ours in the middle.",
      },
      {
        title: "Keep the evidence in reach.",
        body: "Extracted lessons stay linked to their source sessions and earn trust as later sessions confirm them. You and your agents can check the evidence and judge whether a lesson applies to the work ahead.",
      },
    ],
    closing: {
      title: "Give the next agent a head start.",
      body: "Bring in the sessions already on your Mac and connect the agents you use. Keep what they learn attached to your projects, ready to carry into the next task.",
      guide: "Read the install guide",
      star: "Star it on GitHub",
    },
  },

  visuals: {
    kept: {
      caption: "Archive · all agents",
      note: "Raw transcripts kept for good, on your Mac",
      rows: [
        { when: "today", agent: "Claude Code", project: "billing-api", title: "Stop double charges when Stripe retries invoice.paid" },
        { when: "today", agent: "Codex", project: "storefront", title: "Fix the checkout hydration mismatch on delivery dates" },
        { when: "1d", agent: "Copilot", project: "infra", title: "Deploy from GitHub Actions with OIDC instead of access keys" },
        { when: "2d", agent: "Claude Code", project: "recommender", title: "Cut similar-items latency from 4 s to 7 ms with an HNSW index" },
        { when: "40d", agent: "Claude Code", project: "recommender", title: "Set up the recommender repo", old: true },
      ],
      deleted: "deleted on day 30",
      kept: "kept",
    },
    knowledge: {
      caption: "Knowledge · billing-api",
      note: "Kept with source sessions, then confirmed by later work",
      items: [
        {
          kind: "Fix",
          title: "Stripe retries webhooks: dedupe on event.id",
          body: "Record each event.id in processed_events in the same transaction as the side effect, and return 200 for repeats.",
        },
        {
          kind: "Decision",
          title: "Idempotency in Postgres, not Redis",
          body: "The dedupe row commits atomically with the invoice update; a Redis key could be written while the transaction rolls back.",
        },
        {
          kind: "Command",
          title: "Forward Stripe webhooks to the local API",
          body: "stripe listen --forward-to localhost:8000/webhooks/stripe",
        },
      ],
    },
    ask: {
      caption: "Example · Codex · infra",
      note: "Codex retrieves a lesson from an earlier Copilot session",
      you: "you ›",
      agent: "Codex ›",
      question: 'the deploy fails with "Not authorized to perform sts:AssumeRoleWithWebIdentity". seen this before?',
      found: "1 gotcha · infra · Copilot · established ×2",
      source: "Source · Copilot · Deploy from GitHub Actions with OIDC instead of access keys",
      answer: [
        "Yes. A Copilot session in infra found this last week. For jobs with ",
        { code: "environment:" },
        ", the OIDC token's sub is ",
        { code: "repo:ORG/REPO:environment:NAME" },
        ", so a trust policy matching the branch fails. I'll match the environment instead.",
      ] as Seg[],
    },
    team: {
      caption: "Hub · billing-api",
      note: "Knowledge only: the transcript never left Mika's laptop",
      laptop: "Mika's laptop",
      stays: "stays here",
      sent: "sent",
      rows: [
        { what: "Transcript, prompts, commands", sent: false },
        { what: "Session summary", sent: true },
        { what: "3 lessons about billing-api", sent: true },
      ],
      hub: "The team's hub",
      hubMeta: "billing-api · 4 people · 58 lessons",
      kind: "Gotcha",
      lesson: "Stripe webhook signatures need the raw request body",
      from: "from Mika's sessions",
      you: "Your agent, next session",
    },
    editor: {
      // The extension's own labels stay in English: that's how it looks. Session titles are the user's words.
      note: "The agent, project and source session behind the code",
      sessions: ["Stop double charges when Stripe retries…", "Stop duplicate dunning emails after deploys"],
    },
  },

  help: {
    label: "Resources & community",
    title: "Keep up. Get involved.",
    updates: "Latest updates",
    viewAll: "View all",
    changelogFallback: "Read the changelog",
    guides: "Guides",
    guideItems: [
      { title: "Getting started", body: "Install Interlatch and bring in earlier sessions.", page: "install/" },
      { title: "Connect through MCP", body: "Give the next agent access to project memory.", page: "mcp/" },
      { title: "Phone & other computers", body: "Keep one archive across your devices.", page: "devices/" },
    ],
    community: "Help & contribute",
    qa: "Ask the community",
    ideas: "Suggest or vote on a feature",
    roadmap: "Explore the roadmap",
    announcements: "Read announcements",
    issues: "Report a bug",
    contributing: "Contribute code or docs",
  },

  notFound: {
    title: "Not found · Interlatch",
    description: "This page isn't in the record.",
    kicker: "404 · no entry",
    heading: "This page isn't in the record.",
    body: "It may have moved when the docs moved to /docs/.",
    home: "Home",
    docs: "The docs",
  },
};

export type Strings = typeof en;
