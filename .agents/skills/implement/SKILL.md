---
name: implement
description: Prepare a Codex multi-agent implementation handoff only when the user explicitly says "/implement", asks to build in parallel, asks to spawn agents, or requests an implementation plan for parallel execution in this repository.
---

# Implement

Analyze a feature request, decompose it into parallel-safe work units, and either use available Codex multi-agent tools or produce a ready-to-run handoff plan.

## Workflow

### Phase 1: Confirm Scope

1. If the user references a plan file, read it.
2. If the request is inline, summarize the feature scope in 2-3 sentences.
3. Identify the concrete deliverables and the files or areas likely to change.
4. If the scope is ambiguous enough to affect architecture, ask 1-2 focused questions.

Keep this short. The goal is shared understanding, not a full specification.

### Phase 2: Analyze The Codebase

Use parallel local reads where possible. Inspect:

1. A reference implementation that follows the same component, route, utility, or test pattern.
2. Shared integration files such as registries, route loaders, barrel files, navigation manifests, config files, and tests.
3. File ownership boundaries that can be changed independently.
4. Project checks from `package.json` and repository guidance from `AGENTS.md`.

If multi-agent tools are available through tool discovery, use them only after the ownership boundaries are clear.

### Phase 3: Decide Whether Parallel Work Is Worth It

Skip multi-agent handoff and implement directly when:

- The change is smaller than two independent file groups.
- Most work is in a single shared file.
- The feature requires tight sequential design decisions.
- The user asked for implementation, not planning, and direct implementation is faster.

Use a handoff when the work has clear independent ownership boundaries.

### Phase 4: Propose Work Units

Format the proposal like this:

```md
## Proposed Work Units For: [Feature Name]

Reference pattern: [path]

1. [Role] - [What this unit builds]
   Owns: [specific paths]

2. [Role] - [What this unit builds]
   Owns: [specific paths]

3. Integration - Wires shared files after other units land
   Owns: [specific shared files]

Coordination points:
- [API shape, component props, shared tokens, migration order, etc.]
```

### Phase 5: Handoff Or Execute

If Codex multi-agent tools are available, use the discovered tool schema and pass each role a bounded prompt containing:

- Scope
- Owned paths
- Read-only reference paths
- Coordination requirements
- Acceptance criteria
- Required checks

If those tools are not available, return the prompts to the user in copy-ready form.

## Agent Role Guidelines

- Integration roles touch registries, navigation, route aggregators, and config after feature roles finish.
- Frontend roles own SSR components, routes, and client handlers for their feature slice.
- Backend roles own utilities, middleware, route handlers, and data contracts.
- Test roles own focused test files and verification commands.
- Avoid roles with no file ownership.
- Avoid more roles than independent work streams.
