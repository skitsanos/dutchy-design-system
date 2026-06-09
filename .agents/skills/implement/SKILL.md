---
name: implement
description: Orchestrate feature implementation by analyzing the codebase, decomposing work into parallel-safe units, and preparing an agent team handoff. Use when the user says "/implement", "implement this feature", "build this in parallel", asks to "spin up a team" for development, or references implementation plans and feature specs. Handles analysis and planning automatically via subagents, then provides ready-to-use agent team configuration for parallel execution.
disable-model-invocation: true
---

# Implement

Analyze a feature request, decompose it into parallel-safe work units using subagents, and produce a ready-to-use agent team configuration for the user to execute.

## Workflow

### Phase 1: Understand the feature

1. If the user references a plan file, read it.
2. If inline, restate the feature scope in 2-3 sentences and ask "Does this capture it, or should I adjust?"
3. Identify deliverables: what new capabilities should exist when done?

Keep this fast. Shared understanding, not a specification document.

### Phase 2: Analyze the codebase

Launch parallel subagents (Task tool with `subagent_type: Explore`) to analyze the codebase simultaneously:

**Subagent A — Reference implementation finder:**
Find an existing feature in the codebase that follows the same structural pattern (components, services, routes, tests). Report the directory structure, file naming conventions, and architectural patterns used.

**Subagent B — Shared file mapper:**
Identify all shared/integration files: barrel exports (index.ts/js), router configs, navigation manifests, migration runners, dependency injection registries, and any file that aggregates or registers feature modules. List each file path and what it aggregates.

**Subagent C — Project structure scanner:**
Map the project's directory layout, build system, test framework, and package structure. Report the tech stack, directory conventions, and how existing features are organized.

Synthesize subagent results to determine:
- The reference implementation pattern to follow
- Independently ownable file groups (these become agent roles)
- Shared files that must be touched last (integration agent scope)
- The right number of agents based on actual file boundaries

### Phase 3: Propose the team structure

Present the analysis and proposed team. Format:

```
## Proposed team for: [Feature Name]

**Reference pattern:** [path to existing feature used as template]

**Agents:**

1. [Role] — [What they build].
   Owns: [directory pattern from codebase analysis]

2. [Role] — [What they build].
   Owns: [directory pattern]

3. Integration (runs last) — Wires up shared files.
   Owns: [specific shared files from Subagent B results]

**Coordination points:**
- [e.g., "Backend and Frontend agree on API response shapes before implementing"]

**Feature too small?** If analysis reveals fewer than 2 independent file groups, say so and offer to implement directly in a single session.
```

Wait for user approval. Adjust roles/boundaries if requested.

### Phase 4: Generate spawn prompts

After approval, generate a complete spawn prompt for each teammate. Each prompt must include:
- Scope: what they're building
- Owned paths: directories they can read/write
- Reference paths: directories to read for patterns (especially the reference implementation)
- Coordination: who to message and about what
- Acceptance criteria: concrete definition of done

Example:
```
You are building the backend service layer for [Feature Name].

Own (read/write): src/features/[feature-name]/services/**, models/**, routes/**
Reference (read-only): src/features/[existing-feature]/ — follow the same patterns.

Before implementing API routes, message the Frontend teammate to agree on response shapes.

Done when: all endpoints return correct data, models have migrations, service layer has unit tests for core logic.
```

### Phase 5: Hand off to user

Present the user with exact instructions they need to execute. Format:

```
## Ready to launch

### 1. Ensure agent teams are enabled
Add to your settings.json or environment:
CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1

### 2. Create the team
Paste this into Codex:

> Create an agent team for [Feature Name].
> Require plan approval before any teammate makes changes.
>
> Spawn these teammates:
>
> **[Role 1]:** [full spawn prompt]
>
> **[Role 2]:** [full spawn prompt]
>
> **[Integration]:** [full spawn prompt, noting dependencies]

### 3. Enable delegate mode
Press Shift+Tab after team creation to restrict the lead to coordination only.

### 4. Plan approval criteria
When teammates submit plans, approve only if:
- File ownership is respected (no files outside their owned set)
- No shared file modifications (only Integration touches those)
- Test coverage is specified
- Reference implementation patterns are followed
- Acceptance criteria are concrete, not vague

### 5. After completion
Ask the lead to produce a summary: files created/modified per agent, test results, unresolved issues.
Then ask the lead to clean up the team.
```

## Agent role guidelines

Roles emerge from codebase analysis. Common patterns:

- **Integration agent** — Always include when shared files exist. Runs last, owns only index/config files.
- **Frontend agent** — Components, hooks, views, client-side state.
- **Backend agent** — Services, models, routes, server-side logic.
- **Tests agent** — Unit tests, integration tests, E2E scenarios.
- **Data/Schema agent** — Complex data modeling, migrations, schema design.

Avoid: agents with no file ownership, more agents than independent file groups, agents whose only job is reviewing.

## Edge cases

**Feature too small:** If fewer than 2 independent file groups, skip the team and implement directly.

**Unclear scope:** Ask 1-2 focused clarifying questions before Phase 2.

**No reference implementation:** Propose directory structure explicitly in Phase 3 and confirm with user.
