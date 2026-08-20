---
name: dutchy-ssr-check
description: Audit Dutchy Bun SSR routes for native controls or layout markup that should use existing design-system components, and verify required client-side handlers and selector contracts.
---

# Dutchy SSR Component Check

Review route composition against the components and browser handlers that actually exist in this repository.

## Discover Contracts

Read `AGENTS.md`, `src/components/componentRegistry.ts`, relevant files under `src/components/`, and their handlers under `public/assets/js/`. Build the component-to-native-element and component-to-script mapping from source rather than a fixed list.

## Audit Routes

Scan the requested `src/routes/**/*.tsx` scope and report:

- Native controls such as buttons, inputs, selects, textareas, tables, and images when a Dutchy component provides the same role.
- Repeated flex-only containers that should use the existing `Flex` component.
- Interactive components whose required script is missing from `Layout` or the route.
- JSX `data-*` or ID hooks that do not match their client handler selectors.
- Client handlers with no corresponding rendered trigger or target.

Do not flag semantic structure (`main`, `section`, `article`, `nav`, headings, paragraphs) or native elements for which no suitable Dutchy component exists. Do not inspect string literals and documentation examples as rendered route markup.

## Report

List findings by severity with file and line references, the existing component or script contract to use, and the expected behavioral impact. List genuine missing abstractions separately as component candidates.

If no issues are found, state the scanned scope and any verification gaps.
