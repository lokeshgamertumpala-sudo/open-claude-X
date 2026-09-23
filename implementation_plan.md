## Architecture & System Design

```mermaid
flowchart TD
subgraph UI ["Interface Layer"]
CLI["Claude Code Style Interactive CLI (TUI)"]
WebUI["Web Companion + Interactive Mouse Circle Bot"]
SlashCmd["Slash Commands & Shortcut Registry"]
end

subgraph CoreAgent ["Agent Core (Claude Code + Codex)"]
AgentLoop["Autonomous ReAct Loop"]
CodexEngine["Codex Engine (Self-Healing, AST & Test Runner)"]
Subagents["Subagent Orchestrator"]
end

subgraph RouterLayer ["5-Key Router & Fallback System"]
KeyPool["5-Key Fallback Pool (Keys 1-5)"]
Failover["Auto-Failover on 429/5xx/Timeouts"]
Provider["OpenRouter / Gemini / NVIDIA Adapter"]
end
