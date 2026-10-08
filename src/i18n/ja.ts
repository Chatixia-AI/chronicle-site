// The home page's words in Japanese, in the same shape as en.ts. The terms follow the dashboard's own Japanese
// (agents-chronicle src/chronicle/web/ja.js): 修正, 落とし穴, 決定, 定着, 1 回のみ, and so on.
import type { Strings } from "./en";

export const ja: Strings = {
  meta: {
    title: "Chronicle：すべてのコーディングエージェントのセッションを、検索できる記憶に",
    description:
      "Chronicle は Claude Code、Codex、Copilot、IBM Bob、Antigravity のすべてのセッションを Mac に保存し、学んだことを書き留めて、あなたとエージェントに返します。",
  },

  base: {
    skip: "本文へ移動",
    home: "Chronicle ホーム",
    by: "by Chatixia",
    nav: { record: "できること", install: "インストール", team: "チーム", docs: "ドキュメント", github: "GitHub" },
    cta: "インストール",
    theme: { light: "ライトテーマに切り替え", dark: "ダークテーマに切り替え" },
    other: { label: "English", title: "Read this page in English" },
    footer: {
      blurb: ["実行したすべてのコーディングエージェントのセッションを、検索できる記憶に。", " の一部です。"],
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
    },
  },

  copy: { copy: "コピー", copied: "コピーしました", select: "選択してください" },

  hero: {
    kicker: "コーディングエージェントの作業日誌",
    title: ["エージェントは忘れる。", "Chronicle は覚えている。"],
    body: "Claude Code はトランスクリプトを 30 日で削除し、あるセッションで見つけた修正が次のセッションに引き継がれることもありません。Chronicle は Claude Code、Codex、Copilot、IBM Bob、Antigravity のすべてのセッションを Mac に保存し、学んだことを書き留めて、あなたとエージェントに返します。",
    aside: { lang: "en", text: "A searchable memory of every coding-agent session you run." },
    start: "はじめる",
    see: "保存される内容を見る",
    facts: "macOS 13 以降 · 無料のオープンソース · テレメトリなし",
    card: {
      log: "ログ · billing-api",
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
      tink: "Chronicle のガイド、Blueprint Cast の Tink：チェックリストを持った小さなロボットと、ログの行が並ぶ巻物",
      caption: "すべてのセッションを保存し、読む",
      keeper: "記録をつけるのは Tink",
    },
  },

  install: {
    label: "01 / セットアップ",
    title: "1 分で動き出す。",
    body: "Chronicle は uv でインストールし、エージェントのファイルを変更せずに読みます。分析はあなた自身の Claude Code、Codex、IBM Bob、またはあなたのキーで使うモデルプロバイダーの API で行います。Anthropic、Amazon Bedrock、OpenAI、Azure OpenAI、OpenRouter、そして Mac 上の Ollama も使えます。",
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
        title: "記録を開く",
        body: "ダッシュボードは 127.0.0.1:11524 で動きます。⌘K ですべてを検索したり、先週何を学んだかをエージェントに聞いたりできます。",
      },
    ],
    needs: "必要なもの",
    requirements: "macOS 13 以降と、分析に使う Claude Code、Codex、IBM Bob、またはモデルプロバイダー",
    app: "アプリがよければ、Apple シリコン版をダウンロード",
    setsUp: "インストールで設定されるもの",
  },

  record: {
    label: "02 / 記録",
    title: "すべてのセッションが、使えるものになる。",
    body: "Chronicle は元の記録を保存して読み、必要な場所に返します。ダッシュボードに、エージェントに、そしてコードのそばに。",
    entry: "エントリー",
    entries: [
      {
        tag: "保存",
        title: "セッションを失わない。",
        body: "Claude Code はトランスクリプトを 30 日で消去します。Chronicle は接続したすべてのエージェントのセッションを、終わるたびに保管します。先月の障害を直した会話も、来年まで残ります。",
        more: "記録される内容",
      },
      {
        tag: "学習",
        title: "教訓を、代わりに書き留める。",
        body: "Chronicle は終わったセッションを、あなた自身の Claude Code、Codex、IBM Bob、または選んだモデルプロバイダーで読み、修正、落とし穴、決定、コマンドなど、残す価値のあるものを保存します。それらはプロジェクトごとのナレッジベースにまとまり、別のセッションで確かめられるたびに信頼度が上がります。",
        more: "分析の仕組み",
      },
      {
        tag: "質問",
        title: "エージェントから質問できる。",
        body: "MCP サーバーを通じて、エージェントは一から考え直す前に過去のセッションを検索できます。このエラーは前にも出たか、なぜここで Postgres を選んだのか、このプロジェクトはどうデプロイするのか。Claude Desktop、Cursor、Windsurf、Gemini CLI からも接続できます。",
        more: "MCP サーバー",
      },
      {
        tag: "発見",
        title: "コードのすぐ横に。",
        body: "VS Code 拡張機能は、開いているファイルの背後にあるセッションと、ワークスペースでエージェントが作業したすべてのファイルを表示します。このコードはなぜこうなっているのか？ワンクリックで、それを書いたセッションが読めます。",
        more: "VS Code 拡張機能",
      },
    ],
  },

  showcase: {
    label: "03 / ダッシュボード",
    title: "記録のすべてを読む。",
    body: "すべてを眺められるローカルのダッシュボード。Mac でも、Tailscale 経由のスマートフォンでも、ほかのコンピューターやチームと共有する 1 台のハブでも開けます。",
    tour: "1 分でわかるツアー",
    tourAlt:
      "デモデータで見る Chronicle ダッシュボードの 1 分ツアー：ホーム、トランスクリプトと抽出したナレッジを含むセッション、⌘K 検索、用語集のマップ、週次の振り返り",
    tourText: "ホーム、学んだことつきのセッション、⌘K 検索、マップ、週次の振り返り。",
    demo: "架空のデモデータ（英語）",
    screens: "画面ごとに",
    tablist: "ダッシュボードの画面",
    shots: [
      {
        label: "ホーム",
        alt: "Chronicle のホーム：今週のセッション、統計、最近のナレッジ",
        text: "今週をひと目で：セッション、そのコスト、そこから学んだこと。",
      },
      {
        label: "セッション",
        alt: "要約、結果、抽出したナレッジ、トランスクリプト全体を表示したセッションページ",
        text: "どのセッションにも、要約、結果、取り出した教訓、そしてトランスクリプト全体。",
      },
      {
        label: "⌘K 検索",
        alt: "セッション、ナレッジ、ページをまとめて検索する ⌘K パレット",
        text: "キーひとつで、すべてのセッション、すべての教訓、すべてのページを検索。",
      },
      {
        label: "マップ",
        alt: "用語集のマップ：自分の用語を折りたためるマインドマップで表示",
        text: "自分の用語を、プロジェクト同士のつながりを示すマップに。",
      },
      {
        label: "プロジェクト",
        alt: "プロジェクトのページ：セッション、時間とコスト、Chronicle が保つナレッジベース、落とし穴と決定",
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
    label: "04 / ソース",
    title: "すべてのエージェントを、ひとつの記録に。",
    body: "どのエージェントも、同じダッシュボード、同じナレッジベース、同じ MCP ツールを共有します。設定から、または chronicle connect でいつでも追加できます。",
    agents: [
      { name: "Claude Code", when: "セッションが終わるたびに" },
      { name: "Codex", when: "15 分ごと（アイドル後）" },
      { name: "Codex Cloud", when: "タスクを codex CLI 経由で" },
      { name: "GitHub Copilot", when: "VS Code と Copilot CLI" },
      { name: "IBM Bob", when: "15 分ごと" },
      { name: "Google Antigravity", when: "15 分ごと" },
      { name: "claude.ai と ChatGPT", when: "データのエクスポートから" },
    ],
    mcp: ["Claude Desktop、Cursor、Windsurf、Gemini CLI も ", "MCP サーバー", " を使えます。"],
  },

  team: {
    label: "05 / チーム",
    title: "ひとりのエージェントが学び、チーム全員が知る。",
    body: "チームのサーバーでハブを動かせば、各自の Chronicle が学んだことをそこで共有します。トランスクリプトは各自のコンピューターに残せます。ハブが受け取るのは教訓だけで、同じリポジトリでチームメイトが学んだことを、全員のエージェントに返します。",
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
        body: "送るたびに、同じリポジトリでチームメイトが学んだことが返ってきます。各自がどこにクローンしていても同じです。MCP ツールとセッション開始時のメモに、チームメイトのものとして含まれます。",
        page: "join-a-hub/",
      },
      {
        title: "利用者、ロール、プロジェクト。",
        body: "一人ずつ、管理者、メンバー、閲覧のみのいずれかとして、一度だけ使えるコードで招待します。各自が見られるプロジェクトは管理者が決め、招待、サインイン、変更はすべて監査ログに残ります。",
        page: "devices/#利用者とロール",
      },
    ],
    join: "チームのハブに参加する",
    run: "Docker でハブを動かす",
  },

  rules: {
    label: "06 / ルール",
    title: "守っている 3 つのルール。",
    rule: "ルール",
    rules: [
      {
        title: "ローカルにとどまる。",
        body: "私たちのサーバーも、テレメトリも、アカウントもありません。アーカイブとそこから学んだことはすべて、あなた自身のマシンにあります。チームのハブも、チームが選んだサーバーで動きます。",
      },
      {
        title: "あなたのアカウントで動く。",
        body: "外に送るのは分析だけです。秘密情報を伏せた要約を、あなた自身の Claude Code、Codex、Bob のログイン、またはあなたの API キーで送ります。Ollama なら Mac の外には何も出ません。間に私たちのキーは入りません。",
      },
      {
        title: "わからないことは、わからないと言う。",
        body: "教訓は「1 回のみ」から始まり、後のセッションで確かめられるたびに信頼を得ます。Chronicle は推測するより、そう伝えることを選びます。",
      },
    ],
    closing: {
      title: "記録をつけはじめよう。",
      body: "インストールは一度だけ。それ以降のすべてのセッションと、すでに Mac にあるセッションが記録になります。",
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
      note: "自動で抽出し、後のセッションで確認",
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
      caption: "ターミナル · infra",
      note: "エージェントがまず検索し、半日のデバッグを省いた",
      you: "あなた ›",
      agent: "エージェント ›",
      question: 'デプロイが "Not authorized to perform sts:AssumeRoleWithWebIdentity" で失敗する。前にも見た？',
      found: "落とし穴 1 件 · infra · 定着 ×2",
      answer: [
        "はい、先週 infra で出ています。",
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
      note: "開いているファイルの背後のセッションと、ワークスペース全体",
      sessions: ["Stripe が invoice.paid を再送しても二重請求しないようにする", "デプロイ後に督促メールが重複して送られないようにする"],
    },
  },

  notFound: {
    title: "見つかりません · Chronicle",
    description: "このページは記録にありません。",
    kicker: "404 · 該当なし",
    heading: "このページは記録にありません。",
    body: "ドキュメントが /docs/ に移ったときに、場所が変わったのかもしれません。",
    home: "ホーム",
    docs: "ドキュメント",
  },
};
