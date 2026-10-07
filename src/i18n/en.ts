// The home page's words in English. ja.ts has the same shape in Japanese; the components read one or the other.
// A Seg list is a run of text where { code } parts are set in monospace.

export type Seg = string | { code: string };

export const en = {
  meta: {
    title: "Chronicle: a searchable memory of every coding-agent session",
    description:
      "Chronicle keeps every Claude Code, Codex, Copilot, IBM Bob and Antigravity session on your Mac, writes down what was learned, and gives it back to you and your agents.",
  },

  base: {
    skip: "Skip to content",
    home: "Chronicle home",
    by: "by Chatixia",
    nav: { record: "What it does", install: "Install", docs: "Docs", github: "GitHub" },
    cta: "Install",
    theme: { light: "Switch to light theme", dark: "Switch to dark theme" },
    // The link to the page in the other language, written in that language.
    other: { label: "日本語", title: "日本語のページへ" },
    footer: {
      blurb: ["A searchable memory of every coding-agent session you run. Part of ", "."],
      license: "MIT license · no telemetry",
      product: "Product",
      releases: "Releases",
      changelog: "Changelog",
      docs: "Docs",
      gettingStarted: "Getting started",
      mcp: "MCP server",
      vscode: "VS Code extension",
      otherDocs: { label: "日本語", page: "/docs/ja/" },
      elsewhere: "Elsewhere",
    },
  },

  copy: { copy: "Copy", copied: "Copied", select: "Select it" },

  hero: {
    kicker: "A logbook for your coding agents",
    title: ["Your agents forget.", "Chronicle remembers."],
    body: "Claude Code deletes transcripts after 30 days, and nothing carries a fix from one session to the next. Chronicle keeps every session from Claude Code, Codex, Copilot, IBM Bob and Antigravity on your Mac, writes down what was learned, and hands it back to you and your agents.",
    // The tagline in the other language, under the English one.
    aside: { lang: "ja", text: "コーディングエージェントのすべてのセッションを、検索できる記憶に。" },
    start: "Get started",
    see: "See what it keeps",
    facts: "macOS 13+ · free and open source · no telemetry",
    card: {
      log: "Log · billing-api",
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
      tink: "Tink, Chronicle's guide from the Blueprint Cast: a small robot with a checklist, beside a scroll of log lines",
      caption: "Every session, kept and read",
      keeper: "Tink keeps the record",
    },
  },

  install: {
    label: "01 / Set up",
    title: "Running in a minute.",
    body: "Chronicle installs with uv and reads your agents' files without changing them. The analysis runs through your own Claude Code or Codex login, or a model provider you choose, Ollama on your own Mac included.",
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
        title: "Open the record",
        body: "The dashboard runs at 127.0.0.1:11524. Press ⌘K to search everything, or ask your agent what it learned last week.",
      },
    ],
    needs: "Needs",
    requirements: "macOS 13 or later, and Claude Code, Codex or a model provider for the analysis",
    app: "Prefer an app? Download it for Apple silicon",
    setsUp: "What the install sets up",
  },

  record: {
    label: "02 / The record",
    title: "Every session becomes something you can use.",
    body: "Chronicle keeps the raw record, reads it, and gives it back where you need it: in a dashboard, to your agents, and beside your code.",
    entry: "Entry",
    entries: [
      {
        tag: "Keep",
        title: "Never lose a session.",
        body: "Claude Code clears its transcripts after 30 days. Chronicle archives every session as it ends, from every agent you connect, so the conversation that fixed last month's outage is still there next year.",
        more: "What gets recorded",
      },
      {
        tag: "Learn",
        title: "Lessons, written down for you.",
        body: "Chronicle reads each finished session with your own Claude Code or Codex, or a model provider you choose, and keeps what's worth keeping: fixes, gotchas, decisions, commands. They merge into a knowledge base per project, and earn trust each time another session confirms them.",
        more: "How analysis works",
      },
      {
        tag: "Ask",
        title: "Your agents can ask.",
        body: "Through its MCP server, an agent can search your past sessions before it re-derives anything: have we hit this error before, why did we choose Postgres here, how is this project deployed. Claude Desktop, Cursor, Windsurf and Gemini CLI can connect too.",
        more: "The MCP server",
      },
      {
        tag: "Find",
        title: "Right next to your code.",
        body: "The VS Code extension shows the sessions behind the file you have open, and every file agents worked on in your workspace. Why is this code like this? One click, and you're reading the session that wrote it.",
        more: "The VS Code extension",
      },
    ],
  },

  showcase: {
    label: "03 / The dashboard",
    title: "Read the whole record.",
    body: "A local dashboard for browsing it all: on your Mac, on your phone, or on one hub that your other computers and your team share.",
    tour: "A one-minute tour",
    tourAlt:
      "A one-minute tour of the Chronicle dashboard on demo data: Home, a session with its transcript and extracted knowledge, ⌘K search, the glossary Map and a weekly review",
    tourText: "Home, a session with what it taught, ⌘K search, the Map and a weekly review.",
    demo: "Made-up demo data",
    screens: "Screen by screen",
    tablist: "Dashboard screens",
    shots: [
      {
        label: "Home",
        alt: "Chronicle's Home page: this week's sessions, stats and recent knowledge",
        text: "This week at a glance: sessions, what they cost, what they taught.",
      },
      {
        label: "A session",
        alt: "A session page with its summary, outcome, extracted knowledge and full transcript",
        text: "Every session with its summary, outcome, the lessons taken from it, and the full transcript.",
      },
      {
        label: "⌘K search",
        alt: "The ⌘K palette searching sessions, knowledge and pages at once",
        text: "One keystroke searches every session, every lesson and every page.",
      },
      {
        label: "Map",
        alt: "The glossary Map: your own vocabulary drawn as a collapsible mindmap",
        text: "Your own vocabulary, drawn as a map of how your projects connect.",
      },
    ],
  },

  sources: {
    label: "04 / Sources",
    title: "One record for every agent.",
    body: "All of them share one dashboard, one knowledge base and one set of MCP tools. Connect more any time from Settings, or with chronicle connect.",
    agents: [
      { name: "Claude Code", when: "as each session ends" },
      { name: "Codex", when: "every 15 minutes, once idle" },
      { name: "GitHub Copilot", when: "VS Code and Copilot CLI" },
      { name: "IBM Bob", when: "every 15 minutes" },
      { name: "Google Antigravity", when: "every 15 minutes" },
      { name: "claude.ai and ChatGPT", when: "from your data export" },
    ],
    mcp: ["Claude Desktop, Cursor, Windsurf and Gemini CLI can use the ", "MCP server", " too."],
  },

  rules: {
    label: "05 / The rules",
    title: "Three rules it keeps.",
    rule: "Rule",
    rules: [
      {
        title: "It stays local.",
        body: "No server of ours, no telemetry, no account. The archive and everything learned from it live on your own machines.",
      },
      {
        title: "It runs on your account.",
        body: "The one thing sent out is the analysis: a condensed digest, secrets redacted first, through your own Claude Code or Codex login or your own API key. With Ollama, nothing leaves your Mac at all. No key of ours in the middle.",
      },
      {
        title: "It says what it doesn't know.",
        body: "Lessons start as seen once and earn trust as later sessions confirm them. Chronicle would rather say so than guess.",
      },
    ],
    closing: {
      title: "Start keeping the record.",
      body: "Install it once. Every session from then on, and the ones already on your Mac, becomes part of it.",
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
      note: "Extracted automatically, then confirmed by later sessions",
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
      caption: "Terminal · infra",
      note: "The agent searched first, and skipped an afternoon of debugging",
      you: "you ›",
      agent: "agent ›",
      question: 'the deploy fails with "Not authorized to perform sts:AssumeRoleWithWebIdentity". seen this before?',
      found: "1 gotcha · infra · established ×2",
      answer: [
        "Yes, in infra last week. For jobs with ",
        { code: "environment:" },
        ", the OIDC token's sub is ",
        { code: "repo:ORG/REPO:environment:NAME" },
        ", so a trust policy matching the branch fails. I'll match the environment instead.",
      ] as Seg[],
    },
    editor: {
      // The extension's own labels stay in English: that's how it looks. Session titles are the user's words.
      note: "Sessions behind the open file, and the whole workspace",
      sessions: ["Stop double charges when Stripe retries…", "Stop duplicate dunning emails after deploys"],
    },
  },

  notFound: {
    title: "Not found · Chronicle",
    description: "This page isn't in the record.",
    kicker: "404 · no entry",
    heading: "This page isn't in the record.",
    body: "It may have moved when the docs moved to /docs/.",
    home: "Home",
    docs: "The docs",
  },
};

export type Strings = typeof en;
