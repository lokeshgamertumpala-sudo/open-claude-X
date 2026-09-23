# Open Claude X ⚡

> **The Ultimate AI Agent Merging Claude Code, Codex, and OpenCode.**  
> Powered by **DeepSeek version 4.1 Flash** with a **5-Key Resilient Fallback Router** and an **Antigravity Cloud File Management System**.

---

## 🌟 Overview

**Open Claude X** combines the strengths of three agent paradigms:
1. **Claude Code**: Agentic terminal loop, real-time token streaming, tool calling, interactive slash commands, and keyboard shortcuts.
2. **Codex**: AST code parsing, background subprocess executor, and test-driven self-healing repair loops.
3. **OpenCode**: Support for open models (DeepSeek version 4.1 Flash), provider flexibility (OpenRouter, Gemini API, NVIDIA NIM), and configurable system prompts.

---

## 🚀 Key Features

### 1. 5-Key Resilient Fallback Router
- Configure up to **5 API keys** across **OpenRouter**, **Gemini API**, or **NVIDIA NIM**.
- **Auto-Failover**: If Key 1 encounters an HTTP 429 (Rate Limit), 402 (Credits), 5xx server error, or timeout, Open Claude X automatically switches to Key 2, Key 3, Key 4, or Key 5 without restarting your task or dropping context.
- **Health & Rate-Limit Tracking**: Keys in cooldown are kept temporarily aside until their window expires, maximizing uptime.

### 2. Antigravity Cloud File System
- **Exact Chunk Replacement (`replace_file_content`)**: Atomic character-precise line replacements with strict bounds checking to eliminate hallucinations.
- **Artifacts System**: Native support for `implementation_plan.md`, `walkthrough.md`, system diagrams, and reports stored in `.openclaudex/brain/<session>/`.
- **Session Transcripts**: Full step-by-step audit logs saved to `transcript.jsonl`.
- **Scratchpad**: Isolated sandbox for experimental scripts and intermediate data files.

### 3. Claude Code & Codex Tool Suite
- `view_file`: Sliced file viewing with line numbers.
- `write_to_file`: Atomic file creation and artifact tracking.
- `replace_file_content`: Exact diff chunk patcher.
- `list_dir`, `find_by_name`, `grep_search`: Fast codebase indexing and ripgrep-like search.
- `run_command`: Subprocess runner with background task tracking and cancellation.
- `web_search`: Real-time web search for libraries, APIs, and documentation.
- `read_url_content`: Intelligent HTML scraper converting web pages into clean markdown.
- `invoke_subagent`: Autonomous subagent delegation for research, review, or testing.

### 4. Interactive Circle Bot & Dual UI
- **Claude Code Interactive CLI (TUI)**: Fast, distraction-free terminal with color diffs, animated spinners, slash commands, and keyboard shortcuts.
- **Web Companion with Interactive Circle Bot**:
  - **Mouse Tracking**: The Circle Bot's eyes follow your mouse cursor smoothly across the entire screen.
  - **Dynamic Aura**: Shifts color and pulse dynamically based on agent state:
    - 🔵 **Cyan**: Idle / Ready
    - 🟡 **Amber**: Thinking / Reasoning
    - 🟢 **Green**: Coding / Executing Tools
    - 🔴 **Crimson**: Rate Limit / Key Fallback
  - **Interactive Physics**: Click or poke the bot to trigger bounce animations, winks, and reactive shockwaves.

---

## ⌨️ Slash Commands & Shortcuts

| Slash Command | Alias | Description |
| :--- | :--- | :--- |
| `/help` | `/h` | View all commands and shortcuts |
| `/key-status` | `/keys` | Health, latency, and metrics for all 5 fallback keys |
| `/model` | `/m` | Inspect active model (DeepSeek 4.1 Flash) and parameters |
| `/config` | `/cfg` | Interactive key onboarding and config wizard |
| `/ui` | `/web` | Launch the Web Companion with the interactive Circle Bot |
| `/goal` | `/g` | Autonomous long-running mode for multi-step tasks |
| `/browser` | `/browse` | Quick web search or scrape URL from terminal |
| `/diff` | `/d` | Review pending modifications across the workspace |
| `/review` | `/codex` | Trigger Codex deep code analysis and syntax verification |
| `/test` | `/t` | Run tests and trigger Codex self-healing on failure |
| `/clear` | `/c` | Clear terminal screen |
| `/exit` | `/q` | Exit Open Claude X |

### Keyboard Shortcuts
- `Tab`: Autocomplete slash commands and file paths
- `Ctrl + C`: Interrupt active generation or cancel tool execution
- `Ctrl + L`: Clear screen
- `Up / Down`: Cycle through prompt and command history
- `Enter`: Submit prompt

---

## 🛠️ Installation & Quick Start

### 1. Install Dependencies
```bash
npm install
npm run build
```

### 2. Configure Your 5 Fallback Keys
Create a `.env` file or copy `.env.example`:
```env
# OpenRouter Keys (Primary for DeepSeek version 4.1 Flash)
OPENROUTER_KEY_1=sk-or-v1-xxxxxxxxxxxx
OPENROUTER_KEY_2=sk-or-v1-xxxxxxxxxxxx
OPENROUTER_KEY_3=sk-or-v1-xxxxxxxxxxxx
OPENROUTER_KEY_4=sk-or-v1-xxxxxxxxxxxx
OPENROUTER_KEY_5=sk-or-v1-xxxxxxxxxxxx

# Or Remote Gemini Keys
GEMINI_KEY_1=AIzaSyxxxxxxxxxxxx
```

### 3. Launch Terminal CLI
```bash
npm start
```

### 4. Launch Interactive Web Companion (Circle Bot)
```bash
npm run ui
```
Then open `http://localhost:4100` in your browser.

### 5. Run Automated Tests
```bash
npm test
```

---

## 📁 Directory Structure
```
OpenClaudeX/
├── .openclaudex/            # Antigravity brain sessions, config & transcripts
├── src/
│   ├── config/              # Configuration & 5-key manager
│   ├── router/              # KeyPoolRouter & ProviderClient (OpenRouter/Gemini/NVIDIA)
│   ├── brain/               # Antigravity SessionManager & ArtifactStore
│   ├── fs/                  # FilePatcher (exact chunk) & WorkspaceManager
│   ├── codex/               # CommandExecutor & CodexSelfHealing engine
│   ├── tools/               # Agent tool suite (files, terminal, web search, scraper)
│   ├── agent/               # OpenClaudeXAgent core loop & SubagentManager
│   ├── cli/                 # Terminal UI, REPL, shortcuts & formatters
│   ├── ui/                  # Web Companion server & Interactive Circle Bot
│   └── tests/               # Automated unit & integration test suites
├── package.json
└── tsconfig.json
```

---

## 📄 License
MIT © Open Claude X Team
