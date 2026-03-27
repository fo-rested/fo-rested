# CLAUDE.md — Project Configuration

## Project Overview

Next.js multilingual landing page (i18n). TypeScript + React.
Content stored in JSON translation files (no external DB).

## Model

Always use `claude-sonnet-4-5` for all tasks including subagents.
Never use Opus unless explicitly asked by the user.

---

## Stack & Conventions

- **Framework**: Next.js (App Router)
- **Language**: TypeScript — strict mode, no `any`
- **Styles**: Tailwind CSS v4
- **i18n**: JSON files in `/messages/{locale}.json` (next-intl)
- **Locales**: en, pl
- **Components**: `/components` — one file per component, named exports
- **Pages**: `/app` directory structure

### Code Rules

- Functional components only, no class components
- Always type props explicitly — no implicit `any`
- Extract repeated UI into reusable components (DRY)
- Keep components under ~150 lines; split if larger
- No inline styles — use className with Tailwind utility classes
- All user-facing strings go into translation JSON, never hardcoded

### Styling Rules

- **Tailwind-first**: all styles go as utility classes in `className`. Custom CSS only when Tailwind genuinely can't do it (e.g. keyframe animations, SVG filters)
- **No `clamp()`**: use Tailwind responsive prefixes instead — `text-base lg:text-3xl`, not `text-[clamp(1rem,3vw,2rem)]`. Readable and easy to adjust
- **No arbitrary values** unless there's no Tailwind equivalent — prefer design tokens and standard scale
- **`absolute` positioning only for decorative elements** (backgrounds, blobs, grain, ornaments) that don't affect layout. All content uses normal flow (flex, grid)

---

## Agent Routing Rules

Use subagents for isolated, well-scoped tasks.
Return only a brief summary from subagents — not full output.

| Task                         | Action                               |
| ---------------------------- | ------------------------------------ |
| New section / UI component   | → delegate to `component-builder`    |
| Refactor, cleanup, rename    | → delegate to `refactor`             |
| Add/edit translation strings | → delegate to `content-writer`       |
| Verify build after changes   | → delegate to `build-checker`        |
| Bug fix (small, 1–3 files)   | → fix directly in main context       |
| Bug fix (touches many files) | → delegate to `refactor`             |
| Understanding the codebase   | → use built-in Explore agent (quick) |

### Parallelism Rules

- **Run in parallel** only when tasks are fully independent (different files, different domains)
- **Run sequentially** when task B depends on result of task A
- **Never** spawn more than 2–3 subagents simultaneously on Pro plan
- Default to sequential unless parallelism is obvious

### Subagent Invocation Protocol

Every subagent call MUST include:

1. **Goal** — what exactly needs to be done (1–2 sentences)
2. **Files** — specific file paths to read or modify
3. **Constraints** — what NOT to change
4. **Output** — return a short summary (max 5 sentences), not full code diff

---

## i18n Workflow

- Translation keys use dot notation: `hero.title`, `cta.button`
- When adding a new component with text → add keys to ALL locale files
- Key naming: `{section}.{element}` — keep it flat, max 2 levels deep
- Never delete existing keys — mark as `_deprecated_` prefix if unused

---

## File Structure Reference

```
/app
  /[locale]         ← dynamic locale segment
    page.tsx
/components
  /sections         ← page sections (Hero, Features, CTA...)
  /ui               ← reusable primitives (Button, Card...)
/messages
  en.json
  pl.json
/public
```

---

## What NOT to Do

- Don't install new npm packages without asking the user first
- Don't modify `/messages/*.json` from component-builder — use content-writer
- Don't run `npm run build` or `git push` automatically
- Don't create new pages/routes without explicit instruction
- Don't use `console.log` in committed code
