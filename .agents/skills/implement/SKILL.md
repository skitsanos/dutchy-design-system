---
name: implement
description: Prepare or execute a parallel Codex implementation only when the user explicitly requests `/implement`, parallel work, multiple agents, or an implementation handoff for this repository.
---

# Parallel Implementation

Use this workflow only for explicit parallel or multi-agent requests. Ordinary implementation requests should be handled directly.

## Analyze

Read `AGENTS.md`, the requested specification, a relevant existing implementation, shared integration files, and available checks. Identify independently owned file groups and dependencies between them.

Do not split the work when it is concentrated in one shared file, requires unresolved architecture decisions, or has fewer than two genuinely independent work streams.

## Execute Or Hand Off

When Codex multi-agent tools are available and the user requested execution, create bounded work units with:

- A concrete outcome and acceptance criteria.
- Exclusive write ownership paths.
- Read-only reference paths.
- Required coordination and dependency order.
- Relevant build, lint, typecheck, test, and browser checks.

Reserve registries, navigation, shared configuration, and final integration for one owner after dependent work lands. Avoid review-only agents and overlapping write scopes.

When multi-agent tools are unavailable, provide the same work units as copy-ready handoff prompts. State coordination points and integration order clearly.

Finish by integrating results, resolving conflicts without discarding user changes, running repository checks, and reporting any incomplete work.
