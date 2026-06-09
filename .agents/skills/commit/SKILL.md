---
name: commit
description: Prepare and create commits for the Dutchy Design System. Use when asked to commit changes in this repository: review diffs, run available checks, enforce docs and design-system constraints, write accurate Conventional Commits, and ask before pushing.
---
# Commit Skill
1. Review context first: read `AGENTS.md`, then inspect `git status --short`, `git diff`, and `git diff --staged`.
2. Keep the commit focused: include only files related to the requested task; avoid mixing unrelated edits.
3. Run checks that actually exist in this repo. Do not assume `npm`/`tsc` scripts are available.
4. If docs or website files changed, verify:
   - Internal links point to real files.
   - Markdown code fences include language hints (`html`, `css`, `ts`, `tsx`, `js`).
   - Dutchy visual language is preserved (no border radius, no low-contrast styling, focus states remain visible).
5. If Bun SSR files changed (`src/utils/`, `src/middleware/`, route examples), verify:
   - SSR-only constraints are respected (no client React hooks/event handlers in SSR JSX examples).
   - Routing conventions remain intact (`index.tsx` GET behavior, method files, `$param` to `:param` semantics, trailing slash normalization).
   - CORS/OPTIONS handling is not regressed where applicable.
6. Stage intentionally, then re-check staged diff before committing.
7. Write a precise Conventional Commit message with accurate scope when useful (e.g., `docs`, `website`, `src`, `tokens`, `showcase`). Never guess names or mention Codex.
8. Commit and report what was included.
9. Ask before pushing.
