// Every project on the site. Source of truth: ~/Documents/Companies.
// tools/build-site.ts turns the non-archive ones into the projects section's cards.
// `git` lists each project's folders under that directory. `roles` is relevance 0-3
// for each hiring lens: [applied AI, AI product, forward deployed, solutions].
// `vis: 'private'` means no repo link is shown.

window.PROJECTS = [
  // ---- AI & agents ---------------------------------------------------------
  {
    id: 'werbos', name: 'werbos', tagline: 'A local-first AI assistant, built from scratch',
    about: 'Agent loop with tool calling, RAG, memory, an eval harness and LoRA fine-tuning. It runs entirely on open-weight models on hardware I own, with no hosted LLM calls. Most of the other AI projects here are pieces of it or were built around it.',
    stack: ['Python', 'TypeScript', 'React', 'llama.cpp', 'LoRA'], cats: ['ai'], status: 'Active', vis: 'private',
    git: ['werbosLLM/werbos'], roles: [3, 2, 3, 2], family: 'werbos',
  },
  {
    id: 'murmur', name: 'murmur', tagline: 'Hold a key, talk, and clean text lands wherever your cursor is',
    about: 'A clean-room dictation app in the style of Wispr Flow. Hotkey → mic → whisper.cpp running locally on Metal → optional Claude cleanup → pasted into the focused app (Terminal, Slack, Word, anything).',
    stack: ['Rust', 'whisper.cpp', 'cpal', 'Claude API'], cats: ['ai', 'apps'], status: 'Beta', vis: 'public',
    repo: 'https://github.com/jasonsutter87/murmur', git: ['murmur'], roles: [3, 3, 2, 2],
  },
  {
    id: 'hablo', name: 'hablo', tagline: 'Learn Spanish by speaking it, fully offline',
    about: 'A path of 24 units and 240 phrases, graded word by word as you say them out loud, plus Sofía: an on-device AI conversation partner (Qwen 3B via llama.cpp) who speaks sentence by sentence while she is still writing, with a separate checker quietly correcting your grammar. Mac and Android.',
    stack: ['Rust', 'Tauri', 'Svelte', 'llama.cpp', 'TTS'], cats: ['ai', 'apps'], status: 'Beta', vis: 'private',
    git: ['hablo'], roles: [3, 3, 2, 2],
  },
  {
    id: 'unfold', name: 'unfold', tagline: 'A recursive LLM generation engine',
    about: 'You describe a pipeline as a recipe: a stack of levels, each with a prompt and an output shape. Each node, plus everything above it, runs through the next level\'s prompt and becomes that level\'s children. Runs are resumable and editable. One runner covers world bibles, screenplays, novels and albums. Ships as a CLI, a library and an HTTP API.',
    stack: ['TypeScript', 'YAML', 'Node.js'], cats: ['ai', 'devtools'], status: 'Active', vis: 'private',
    git: ['unfold'], roles: [3, 2, 3, 2],
  },
  {
    id: 'autodocumentor', name: 'auto-documentor', tagline: 'Point it at a running web app and it writes the user manual',
    about: 'It explores the live UI like a first-time user, using only the rendered DOM, the accessibility tree and screenshots, and never reads the source. If a feature can\'t be discovered by using the app, it doesn\'t get documented, which is the same limit a real user has.',
    stack: ['TypeScript', 'DOM + vision'], cats: ['ai', 'devtools'], status: 'Active', vis: 'private',
    git: ['autodocumentor'], roles: [3, 2, 3, 3],
  },
  {
    id: 'werbos-phone', name: 'werbos phone', tagline: 'Inbound phone calls become AI conversations',
    about: 'A headless backend. Twilio bridges the call, werbos runs the brain, and Kokoro speaks the reply.',
    stack: ['Python', 'Twilio', 'Kokoro TTS'], cats: ['ai'], status: 'Prototype', vis: 'private',
    git: ['werbosLLM/phone'], roles: [3, 2, 3, 3], family: 'werbos',
  },
  {
    id: 'glasshouse', name: 'glasshouse', tagline: 'Trace inspector for an AI agent',
    about: 'When a skill misbehaves (wrong math, off-topic results, a fumbled tool call), you ask glasshouse what happened instead of digging through seven log files.',
    stack: ['Python'], cats: ['ai', 'devtools'], status: 'Active', vis: 'private',
    git: ['werbosLLM/glasshouse'], roles: [3, 1, 2, 1], family: 'werbos',
  },
  {
    id: 'pitts', name: 'pitts', tagline: 'Agent-loop primitive: think → act → observe',
    about: 'Backend-agnostic, dispatches tools, has zero runtime dependencies and follows a versioned spec. Named for Walter Pitts (1923–1969).',
    stack: ['Python'], cats: ['ai', 'devtools'], status: 'Spec v1', vis: 'private',
    git: ['werbosLLM/pitts'], roles: [3, 0, 2, 1], family: 'werbos',
  },
  {
    id: 'mcculloch', name: 'mcculloch', tagline: 'Eval primitive: grade subjects against suites of probes',
    about: 'Produces reports. It is the counterpart to pitts in the McCulloch–Pitts pair, with zero runtime dependencies and a versioned spec. Named for Warren McCulloch (1898–1969).',
    stack: ['Python'], cats: ['ai', 'devtools'], status: 'Spec v1', vis: 'private',
    git: ['werbosLLM/mcculloch'], roles: [3, 0, 2, 1], family: 'werbos',
  },
  {
    id: 'watchtower', name: 'watchtower suite', tagline: 'Observe, summon, defend and signal: an orchestration layer as four protocols',
    about: 'Four protocols: observe (see), watchtower (triggers, dispatch and audit), warden (rules and alerts) and beacon (probes and state transitions). Each has a normative SPEC, a reference Python library and conformance tests (98 for observe, 89 for watchtower). It ships as a Docker Compose stack with a React dashboard.',
    stack: ['Python', 'TypeScript', 'React', 'Docker'], cats: ['ai', 'devtools'], status: 'v1.0', vis: 'private',
    git: ['werbosLLM/observe', 'werbosLLM/watchtower', 'werbosLLM/warden', 'werbosLLM/beacon', 'werbosLLM/watchtower-ui', 'werbosLLM/orchestration-deploy'],
    roles: [2, 0, 3, 2], family: 'werbos',
  },
  {
    id: 'werbos-libraries', name: 'werbos libraries', tagline: '121 graded knowledge libraries, ~15k cards',
    about: 'The content layer for werbos, kept separate from the engine. Graded card libraries span code, security, math and more, and are generated and validated with a fixed schema and a dedupe step.',
    stack: ['Python', 'JSON'], cats: ['ai'], status: 'Active', vis: 'private',
    git: ['werbosLLM/werbos-libraries'], roles: [3, 1, 1, 0], family: 'werbos',
  },
  {
    id: 'mmm', name: 'Merkle Mini Model', tagline: 'A forest of tiny models instead of one big one',
    about: 'A research thread: instead of one model that knows everything, a retrieval forest of tiny models that each know one thing. One finding: an offline model enriching the library raised small-stack recall from 3 to 9. Results are frozen alongside the code.',
    stack: ['Python'], cats: ['ai'], status: 'Research', vis: 'public',
    repo: 'https://github.com/jasonsutter87/mmm-brain', git: ['werbosLLM/mmm-poc', 'werbosLLM/mmm-brain'], roles: [3, 0, 1, 0], family: 'werbos',
  },
  {
    id: 'youtube-mcp', name: 'werbos-youtube-mcp', tagline: 'A YouTube MCP server, built twice from one spec',
    about: 'A YouTube MCP server plus a retro YouTube-clone web app. Two implementations live side by side as a bench test of building from a single SPEC.',
    stack: ['TypeScript', 'MCP'], cats: ['ai', 'devtools'], status: 'Prototype', vis: 'private',
    git: ['werbosLLM/werbos-youtube-mcp'], roles: [3, 1, 2, 1], family: 'werbos',
  },
  {
    id: 'werbos-design', name: 'werbos.design', tagline: 'A one-paragraph brief becomes a polished marketing site, with no LLM',
    about: 'A deterministic website generator that runs offline with no API key, at about $0 per build. It has a React + TypeScript builder and outputs framework-free, self-contained HTML.',
    stack: ['TypeScript', 'React'], cats: ['web', 'devtools'], status: 'Active', vis: 'private',
    git: ['werbosLLM/werbos-design'], roles: [1, 3, 2, 2], family: 'werbos',
  },
  {
    id: 'worship-song-generator', name: 'worship song generator', tagline: 'A one-sentence thesis becomes a full song',
    about: 'Thesis + vibe → a curated cross-book scripture chain → Claude → lyrics, chord progressions and guitar tabs, plus Suno-ready files for AI music generation.',
    stack: ['Python', 'Claude API', 'Suno'], cats: ['ai'], status: 'Shipped', vis: 'private',
    git: ['worship-song-generator'], roles: [3, 2, 1, 1],
  },
  {
    id: 'btcsignal', name: 'BTCSignals Pro', tagline: 'Bitcoin market analysis paid with Lightning micropayments',
    about: 'Signals and analysis built on technical indicators and on-chain metrics, with content unlocked from 21 sats over Lightning. Premium tools (Trade Coach, Chart Analysis) use Claude. 1,200+ commits.',
    stack: ['Hugo', 'JavaScript', 'TypeScript', 'Lightning', 'Claude API'], cats: ['web', 'ai'], status: 'Live', vis: 'private',
    site: 'https://btcsignal.ai', git: ['BTCSignal_ai'], roles: [2, 2, 1, 2],
  },
  {
    id: 'pain-point-finder', name: 'pain point finder', tagline: 'Mine Reddit and Hacker News for problems worth solving',
    about: 'Scrapes both sources, scores each complaint 0–100 on frustration signals, and runs optional AI analysis covering category, market size, existing solutions and product ideas.',
    stack: ['TypeScript', 'Next.js', 'Claude API'], cats: ['ai', 'web'], status: 'Prototype', vis: 'private',
    git: ['pain-point-finder'], roles: [2, 2, 1, 1],
  },
  {
    id: 'projectpulse', name: 'ProjectPulse', tagline: 'A scrum board you can drive from an AI agent',
    about: 'Kanban across multiple projects, a scanner that detects each stack and files todos for what\'s missing, and a Claude Code skill for updating the board in plain English. Stored in SQLite, no server needed.',
    stack: ['TypeScript', 'Next.js', 'SQLite', 'Claude Code'], cats: ['devtools', 'ai'], status: 'Shipped', vis: 'public',
    repo: 'https://github.com/jasonsutter87/ProjectPulse', git: ['ProjectPulse'], roles: [2, 2, 2, 2],
  },
  {
    id: 'smallville', name: 'Smallville', tagline: 'A living-town life sim with AI-driven residents',
    about: 'The PC Sims experience, native, with residents powered by werbos\'s NPC brain. A pure, headless-tested simulation core drives two renderers (isometric 2D and 3D). Playable vertical slice.',
    stack: ['Godot', 'GDScript'], cats: ['play', 'ai'], status: 'Vertical slice', vis: 'private',
    git: ['smallville'], roles: [2, 2, 0, 0], family: 'werbos',
  },

  // ---- products & apps -----------------------------------------------------
  {
    id: 'tallybook', name: 'Tallybook', tagline: 'Bookkeeping and a household budget, on your own computer',
    about: 'Bank feeds (Plaid/SimpleFIN), invoices, bills, reports and tax prep for a small business, plus budgets and savings goals for the home, all in one file you own. A live product with paid plans and signed, auto-updating installers.',
    stack: ['Rust', 'Tauri', 'React', 'SQLite'], cats: ['apps'], status: 'Live', vis: 'private',
    site: 'https://tallybook.app', repo: 'https://github.com/jasonsutter87/tallybook-releases-archive',
    git: ['tallybook'], roles: [1, 3, 2, 3],
  },
  {
    id: 'writepad', name: 'WRITEpad', tagline: 'A writing desk for working a script over',
    about: 'Onion-skinned drafts, A/B versions, reorderable blocks, Obsidian-style notes, local narration and dictation, and an MCP server so AI agents can edit manuscripts. Installers for Mac and Windows.',
    stack: ['Rust', 'Tauri 2', 'CodeMirror 6', 'MCP'], cats: ['apps', 'ai'], status: 'Shipped', vis: 'public',
    repo: 'https://github.com/jasonsutter87/writepad', git: ['writepad'], roles: [2, 3, 2, 2],
  },
  {
    id: 'winzamp', name: 'WinzAMP', tagline: 'A modern Winamp that visualizes whatever your computer is playing',
    about: 'It plays nothing itself. It taps system audio (Core Audio process tap, WASAPI loopback, PulseAudio monitor) and runs the classic spectrum analyzer, Milkdrop presets, song identification and karaoke on top of YouTube, Spotify, anything. macOS, Windows and Linux.',
    stack: ['Rust', 'cpal', 'TypeScript', 'Butterchurn'], cats: ['apps', 'play'], status: 'Beta', vis: 'public',
    repo: 'https://github.com/jasonsutter87/winzamp', git: ['winzamp'], roles: [0, 3, 1, 0],
  },
  {
    id: 'cryptoblocks', name: 'CryptoBlocks', tagline: 'Snap blocks together, then flip them over to read the real code',
    about: 'A visual coding platform for kids: every block is real JavaScript or Python underneath. Write your own function and it becomes a block with your name on it, which you can publish to the Shareplace marketplace. 164+ blocks across 16 categories, including cryptography and AI. 700+ commits.',
    stack: ['React', 'TypeScript', 'Blockly', 'Pyodide'], cats: ['web'], status: 'Live', vis: 'public',
    site: 'https://getcryptoblocks.com', repo: 'https://github.com/jasonsutter87/CryptoBlocks', git: ['CryptoBlocks'], roles: [2, 3, 2, 2],
  },
  {
    id: 'synoptic-diff', name: 'Synoptic Diff', tagline: 'Read the four gospels at four depths, as a diff',
    about: 'A Bible study tool that reads a passage at four layers (historical, literal, and more) and treats the gospels as something you can diff, with lemmatised Greek, a drawn map, and the material world of the text.',
    stack: ['HTML', 'JavaScript', 'Python'], cats: ['web'], status: 'Live', vis: 'public',
    site: 'https://jasonsutter87.github.io/synoptic-diff/', repo: 'https://github.com/jasonsutter87/synoptic-diff',
    git: ['bibleCompionApp'], roles: [1, 3, 0, 1],
  },
  {
    id: 'achient-timeline', name: 'ancient timeline', tagline: 'One timeline linking passages across ancient texts',
    about: 'Ingests the Tanakh, KJV, Quran and other texts, extracts every named person and place, and emits one static timeline.json where each event is anchored once and points to every passage that describes it, disagreements included.',
    stack: ['Python', 'NLP'], cats: ['web'], status: 'Prototype', vis: 'private',
    git: ['achient-timeline'], roles: [1, 1, 0, 0],
  },
  {
    id: 'ledger', name: 'Ledger', tagline: 'A household budget organized by people, not categories',
    about: 'Asks "can I say yes to this right now?" rather than "where did my money go?". Each slice of the month belongs to a person and gets a time-aware status light: $200 into a $400 envelope is fine on the 15th and a fire on the 3rd.',
    stack: ['TypeScript', 'React'], cats: ['apps', 'web'], status: 'Active', vis: 'private',
    git: ['mels-budget-app'], roles: [0, 3, 1, 1],
  },
  {
    id: 'bolt21', name: 'Bolt21', tagline: 'A BOLT12-native Lightning wallet',
    about: 'A privacy-focused Lightning wallet for Android on the Breez SDK: BOLT12 offers (static payment codes), multiple wallets, optional community-node routing and biometric auth.',
    stack: ['Flutter', 'Dart', 'Breez SDK', 'Lightning'], cats: ['apps', 'security'], status: 'Live', vis: 'public',
    site: 'https://bolt21.io', repo: 'https://github.com/jasonsutter87/Bolt21',
    git: ['bolt21/bolt21-wallet', 'bolt21/bolt21.io', 'bolt21-twitter-bot'], roles: [0, 3, 1, 1],
  },
  {
    id: 'vaultotp', name: 'VaultOTP', tagline: 'A 2FA authenticator with folders',
    about: 'Like Google Authenticator, but with folders. No accounts, no cloud sync, codes kept in iOS Keychain / Android Keystore, and a one-scan import from Google Authenticator.',
    stack: ['Flutter', 'Dart'], cats: ['apps', 'security'], status: 'Shipped', vis: 'private',
    git: ['vaultOTP'], roles: [0, 2, 0, 0],
  },
  {
    id: 'photosift', name: 'PhotoSifter', tagline: 'Find duplicate photos and organize the rest',
    about: 'Scans folders, finds exact duplicates with SHA-256, files photos into YYYY/MM folders, and moves duplicates aside for review. Freemium with license keys.',
    stack: ['Python'], cats: ['apps'], status: 'Shipped', vis: 'public',
    repo: 'https://github.com/jasonsutter87/photosifter', git: ['photosift'], roles: [0, 2, 0, 0],
  },
  {
    id: 'hiddengems', name: 'HiddenGems', tagline: 'A GPS walking-tour passport for the parts of a city that don\'t make the top-ten list',
    about: 'Walk the real streets. When you get within range of a plaque, mural or landmark tree, your phone\'s GPS confirms it and the app stamps your passport. The pilot is Auburn, CA, but what\'s really being built is an engine that works for any city.',
    stack: ['Ionic', 'Angular', 'Capacitor'], cats: ['apps'], status: 'Prototype', vis: 'private',
    git: ['cityPassport'], roles: [0, 3, 0, 1],
  },
  {
    id: 'faketurbo', name: 'FakeTurbo', tagline: '+0 HP, +0 TQ, +100 smiles',
    about: 'Reads live engine data from a 2001 Lexus IS300 over OBD-II (ELM327 Bluetooth) and plays layered turbo and engine sounds that react to how you drive.',
    stack: ['Kotlin', 'Android', 'OBD-II'], cats: ['apps', 'play'], status: 'Prototype', vis: 'private',
    git: ['FakeTurbo'], roles: [0, 2, 0, 0],
  },
  {
    id: 'neon-bay', name: 'NEON BAY', tagline: 'A GTA2-style top-down open world',
    about: 'Drive, shoot, run jobs for three rival gangs and survive a six-level police response. All art is original and generated procedurally by a script in the project.',
    stack: ['Godot', 'GDScript'], cats: ['play'], status: 'Vertical slice', vis: 'private',
    git: ['GTA'], roles: [0, 1, 0, 0],
  },
  {
    id: 'chaosjs', name: 'chaos.js', tagline: '32 harmless office pranks in one script tag',
    about: 'Drop it into any page and watch coworkers question reality. Each prank fires once per victim, so refreshing won\'t save them.',
    stack: ['JavaScript'], cats: ['play'], status: 'Live', vis: 'public',
    site: 'https://jasonsutter87.github.io/jumpscare/', repo: 'https://github.com/jasonsutter87/jumpscare', git: ['jumpscare'], roles: [0, 1, 0, 0],
  },

  // ---- security & cryptography --------------------------------------------
  {
    id: 'tvs', name: 'Trustless Voting System', tagline: 'Private, verifiable voting with no trusted authority',
    about: 'Voter privacy, vote integrity and public verifiability without trusting any single party, using blind signatures, zk-SNARKs, threshold cryptography and Merkle trees. Benchmarked at 1M voters in 3m 33s. The whitepaper is public.',
    stack: ['TypeScript', 'zk-SNARKs', 'Threshold crypto', 'Merkle trees'], cats: ['security'], status: 'Whitepaper', vis: 'public',
    repo: 'https://github.com/jasonsutter87/TVS-Whitepaper', git: ['VeilSuite/TVS'], roles: [1, 0, 2, 2], family: 'veil',
  },
  {
    id: 'veilforms', name: 'VeilForms', tagline: 'Forms the server can\'t read',
    about: 'Submissions are encrypted in the browser before they are sent, so the server never sees plaintext.',
    stack: ['Next.js', 'WebCrypto', 'Hugo'], cats: ['security', 'web'], status: 'Live', vis: 'public',
    site: 'https://veilforms.com', repo: 'https://github.com/jasonsutter87/veilforms', git: ['VeilSuite/VeilForms'], roles: [0, 2, 2, 3], family: 'veil',
  },
  {
    id: 'veilsign', name: 'VeilSign', tagline: 'Blind-signature credentials',
    about: 'An implementation of Chaum\'s blind signature protocol: authorities sign credentials without learning their contents. Signed credentials can\'t be linked back to the request, and nullifiers prevent double use. REST API.',
    stack: ['TypeScript', 'RSA'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilSign'], roles: [0, 0, 2, 1], family: 'veil',
  },
  {
    id: 'veilchain', name: 'VeilChain', tagline: 'Bitcoin-grade immutability without the blockchain baggage',
    about: 'A Merkle-tree ledger service: verifiable, append-only storage for audit logs, compliance records and anything that needs to be tamper-evident.',
    stack: ['TypeScript', 'Merkle trees'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilChain'], roles: [0, 1, 2, 2], family: 'veil',
  },
  {
    id: 'veilcloud', name: 'VeilCloud', tagline: 'Zero-knowledge cloud storage',
    about: '"Store secrets. Not trust." The storage layer other Veil projects (and blackbook) build on.',
    stack: ['TypeScript'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilCloud'], roles: [0, 1, 2, 2], family: 'veil',
  },
  {
    id: 'veilkey', name: 'VeilKey', tagline: 'Threshold cryptography as a service',
    about: 'Distributed key management where no single party holds the key.',
    stack: ['TypeScript', 'Threshold crypto'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilKey'], roles: [0, 0, 2, 2], family: 'veil',
  },
  {
    id: 'veilvault', name: 'VeilVault', tagline: 'Zero-knowledge GRC for financial institutions',
    about: 'Governance, risk and compliance with mathematically verifiable audit trails, tamper-proof ledgers and privacy-preserving compliance checks.',
    stack: ['TypeScript'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilVault'], roles: [0, 1, 2, 2], family: 'veil',
  },
  {
    id: 'veilvideo', name: 'VeilVideo', tagline: 'Video calls you join by proof, not identity',
    about: 'Anonymous room access: prove you are authorized to join a call without revealing who you are, using zero-knowledge proofs.',
    stack: ['TypeScript', 'ZK proofs'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['VeilSuite/VeilVideo'], roles: [0, 1, 1, 1], family: 'veil',
  },
  {
    id: 'gatekeep', name: 'gatekeep', tagline: 'A small SSO server: passkeys and OpenID Connect',
    about: 'WebAuthn passkeys, OpenID Connect and Ed25519 signing, built to be readable decades from now. The demo is one HTML file: log in with a real passkey and watch your identity come back with "✓ valid signature".',
    stack: ['TypeScript', 'WebAuthn', 'OIDC', 'Ed25519'], cats: ['security', 'devtools'], status: 'Active', vis: 'private',
    git: ['gatekeep/gatekeep', 'gatekeep/gatekeep-demo'], roles: [1, 1, 3, 3],
  },
  {
    id: 'swagblocks', name: 'SwagBlocks', tagline: 'An API security workbench',
    about: 'Capture, explore, sequence, fuzz, diff and replay API traffic. It has a built-in mitmproxy proxy, a visual sequence editor, role diffing, a type-mutation fuzzer and invariant testing. Import any OpenAPI spec or capture live traffic.',
    stack: ['Python', 'TypeScript', 'React', 'mitmproxy'], cats: ['security', 'devtools'], status: 'Prototype', vis: 'private',
    git: ['swagblocks'], roles: [1, 1, 3, 3],
  },
  {
    id: 'envsync', name: 'EnvSync', tagline: 'A zero-knowledge .env manager',
    about: '"Sync secrets. Not trust." An Angular app, a backend and a CLI for sharing environment files without the server ever reading them.',
    stack: ['Angular', 'TypeScript', 'Python', 'Rust'], cats: ['security', 'devtools'], status: 'Prototype', vis: 'private',
    git: ['EnvSync'], roles: [0, 1, 2, 2],
  },
  {
    id: 'blackbook', name: 'blackbook', tagline: 'A zero-knowledge knowledge base of attack vectors',
    about: 'Encrypted storage of offensive-security knowledge for security teams, built on VeilCloud.',
    stack: ['TypeScript', 'Python'], cats: ['security'], status: 'Prototype', vis: 'private',
    git: ['blackbook'], roles: [1, 0, 1, 1], family: 'veil',
  },
  {
    id: 'cookietracker', name: 'cookietracker', tagline: 'Your own Cookiebot, self-hosted',
    about: 'Paste one script tag, build a consent banner by dragging, and get GDPR-compliant consent with a real audit trail. Trackers stay blocked until the visitor agrees. Built hardest-first, and every layer is verified end to end in a real browser.',
    stack: ['TypeScript', 'React', 'C#'], cats: ['web', 'security'], status: 'Prototype', vis: 'private',
    git: ['cookietracker'], roles: [0, 2, 3, 3],
  },
  {
    id: 'zta', name: 'Zero Trust Analytics', tagline: 'Website analytics with no cookies and no personal data',
    about: 'No cookies, no fingerprinting and no personal data, so it is GDPR compliant without a consent banner. The tracker is under 2 KB, with integration guides for Hugo, React and Next.js.',
    stack: ['TypeScript', 'Docker'], cats: ['web', 'security'], status: 'Beta', vis: 'private',
    git: ['ZTA.io/zero-trust-analytics'], roles: [0, 2, 2, 3],
  },

  // ---- developer tools & web -----------------------------------------------
  {
    id: 'pfm', name: 'P.F.M.', tagline: 'A portable file format for AI conversations',
    about: 'Indexed O(1) section access, SHA-256 integrity and AES-256 encryption, 12–25× faster than JSON for targeted retrieval. Python and TypeScript libraries plus a Chrome extension.',
    stack: ['Python', 'TypeScript', 'Chrome Extension'], cats: ['devtools', 'ai'], status: 'Live', vis: 'public',
    site: 'https://getpfm.io', repo: 'https://github.com/jasonsutter87/P.F.M.', git: ['werbosLLM/pfm'], roles: [2, 1, 2, 2],
  },
  {
    id: 'partyparrot', name: 'partyparrot', tagline: 'A realtime presence and soft-lock collaboration server',
    about: 'A from-scratch wire protocol (v1, designed to survive 25–50 years) and a reference Bun server, with a Python client. The demo, squawk, is one HTML file: type your name and watch your cursor meet someone else\'s.',
    stack: ['TypeScript', 'Bun', 'WebSocket', 'Python'], cats: ['devtools'], status: 'Spec v1', vis: 'private',
    git: ['werbosLLM/partyparrot', 'werbosLLM/partyparrot-py', 'squawk'], roles: [1, 1, 3, 2],
  },
  {
    id: 'code-janitor', name: 'Code Janitor', tagline: 'Deprecated code that deletes itself on schedule',
    about: 'Mark a block with an expiration date and Code Janitor removes it once that date passes. Includes a CLI and CI pipeline templates.',
    stack: ['TypeScript', 'Node.js', 'React'], cats: ['devtools'], status: 'Shipped', vis: 'private',
    git: ['code-janitor'], roles: [1, 1, 2, 1],
  },
  {
    id: 'style-audit', name: 'Style Audit', tagline: 'Find and remove unused CSS',
    about: 'A VS Code extension that audits CSS/SCSS for unused styles and helps clean them up.',
    stack: ['TypeScript', 'VS Code API'], cats: ['devtools'], status: 'Prototype', vis: 'private',
    git: ['style-audit'], roles: [0, 1, 1, 1],
  },
  {
    id: 'codelore', name: 'codelore', tagline: 'Developer docs and changelogs from your codebase',
    about: 'Generates documentation and changelogs automatically from the code and its history.',
    stack: ['TypeScript', 'Next.js'], cats: ['devtools', 'ai'], status: 'Prototype', vis: 'private',
    git: ['codelore'], roles: [2, 1, 1, 1],
  },
  {
    id: 'social-poster', name: 'Social Poster', tagline: 'Multi-platform social scheduling with a developer API',
    about: 'Seven platforms, an AES-256-GCM vault for API keys with per-user master keys, timezone-aware scheduling, bulk import from CSV and Google Sheets, and a REST API with webhooks.',
    stack: ['TypeScript', 'Next.js', 'OAuth'], cats: ['web'], status: 'Prototype', vis: 'private',
    git: ['social-poster-saas'], roles: [0, 2, 2, 2],
  },
  {
    id: 'chattrbox', name: 'ChattrBox', tagline: 'An embeddable Zendesk-style support chat widget',
    about: 'Real-time customer support: a NestJS + Socket.io backend, a React admin dashboard and a lightweight vanilla-JS widget.',
    stack: ['NestJS', 'Socket.io', 'MongoDB', 'React'], cats: ['web'], status: 'Prototype', vis: 'private',
    git: ['chattrbox'], roles: [0, 2, 2, 3],
  },
  {
    id: 'lead-scraper', name: 'lead scraper', tagline: 'Find local businesses running Google Analytics or the Facebook Pixel',
    about: 'Uses free OpenStreetMap data with no API keys, then checks each site for trackers to build an outreach list for privacy-first analytics.',
    stack: ['Node.js'], cats: ['devtools'], status: 'Shipped', vis: 'private',
    git: ['marketing-lead-generation'], roles: [0, 1, 2, 3],
  },
  {
    id: 'backend-course', name: '12-week backend course', tagline: 'Twelve projects, from a task tracker to an API gateway',
    about: 'A hands-on course where each week adds concepts on top of the last: Angular 19, ASP.NET MVC on .NET 10, and SQLite through Entity Framework Core.',
    stack: ['Angular', 'C#', 'ASP.NET', 'SQLite'], cats: ['web'], status: 'Shipped', vis: 'public',
    repo: 'https://github.com/jasonsutter87/backend-course', git: ['backend-course'], roles: [0, 0, 1, 3],
  },

  // ---- archive: experiments and early sketches -----------------------------
  {
    id: 'nonprofit-dashboard', name: 'nonprofit dashboard', tagline: 'Card and Lightning donations for small nonprofits',
    about: 'A donation aggregation platform: build donation pages for nonprofits, take a small fee and pass the rest on.',
    stack: ['TypeScript', 'Next.js', 'Lightning'], cats: ['web'], status: 'Sketch', vis: 'private',
    git: ['nonprofit-dashboard'], roles: [0, 1, 1, 2], archive: true,
  },
  {
    id: 'opusprime', name: 'opusPrime', tagline: 'The roadmap that became werbos',
    about: 'A December 2025 plan for a privacy-first cognitive AI with persistent memory and proactive intelligence. The early version of the idea werbos grew out of.',
    stack: ['TypeScript'], cats: ['ai'], status: 'Sketch', vis: 'private',
    git: ['opusPrimeMegaTron10x'], roles: [1, 0, 0, 0], archive: true, family: 'werbos',
  },
  {
    id: 'pulpit', name: 'Pulpit', tagline: 'Sermon websites for churches, AI-assisted',
    about: 'An MVP plan for a turnkey sermon platform, plus a small Android attendance counter.',
    stack: ['Next.js', 'Kotlin'], cats: ['web'], status: 'Sketch', vis: 'private',
    git: ['church-counter'], roles: [0, 1, 0, 1], archive: true,
  },
  {
    id: 'sim-engine', name: 'sim engine', tagline: 'A canvas simulation engine driven by a small DSL',
    about: 'Write the simulation in a panel and watch it run.',
    stack: ['JavaScript', 'Canvas'], cats: ['play'], status: 'Sketch', vis: 'private',
    git: ['sim-engine'], roles: [0, 0, 0, 0], archive: true,
  },
  {
    id: 'launch-planner', name: 'launch planner', tagline: 'Plan a product launch, step by step',
    about: 'An early Next.js sketch for planning launches.',
    stack: ['TypeScript', 'Next.js'], cats: ['web'], status: 'Sketch', vis: 'private',
    git: ['launch-planner'], roles: [0, 1, 0, 0], archive: true,
  },
];

window.EXPERIENCE = [
  {
    role: 'Web Developer → Frontend Developer', org: 'GROW', when: 'Oct 2019 – Oct 2026', where: 'Auburn, CA',
    points: [
      'Designed and built <b>Lectern</b>, a white-label course authoring tool similar to Articulate Storyline: TypeScript monorepo, React editor, player engine, SCORM 1.2/2004 and xAPI, and a Tauri desktop app. <b>2,000+ tests.</b>',
      'Ran my own security audits on it: <b>110 reports, 663 findings, 661 fixed</b>, each with a repro and a CI-backed patch.',
      'Angular developer on <b>Mandated Reporter Training</b>, a state-approved compliance LMS serving <b>5,000+ organizations</b>. Also built an offline retrieval assistant over its 2,342 cited fact chunks that declines when nothing matches.',
      'Built <b>50+ client sites</b> and led the <b>DNN → Hugo migration</b>.',
    ],
  },
  {
    role: 'Independent Security Researcher', org: 'HackerOne · mrblackkeys', when: 'Jan 2026 – Present', where: 'Sacramento, CA',
    points: ['<b>First accepted finding in Twilio\'s bug bounty program</b>, triaged and rewarded.', 'Source-level review with reproducible, unit-tested proofs of concept.'],
  },
  {
    role: 'Freelance & Frontend Roles', org: 'Startups and small businesses', when: '2016 – 2019', where: 'Sacramento / SF Bay',
    points: ['Full-stack web apps from scoping to launch: React/Angular, Node.js, Hugo, deployment automation.'],
  },
  {
    role: 'Technical Director (3D rigging)', org: 'Animation teams', when: 'Before 2016', where: '',
    points: ['B.F.A. in Rigging & Animation (Academy of Art University). The technical side pulled me into software, and I finished Dev Bootcamp in 2016.'],
  },
];

window.ROLES = {
  all: {
    label: 'Everything', resume: null,
    headline: 'Software engineer · AI, Rust desktop apps, applied crypto',
    summary: '7+ years shipping production web apps in Angular, React and TypeScript. Lately I\'ve been building local AI systems, Rust desktop apps and cryptographic tools on my own time. Everything I\'ve built is below, so dig in.',
    pins: ['werbos', 'tallybook', 'murmur', 'tvs', 'cryptoblocks', 'writepad'],
  },
  ai: {
    label: 'Applied AI Engineer', resume: 'resume/jason-sutter-applied-ai-engineer.pdf',
    headline: 'Applied AI Engineer',
    summary: 'I build with and on LLMs: agents with tool calling, RAG, evals, LoRA fine-tuning, and local inference with llama.cpp and whisper.cpp. I care about making model output trustworthy, with retrieval that cites its sources and declines when it doesn\'t know, and evals that decide what ships.',
    pins: ['werbos', 'murmur', 'hablo', 'unfold', 'autodocumentor', 'werbos-phone'],
  },
  product: {
    label: 'AI Product Engineer', resume: 'resume/jason-sutter-ai-product-engineer.pdf',
    headline: 'AI Product Engineer',
    summary: 'Product-minded engineer who takes things from idea to release, including design, AI features, testing and signed auto-updating installers. A live bookkeeping app with paid plans, a script-writing app for Mac and Windows, and voice AI that runs fully on-device. Former 3D technical director, so the interface gets as much care as the code.',
    pins: ['tallybook', 'writepad', 'hablo', 'murmur', 'cryptoblocks', 'werbos-design'],
  },
  fde: {
    label: 'Forward Deployed Engineer', resume: 'resume/jason-sutter-forward-deployed-engineer.pdf',
    headline: 'Forward Deployed / Full-Stack Engineer',
    summary: 'Seven years building for clients with loose requirements and real deadlines. I use AI coding agents daily and know how to get production-quality code out of them; that\'s how I built a course authoring platform with 2,000+ tests largely on my own. I also do security research (accepted Twilio bug bounty).',
    pins: ['werbos', 'autodocumentor', 'unfold', 'gatekeep', 'swagblocks', 'watchtower'],
  },
  se: {
    label: 'Solutions Engineer', resume: 'resume/jason-sutter-solutions-engineer.pdf',
    headline: 'Solutions Engineer · Full-Stack & AI',
    summary: 'Much of my career has been working directly with clients: scoping loose requirements, explaining tradeoffs in plain language, and shipping on real deadlines. I build hands-on with AI every day, so I can show customers what will and won\'t work.',
    pins: ['tallybook', 'autodocumentor', 'werbos-phone', 'gatekeep', 'cookietracker', 'veilforms'],
  },
};
