---
name: implement
description: Prepare or run a Claude Code agent-team implementation only when the user explicitly invokes `/implement` or asks for parallel agents or an agent-team handoff.
disable-model-invocation: true
---

# Agent-Team Implementation

Use this explicit workflow for work that can benefit from Claude Code agent teams.

## Analyze

Read `AGENTS.md`, the requested specification, a relevant existing implementation, shared integration files, and available checks. Identify independently owned file groups and dependencies between them.

Do not create a team when the work is concentrated in one shared file, requires unresolved architecture decisions, or has fewer than two genuinely independent work streams.

## Propose The Team

Define only the roles justified by file ownership. Each role needs:

- A concrete outcome and acceptance criteria.
- Exclusive write ownership paths.
- Read-only reference paths.
- Required coordination and dependency order.
- Relevant build, lint, typecheck, test, and browser checks.

Reserve registries, navigation, shared configuration, and final integration for one owner after dependent work lands. Avoid overlapping write scopes and review-only teammates.

Ask for approval of the team boundaries before launching or producing spawn prompts. If agent teams are unavailable, provide copy-ready prompts instead of inventing tool calls.

After implementation, integrate results, resolve conflicts without discarding user changes, run repository checks, summarize ownership and outcomes, and clean up the team.
