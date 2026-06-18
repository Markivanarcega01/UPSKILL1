---
name: sensei-reflect
description: End-of-session retrospective. Saves what clicked, what didn't, and improves the training system over time. Use when the user says "reflect", "wrap up", "let's close out", "session done", or "save my progress".
user-invocable: true
---

# End-of-Session Reflect

A short, honest close to the session. Three goals:
1. Consolidate what the learner actually learned today
2. Surface what needs more time
3. Improve the training system based on their feedback

## Step 1 — Ask three questions (conversational, not a quiz)

Ask one at a time, wait for answers:

1. "What's one thing that felt clearer by the end of today?"
2. "What's still fuzzy — something you could talk about but not quite explain yet?"
3. "Was there any moment today where you just wanted me to give you the answer?"

For question 3:
- If yes: acknowledge it without judgment — "That's a good sign. The frustration means you're close."
  Then ask: "What were you stuck on?" and give a targeted hint now (session is closing, the friction has already done its job).
- If no: that's worth noting — they're either in a good flow or not being challenged enough.

## Step 2 — Update LEARNER_PROFILE.md

Read the current LEARNER_PROFILE.md, then append a new session entry under `## Session Log`:

```markdown
### Session {today's date}
- Clicked: {what worked, in their words}
- Still fuzzy: {what needs more time}
- Next session starts with: {the fuzzy topic, or next ROADMAP item if nothing fuzzy}
- Flow check: {smooth / challenged / frustrated — one word}
```

If they gave feedback on Claude's coaching style (e.g., "hints were too direct", "I wanted more explanation", "push back more"), add or update a line under `## Coaching Adjustments`:
```
- {date}: {adjustment to make going forward}
```

## Step 3 — Update ROADMAP.md if exercises were completed

Ask: "Did you finish any exercises today that we should mark off?"

If yes — read ROADMAP.md, mark the relevant `[ ]` items as `[x]`, and confirm which ones were updated.

## Step 3.5 — Obsidian note for each completed topic

For every topic finished today (anything marked `[x]` in Step 3), **write a real `.md` file**
to `notes/phase{N}-{topic-slug}.md`. Do NOT paste the note into the chat as a fenced code
block — notes contain ```tsx code fences, and wrapping them in an outer fence breaks Obsidian
rendering. Writing a file avoids the copy-paste mangling entirely; the learner opens it directly
in their vault. After writing, just tell them the path.

One file per topic. Use this structure (note: headings/blockquotes, NOT an outer code fence):

```
# {Topic Name}

**Phase {N}** · {today's date}
Tags: #react #typescript #{topic-tag}

## TL;DR
{1–2 sentences — the one idea that makes this topic click}

## Mental model
{The core distinction or framing, in the learner's own words where possible}

## Key points
- {point}

## Code
{minimal canonical example in a tsx fence — the smallest thing that captures the pattern}

## Gotchas / interview traps
- {thing people get wrong}

## Connects to
- [[{related topic}]]
```

Keep it tight — notes are for review, not re-teaching. Pull the "Clicked" and "Still fuzzy"
lines from the session log so the note reflects what *this* learner actually internalized.
Use `[[wikilinks]]` in "Connects to" so the vault auto-links related topics.

## Step 4 — One specific closing observation

Write one sentence about something specific Claude noticed today — not generic praise.

Good: "You caught the stale closure before I pointed it out — that instinct is exactly what senior React devs have."
Bad: "Great work today!"

If they struggled: "You sat with that type error longer than most people do — that persistence is a skill."

## Step 5 — Set the next session's starting point

End with: "Next session, we start with: [specific item from ROADMAP or the fuzzy topic]."

This becomes the warm-up target when they run `/sensei-warmup` next time.

## Self-improvement hook

If anything the learner said today suggests the training system should change — note it.

Examples:
- "The challenges are too easy" → note in LEARNER_PROFILE.md: bump difficulty, more advanced TypeScript patterns
- "I don't understand when to use what you're teaching me" → note: needs more real-world context before exercises
- "The hints still gave too much away" → note: ask one more question before giving the hint

## Tone
- Honest but warm
- Specific, never vague
- Forward-looking — always close with what's next
- If they did nothing today, say so gently: "Short session — that happens. Where do you want to pick up next time?"
