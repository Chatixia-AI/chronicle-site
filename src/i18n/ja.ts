// The home page's words in Japanese, in the same shape as en.ts. The terms follow the dashboard's own Japanese
// (Interlatch src/interlatch/web/ja.js): 修正, 落とし穴, 決定, 定着, 1 回のみ, and so on.
import type { Strings } from "./en";

export const ja: Strings = {
  meta: {
    title: "Interlatch：コーディングエージェントが共有する記憶",
    description:
      "コーディングエージェントが共有する記憶。すべてのセッションを手元のマシンに記録し、どの教訓も、元のセッション、プロジェクト、エージェントにつながったまま残ります。",
  },

  base: {
    skip: "本文へ移動",
    home: "Interlatch ホーム",
    by: "by Chatixia",
    nav: { label: "メイン", record: "できること", install: "インストール", team: "チーム", faq: "よくある質問", docs: "ドキュメント", github: "GitHub" },
    menu: "メニュー",
    cta: "インストール",
    theme: { light: "ライトテーマに切り替え", dark: "ダークテーマに切り替え" },
    imageAlt: "Interlatch のホーム：今週のセッション、統計、最近のナレッジ",
    other: { label: "English", title: "Read this page in English" },
    footer: {
      blurb: ["コーディングエージェントが共有する記憶。学びを残し、次の作業につなぐ。", " の一部です。"],
      license: "MIT ライセンス · テレメトリなし",
      product: "製品",
      releases: "リリース",
      changelog: "変更履歴",
      docs: "ドキュメント",
      gettingStarted: "はじめに",
      mcp: "MCP サーバー",
      vscode: "VS Code 拡張機能",
      hub: "チームのハブ",
      otherDocs: { label: "English", page: "/docs/" },
      elsewhere: "関連リンク",
      issues: "不具合を報告",
      contributing: "貢献ガイド",
      community: "コミュニティ Q&A",
      ideas: "機能のリクエスト",
      roadmap: "ロードマップ",
    },
  },

  copy: { copy: "コピー", copied: "コピーしました", select: "選択してください" },

  renamed: {
    text: ["Interlatch の旧名は Chronicle です。", { code: "chronicle" }, " コマンドもそのまま使え、セッションと設定は自動で引き継がれます。"],
    link: "Chronicle からの移行",
  },

  hero: {
    kicker: "コーディングエージェントが共有する記憶",
    title: ["エージェントが変わっても、", "学びは残る。"],
    body: "新しいセッションのエージェントは、前回わかったことを知りません。Interlatch は Claude Code、Codex、Copilot、Bob、Antigravity のセッションを手元の Mac に記録します。得られたナレッジは元のセッション、プロジェクト、エージェントとつながったまま残り、後の作業で確かめられるたびに信頼度が上がります。",
    aside: { lang: "en", text: "Different agents. Knowledge that stays." },
    start: "はじめる",
    see: "学びがつながる仕組みを見る",
    facts: "macOS 13 以降 · uv が必要 · 無料のオープンソース · テレメトリなし",
    card: {
      log: "共有する記憶 · billing-api",
      meta: "今日 14:52 · Claude Code · ",
      title: "Stripe が invoice.paid を再送しても二重請求しないようにする",
      status: "完了 · 教訓を 4 件保存",
      kind: "落とし穴",
      lesson: "Stripe の Webhook 署名の検証には生のリクエストボディが必要",
      detail: [
        "JSON に変換してからだと ",
        { code: "SignatureVerificationError" },
        "。",
        { code: "await request.body()" },
        " をそのまま渡します。",
      ],
      tink: "Interlatch のガイド、Blueprint Cast の Tink：クリップボードの項目にチェックを入れる小さなロボット",
      next: "次のセッション · Codex",
      reuse: "生のリクエストボディを使います。理由は、前の Claude Code セッションで確認できます。",
      source: "出典を保存 · Claude Code · billing-api",
      caption: "例 · Claude Code で学び、Codex で使う",
      keeper: "記録をつけるのは Tink",
    },
  },

  install: {
    label: "01 / セットアップ",
    title: "エージェントをつなぎ、学びを残す。",
    body: "Interlatch は uv でインストールし、エージェントのセッションファイルを変更せずに読みます。記録を残し、学んだことを次のセッションですぐ使えるようにします。分析には、あなた自身の Claude Code か Codex のログイン、Bob の API キーを使う IBM Bob、またはあなたのキーで使うモデルプロバイダーの API を使います。Anthropic、Amazon Bedrock、OpenAI、Azure OpenAI、OpenRouter、そして Mac 上の Ollama も使えます。分析の利用分はあなたのプランやキーに計上されます。インストール前のセッションは、新しいものから 15 分ごとに 6 件ずつ、バックグラウンドで分析します。",
    step: "ステップ",
    steps: [
      {
        title: "インストール",
        body: "コマンドラインツールをインストールすると、Mac にあるコーディングエージェントを見つけ、過去のセッションを取り込み、ログイン時に起動するよう設定します。",
      },
      {
        title: "いつもどおりに作業",
        body: "Claude Code、Codex、Copilot、Bob、Antigravity をいつもどおり使うだけ。各セッションは終わると記録され、バックグラウンドで読まれます。",
      },
      {
        title: "次の作業に引き継ぐ",
        body: "ダッシュボードは 127.0.0.1:11524 で動きます。⌘K で過去の作業を検索し、MCP で接続したエージェントにもプロジェクトの学びを届けられます。",
      },
    ],
    needs: "必要なもの",
    requirements: "macOS 13 以降、uv、そして分析に使うエージェントのログインか API キー",
    app: "アプリがよければ、Apple シリコン版をダウンロード",
    setsUp: "インストールで設定されるもの",
  },

  record: {
    label: "02 / 引き継がれる記憶",
    title: "学びを残し、次の作業につなぐ。",
    body: "セッションが終わっても、学びはプロジェクトと元の記録に結びついたまま残ります。次のエージェントにも、ダッシュボードにも、コードのそばにも。",
    entry: "エントリー",
    entries: [
      {
        tag: "保存",
        title: "元のセッションを残す。",
        body: "Claude Code は初期設定で 30 日たつとトランスクリプトを消します。Interlatch は接続したエージェントのセッションをプロジェクトや出典と一緒に残すので、先月の修正に至った会話もあとから読めます。",
        more: "記録される内容",
      },
      {
        tag: "学習",
        title: "教訓と根拠を、いっしょに残す。",
        body: "Interlatch は終わったセッションを、あなたが選んだエージェントかモデルで読み、修正、落とし穴、決定、コマンドをプロジェクトの知識として残します。どの教訓も元のセッションをたどれ、後の作業で確かめられるたびに信頼度が上がります。使う前に、その根拠を確認できます。",
        more: "分析の仕組み",
      },
      {
        tag: "共有",
        title: "前のエージェントの学びを、次へ。",
        body: "Copilot が見つけた落とし穴を、次の Codex セッションで使えます。MCP で接続したエージェントは、過去のセッションとプロジェクトの知識を検索できます。Claude Desktop、Cursor、Windsurf、Gemini CLI からも利用できます。",
        more: "MCP サーバー",
      },
      {
        tag: "出典",
        title: "コードから、判断の理由をたどる。",
        body: "VS Code 拡張機能は、開いているファイルに関わったセッションと、ワークスペースでエージェントが作業したファイルを表示します。どのエージェントが変更していても、元の会話を開いて理由を確認できます。",
        more: "VS Code 拡張機能",
      },
    ],
  },

  showcase: {
    label: "03 / ダッシュボード",
    title: "根拠まで読める記憶。",
    body: "異なるエージェントのセッション、そこから得た教訓、その出典となった会話を確認できます。ダッシュボードはあなた自身のマシンで動き、Mac でも、Tailscale 経由のスマートフォンでも、ほかのコンピューターやチームと共有する 1 台のハブでも開けます。",
    tour: "1 分でわかるツアー",
    tourAlt:
      "デモデータで見る Interlatch ダッシュボードの 1 分ツアー：ホーム、トランスクリプトと抽出したナレッジを含むセッション、⌘K 検索、用語集のマップ、週次の振り返り",
    tourText: "ホーム、学んだことつきのセッション、⌘K 検索、マップ、週次の振り返り。",
    demo: "架空のデモデータ（英語）",
    screens: "画面ごとに",
    tablist: "ダッシュボードの画面",
    shots: [
      {
        label: "ホーム",
        alt: "Interlatch のホーム：今週のセッション、統計、最近のナレッジ",
        text: "今週をひと目で：セッション、そのコスト、そこから学んだこと。",
      },
      {
        label: "セッション",
        alt: "要約、結果、抽出したナレッジ、トランスクリプト全体を表示したセッションページ",
        text: "教訓と元のセッションをいっしょに読む。要約、結果、トランスクリプト全体まで。",
      },
      {
        label: "⌘K 検索",
        alt: "セッション、ナレッジ、ページをまとめて検索する ⌘K パレット",
        text: "エージェントをまたいで検索。キーひとつで、セッション、教訓、ページへ。",
      },
      {
        label: "マップ",
        alt: "用語集のマップ：自分の用語を折りたためるマインドマップで表示",
        text: "自分の用語をマインドマップに。各プロジェクトでの使われ方と、元になった教訓まで。",
      },
      {
        label: "プロジェクト",
        alt: "プロジェクトのページ：セッション、時間とコスト、Interlatch が保つナレッジベース、落とし穴と決定",
        text: "プロジェクトごとのナレッジベース。落とし穴、決定、コマンドを、セッションが増えるたびに書き直します。",
      },
      {
        label: "週次の振り返り",
        alt: "週次の振り返り：その週の見出し、前週と比べた作業時間・セッション数・コスト、得られたナレッジ",
        text: "終わった週ごとに、何が変わり、どこに時間を使い、何を学んだかをまとめます。",
      },
    ],
    more: "ダッシュボードにはほかにも",
    extras: [
      {
        title: "システムマップ",
        body: "各プロジェクトを、構成要素とデプロイ先を持つシステムとして描き、あるプロジェクトが別のプロジェクトを使うところを線で結びます。描くのはモデルではなく、マニフェストとセッションの実際の作業です。",
        page: "dashboard/#システムマップ",
      },
      {
        title: "成果物",
        body: "エージェントが作ったドキュメント、ページ、図、スライド、プルリクエスト、コミット。それぞれ作ったセッションにつながり、ファイルが変わったり消えたりすると印がつきます。",
        page: "dashboard/#成果物",
      },
      {
        title: "提案",
        body: "繰り返しうまくいかないことや、何度も確かめられたことから、CLAUDE.md や AGENTS.md に書く 1 行を提案します。承認するまで何も書かず、元に戻すこともできます。",
        page: "suggestions/",
      },
      {
        title: "プロジェクトのグループ",
        body: "関連するプロジェクトを、手で、または共通のフォルダーでひとつの見出しにまとめ、グループ全体でセッションを絞り込めます。",
        page: "dashboard/#プロジェクトのグループ",
      },
    ],
  },

  sources: {
    label: "04 / エージェントをまたいで",
    title: "すべてのエージェントを、ひとつの記録に。",
    body: "使うエージェントを変えても、プロジェクトの知識は同じアーカイブに残ります。設定から、または interlatch connect でソースを追加し、MCP で次のエージェントから検索できます。",
    agents: [
      { name: "Claude Code", when: "セッションが終わるたびに" },
      { name: "Codex", when: "15 分ごと（作業が止まってから）" },
      { name: "Codex Cloud", when: "タスクを codex CLI 経由で" },
      { name: "GitHub Copilot", when: "VS Code と Copilot CLI" },
      { name: "IBM Bob", when: "15 分ごと" },
      { name: "Google Antigravity", when: "15 分ごと" },
      { name: "claude.ai と ChatGPT", when: "データのエクスポートから" },
    ],
    mcp: ["Claude Desktop、Cursor、Windsurf、Gemini CLI にも ", "MCP サーバー", " を通じて同じ記憶を届けられます。"],
  },

  team: {
    label: "05 / チーム",
    title: "ひとりのエージェントが学び、チーム全員が知る。",
    body: "チームのサーバーでハブを動かせば、各自の Interlatch が学んだことをそこで共有します。トランスクリプトは各自のコンピューターに残せます。ハブが受け取るのは教訓だけで、同じリポジトリでチームメイトが学んだことを、全員のエージェントに返します。",
    points: [
      {
        title: "Docker でハブを動かす。",
        body: "compose ファイルひとつで、ハブ、Caddy による HTTPS、Postgres のチームストアがどのサーバーでも動きます。ハブは何も分析しないので、モデルも API キーも要りません。",
        page: "docker/",
      },
      {
        title: "教訓は共有し、トランスクリプトは残す。",
        body: "各コンピューターは自分のセッションを自分で分析し、ハブには各セッションの要約とプロジェクトの教訓だけを送ります。プロンプト、コマンド、ファイルパス、トランスクリプトは外に出ません。",
        page: "devices/#ナレッジだけを共有する",
      },
      {
        title: "チームメイトの教訓を、あなたのエージェントに。",
        body: "送るたびに、同じリポジトリでチームメイトが学んだことが返ってきます。各自がどこにクローンしていても同じです。MCP ツールではチームメイトのものとして表示され、セッション開始時のメモをオンにしていればそこにも入ります。",
        page: "join-a-hub/",
      },
      {
        title: "利用者、ロール、プロジェクト。",
        body: "一人ずつ、管理者、メンバー、閲覧のみのいずれかとして、一度だけ使えるコードで招待します。各自が見られるプロジェクトは管理者が決め、招待、サインイン、変更はすべて履歴に残ります。",
        page: "devices/#利用者とロール",
      },
    ],
    join: "チームのハブに参加する",
    run: "Docker でハブを動かす",
  },

  rsi: {
    label: "06 / RSI",
    title: "暴走しない RSI。",
    body: "記録して（Record）、探して（Search）、積み上げる（Increment）。SF に出てくる自己改善でも、腱鞘炎でもありません。同じ説明を二度しなくて済む、それだけの仕組みです。",
    steps: [
      {
        letter: "R",
        name: "Record",
        body: "接続したエージェントのセッションは、プロジェクト、ブランチ、ファイルと一緒に手元のマシンに残ります。保存し忘れる心配はありません。",
      },
      {
        letter: "S",
        name: "Search",
        body: "次のエージェントは、前のエージェントが学んだことを MCP で調べられます。どの答えにも元のセッションがついています。セッション開始時のメモをオンにすれば、Claude Code は開いた時点でプロジェクトの要点も受け取ります。",
      },
      {
        letter: "I",
        name: "Increment",
        body: "教訓は後のセッションで確かめられるたびに信頼度が上がり、繰り返すつまずきは CLAUDE.md や AGENTS.md に書く 1 行として提案されます。採用するかは、一つずつあなたが決めます。",
      },
    ],
    loop: "そしてまた記録へ。回るたびに少しずつ良くなり、その理由も見えます。",
  },

  rules: {
    label: "07 / 信頼できる記憶",
    title: "共有する知識に、確かめられる根拠を。",
    rule: "ルール",
    rules: [
      {
        title: "ローカルにとどまる。",
        body: "私たちのサーバーも、テレメトリも、アカウントもありません。アーカイブとそこから学んだことはすべて、あなた自身のマシンにあります。チームのハブも、チームが選んだサーバーで動きます。",
      },
      {
        title: "モデルもアカウントも、あなたが選ぶ。",
        body: "分析は秘密情報を伏せてから、あなた自身の Claude Code か Codex のログイン、Bob の API キー、またはあなたのプロバイダーキーで行います。Ollama なら Mac の外には出ません。MCP で取り出した記憶は、接続したエージェントとそのモデルにだけ渡ります。間に私たちのキーは入りません。",
      },
      {
        title: "根拠を、いつでも確かめられる。",
        body: "どの教訓にも、どこまで確かめられたかが表示されます。1\u00a0回のみ、定着\u00a0×2、そして 2\u00a0週間以上にわたる 3\u00a0つのセッションで確かめられれば確定。元のセッションはワンクリックで開け、エージェントも MCP で同じ表示を受け取るので、今の作業に合うかどうかをあなたもエージェントも判断できます。",
      },
    ],
    closing: {
      title: "次のエージェントに、手がかりを。",
      body: "インストールして、使っているエージェントを接続。すでに Mac にあるセッションから、これからの作業まで、プロジェクトの知識として残せます。",
      needs: ["", "uv", " と macOS 13 以降が必要です。"],
      guide: "インストールガイドを読む",
      star: "GitHub でスターする",
    },
  },

  visuals: {
    kept: {
      caption: "アーカイブ · すべてのエージェント",
      note: "元のトランスクリプトを Mac にずっと保存",
      rows: [
        { when: "今日", agent: "Claude Code", project: "billing-api", title: "Stripe が invoice.paid を再送しても二重請求しないようにする" },
        { when: "今日", agent: "Codex", project: "storefront", title: "チェックアウトの配送日のハイドレーション不一致を修正" },
        { when: "1日前", agent: "Copilot", project: "infra", title: "アクセスキーの代わりに OIDC で GitHub Actions からデプロイ" },
        { when: "2日前", agent: "Claude Code", project: "recommender", title: "HNSW インデックスで類似商品の遅延を 4 秒から 7 ms に短縮" },
        { when: "40日前", agent: "Claude Code", project: "recommender", title: "recommender リポジトリをセットアップ", old: true },
      ],
      deleted: "30 日目に削除",
      kept: "保存済み",
    },
    knowledge: {
      caption: "ナレッジ · billing-api",
      note: "元のセッションとともに保存し、後の作業で確認",
      items: [
        {
          kind: "修正",
          title: "Stripe は Webhook を再送する：event.id で重複を除く",
          body: "各 event.id を副作用と同じトランザクションで processed_events に記録し、重複には 200 を返します。",
        },
        {
          kind: "決定",
          title: "冪等性は Redis ではなく Postgres で",
          body: "重複除去の行は請求書の更新とアトミックにコミットされます。Redis のキーだと、トランザクションがロールバックしても書き込まれたままになりえます。",
        },
        {
          kind: "コマンド",
          title: "Stripe の Webhook をローカルの API に転送",
          body: "stripe listen --forward-to localhost:8000/webhooks/stripe",
        },
      ],
    },
    ask: {
      caption: "例 · Codex · infra",
      note: "Codex が、前の Copilot セッションの教訓を検索",
      you: "あなた ›",
      agent: "Codex ›",
      question: 'デプロイが "Not authorized to perform sts:AssumeRoleWithWebIdentity" で失敗する。前にも見た？',
      found: "落とし穴 1 件 · infra · Copilot · 定着 ×2",
      source: "出典 · Copilot · アクセスキーの代わりに OIDC で GitHub Actions からデプロイ",
      answer: [
        "はい、先週の Copilot セッションで見つかっています。",
        { code: "environment:" },
        " を指定したジョブでは OIDC トークンの sub が ",
        { code: "repo:ORG/REPO:environment:NAME" },
        " になるので、ブランチに一致させる信頼ポリシーは失敗します。代わりに environment に一致させます。",
      ],
    },
    team: {
      caption: "ハブ · billing-api",
      note: "ナレッジのみ：トランスクリプトは Mika のノート PC から出ていない",
      laptop: "Mika のノート PC",
      stays: "ここに残る",
      sent: "送信",
      rows: [
        { what: "トランスクリプト、プロンプト、コマンド", sent: false },
        { what: "セッションの要約", sent: true },
        { what: "billing-api の教訓 3 件", sent: true },
      ],
      hub: "チームのハブ",
      hubMeta: "billing-api · 4 人 · 教訓 58 件",
      kind: "落とし穴",
      lesson: "Stripe の Webhook 署名の検証には生のリクエストボディが必要",
      from: "Mika のセッションから",
      you: "あなたのエージェント、次のセッションで",
    },
    editor: {
      note: "コードから、元のエージェント、プロジェクト、セッションへ",
      sessions: ["Stripe が invoice.paid を再送しても二重請求しないようにする", "デプロイ後に督促メールが重複して送られないようにする"],
    },
  },

  faq: {
    label: "FAQ",
    title: "よくある質問。",
    body: "設定、プライバシー、エージェントへの学びの引き継ぎについて。",
    more: "コミュニティに質問",
    items: [
      {
        question: "どのエージェントを接続できますか？",
        answer: ["Claude Code、Codex、GitHub Copilot、IBM Bob、Google Antigravity のセッションを記録できます。claude.ai と ChatGPT のデータエクスポートも取り込めます。Claude Desktop、Cursor、Windsurf、Gemini CLI は MCP で記憶を検索できますが、そのセッションは記録されません。"],
        page: "sources/",
        link: "対応するソース",
      },
      {
        question: "Claude Code は必要ですか？",
        answer: ["いいえ。分析には Claude Code、Codex、IBM Bob、モデルプロバイダーの API を選べます。Ollama のローカルモデルも使えます。分析用のモデルがなくても記録と閲覧はでき、接続するまでセッションは分析待ちのキューに残ります。"],
        page: "analysis/",
        link: "分析とモデルプロバイダー",
      },
      {
        question: "費用はかかりますか？",
        answer: ["個人向けのアプリと CLI は MIT ライセンスの無料オープンソースです。Claude Code や Codex による分析は既存プランの利用枠を使い、API プロバイダーはあなたのアカウントに課金します。ローカルの Ollama モデルにはプロバイダーの利用料はかかりません。表示されるセッションのコストは推計で、サブスクリプションの請求額ではありません。"],
        page: "analysis/",
        link: "分析の仕組み",
      },
      {
        question: "データはコンピューターの外に送られますか？",
        answer: ["セッションはローカルに保存されます。分析時は秘密情報を伏せた要約を、選んだエージェントかプロバイダーに送ります。ローカルの Ollama モデルなら分析もコンピューター内で完結します。テレメトリはありません。ハブ共有を有効にすると、knowledge モードでは要約と教訓を、everything モードでは秘密情報を伏せていない元のセッションファイルを自分のハブに送ります。"],
        page: "privacy/",
        link: "データとプライバシー",
      },
      {
        question: "Windows や Linux でも使えますか？",
        answer: ["はい。Python 3.11 以降があれば Windows と Linux でも動きます。", { code: "pip install interlatch" }, " で PyPI からパッケージをインストールするか uv を使い、", { code: "interlatch install" }, " を実行してブラウザーでダッシュボードを開けます。Interlatch 自体に Node.js は不要ですが、接続するエージェントには別の動作要件がある場合があります。バックグラウンドジョブは Windows のタスクスケジューラや Linux の systemd で動きます。ネイティブのデスクトップウィンドウは現在 macOS 専用ですが、ブラウザーのダッシュボードは 3 つのプラットフォームで使えます。"],
        page: "install/",
        link: "プラットフォーム別のインストール",
      },
      {
        question: "次のエージェントにはどう引き継がれますか？",
        answer: ["Interlatch の MCP サーバーにエージェントを接続すると、別のエージェントの過去のセッションやプロジェクトのナレッジを検索し、教訓の出典をたどれます。過去のエラーや決定を調べるよう頼めます。MCP の接続は検索を可能にするもので、すべての教訓を毎回のプロンプトに自動で追加するものではありません。"],
        page: "mcp/",
        link: "MCP で接続",
      },
      {
        question: "プロジェクトを除外したりセッションを削除できますか？",
        answer: ["はい。設定の ", { code: "sources.exclude_projects" }, " にプロジェクトのパスのパターンを加えると、対象を記録から除外できます。すでに記録されたセッションを削除するには ", { code: "interlatch forget <id>" }, " を使います。"],
        page: "configuration/",
        link: "設定オプション",
      },
      {
        question: "アンインストールするとデータはどうなりますか？",
        answer: [{ code: "interlatch uninstall" }, " はフック、バックグラウンドジョブ、MCP 登録を削除し、記録したデータは残します。", { code: "--purge" }, " を加えると、アーカイブと設定も削除します。"],
        page: "install/",
        link: "Interlatch のアンインストール",
      },
    ],
  },

  help: {
    label: "リソースとコミュニティ",
    title: "最新情報を知る。一緒につくる。",
    updates: "最近の更新",
    viewAll: "すべて見る",
    changelogFallback: "変更履歴を読む",
    guides: "ガイド",
    guideItems: [
      { title: "はじめに", body: "Interlatch をインストールし、これまでのセッションを取り込む。", page: "install/" },
      { title: "MCP で接続", body: "次のエージェントに、プロジェクトの学びを届ける。", page: "mcp/" },
      { title: "スマートフォンとほかのコンピューター", body: "デバイスをまたいでひとつのアーカイブに。", page: "devices/" },
    ],
    community: "サポートと貢献",
    qa: "コミュニティに質問",
    ideas: "機能を提案・投票",
    roadmap: "ロードマップを見る",
    announcements: "お知らせを読む",
    issues: "不具合を報告",
    contributing: "コードやドキュメントで貢献",
  },

  notFound: {
    title: "見つかりません · Interlatch",
    description: "このページは記録にありません。",
    kicker: "404 · 該当なし",
    heading: "このページは記録にありません。",
    body: "ドキュメントが /docs/ に移ったときに、場所が変わったのかもしれません。",
    home: "ホーム",
    docs: "ドキュメント",
  },
};
