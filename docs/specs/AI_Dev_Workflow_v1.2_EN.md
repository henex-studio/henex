# AI-Assisted Website Development Workflow v1.2

**Document type:** Reusable workflow reference  
**Applies to:** Static website projects, AI-assisted development  
**Last updated:** 2026-06-06 (added AI Configuration Reference)

---

## 1. Core Principle

Keep decision-making and code execution in separate conversations. Never mix design thinking, content drafting, and code generation in the same AI conversation. This single rule prevents most context collapse and rework.

---

## 2. Tool Roles

| Tool | Primary role | Do not use it for |
|---|---|---|
| Perplexity Space | Design decisions, content strategy, workflow planning, Spec drafting, RAG management | Repeated large code generation |
| Copilot (GPT-5.5 Thinking) | Code generation, bug fixing, implementation from Spec | Design exploration, open-ended discussion |
| VS Code | File editing, local preview, reviewing generated code | Writing content or making design decisions |
| GitHub Desktop | Committing and pushing to repository | Anything else |
| Vercel | Deployment and live preview | Anything else |
| Figma / Figma Make | Visual design, layout exploration, asset export | Code generation |

---

## 3. Knowledge Base Structure (RAG)

Keep exactly three categories. Remove everything else.

### Category A. Project Master File (one file per project)

One file. Single source of truth. Updated at the end of every session that produces confirmed decisions. When updated, replace the old file entirely.

Naming: `[ProjectName]_Master_[YYYY-MM-DD].md`

Contents:
1. Project identity and brand
2. Confirmed design system
3. Site architecture and page inventory
4. Technology stack and deployment setup
5. Current progress status (done, in progress, next)
6. Key decisions log (one line per decision, with date)

### Category B. Specialist Reference Files

One file per topic. Replace old version when a new one is confirmed. Increment version number.

Naming: `[ProjectName]_[Topic]_v[N].md`

Examples: `HENEX_DesignSystem_v1.md`, `HENEX_UXCaseStudyTemplate_Spec_v1.md`

### Category C. Build Logs

Append only. Never read back into active AI context. Before uploading a Build Log to RAG, extract any confirmed decisions into the Master File first. If all decisions are already in the Master File, discard the log from RAG entirely.

---

## 4. Conversation Lifecycle

### When to start a new conversation

Start a new conversation when any of these are true:

1. Switching from design decisions to code generation, or the reverse.
2. One complete deliverable (a page, a component, a Spec) is done and committed.
3. The current conversation has run for more than two to three hours of active work.
4. Starting a new day of work.
5. The AI shows context degradation: forgetting earlier rules, contradicting confirmed decisions, or producing inconsistent output.

Do not wait until the tool breaks. End proactively.

### When to end a conversation

End when:

1. The deliverable is complete and committed to GitHub.
2. The Master File is updated with new confirmed decisions.
3. The next task is written down so the next handoff is easy to prepare.

---

## 5. Conversation Handoff Prompts

### 5.1 Perplexity Space: Start of Decision Session

Use this when opening a new Perplexity conversation for design decisions, strategy, or Spec work.

```
## Session start

Project: [project name]
Master file: [filename] — attached
Specialist file: [filename if relevant] — attached

Today's goal: [one sentence]
Deliverable expected: [specific document or decision output]

Context you need to know:
- Last completed: [what was finished last session]
- Current status: [what is in progress]
- Key constraint: [anything the AI must not change or override]

Please confirm you have read the attached files before we begin.
```

### 5.2 Copilot: Start of Code Generation Session

Use this when opening a new Copilot conversation for HTML, CSS, or JS work.

```
## Code generation task

Project: [project name]
Page or component: [name]
Spec file: attached as [filename]
Design system file: attached as [filename]

Your task this session: [one sentence, e.g. "Generate the hero and meta sections for the ASH case study page following the attached Spec."]

Rules:
- Follow the Spec exactly. Do not add sections not listed in the Spec.
- Do not modify global.css, main.js, or the site header and footer structure.
- Do not rewrite content. Use the variable content provided in the Spec.
- Output: [filename] and [filename], complete files only.

Confirmed files you must not change: [list filenames]
```

### 5.3 Copilot: Continuing a Bug Fix or Revision

Use this when reopening a conversation specifically to fix a problem.

```
## Bug fix task

Project: [project name]
Page: [filename]
Problem: [one sentence description of what is broken or wrong]
Expected behaviour: [one sentence of what it should do]

Do not change anything outside the problem area.
Do not regenerate the full file unless I ask.
Confirm the fix before applying it.

Attached for reference: [Master File or Spec if needed]
```

### 5.4 Copilot: End of Session Handoff Summary

Use this at the end of every Copilot conversation to generate a handoff package before closing the conversation. Paste the output into your Master File or save it as a Build Log.

```
## End of session — please generate a handoff summary

Summarise what we did in this conversation in the following format:

### Session summary
Date: [today's date]
Page or component worked on: [name]
Files modified: [list all files changed]

### Confirmed decisions
[List every design or code decision that was confirmed during this session. One line each.]

### What was completed
[List the deliverables that are done and ready to commit.]

### What is still in progress or unresolved
[List anything that was started but not finished, or any open questions.]

### Known issues or risks
[List any bugs found, edge cases not handled, or things to watch out for next session.]

### Next session task
[One sentence: what should be done in the next working session.]
```

### 5.5 Perplexity: End of Session Master File Update

Use this in Perplexity at the end of every session to update the Master File.

```
## Session wrap-up

We have finished today's work. Please help me update the Master File.

Confirmed decisions made today:
[list them, or paste the Copilot handoff summary from prompt 5.4]

Current progress status:
- Done: [what was completed today]
- In progress: [what is partially done]
- Next: [what the next session will tackle]

Generate the updated Master File section only. I will copy it into the existing Master File and replace the old section.
```

---

## 6. Session Rhythm

**At the start of every session (5 minutes):**  
Open the Master File. Read current progress status and next task. Write the handoff prompt before opening any AI conversation.

**During the session:**  
Perplexity for decisions. Copilot for code. Commit to GitHub after each complete page or component, not at the end of the day.

**At the end of every session (10 minutes):**  
Run prompt 5.4 in Copilot to generate the handoff summary. Then run prompt 5.5 in Perplexity to update the Master File. Replace old version in RAG. Close all AI conversations.

---

## 7. Spec Document Template

Every code generation task requires a Spec before opening Copilot.

```markdown
## Project: [name]
## Page or component: [name]
## Date: [YYYY-MM-DD]

### Visual rules
[Mood, colour, typography rules specific to this page]

### Layout rules
[Grid, max-width, breakpoints, spacing]

### Component rules
[Reusable components this page uses, with class names]

### Variable content
[All content that changes: title, body copy, image paths, tags, links]

### This session task
[One sentence: exactly what Copilot should produce]

### Do not change
[List of confirmed sections or files Copilot must not touch]
```

Keep Specs under 200 lines. If longer, split the task.

---

## 8. File and Commit Hygiene

**File naming:** Lowercase, hyphens for spaces, no special characters.

**Commit messages:** Present tense, specific. Example: `Add ASH case study hero and meta section`. Not: `update`.

**Commit timing:** After each complete, working deliverable. Not accumulated across days.

**RAG hygiene after every session:** Does the Master File need updating? Does any Specialist Reference File need a new version? Are there Build Logs in RAG whose decisions are already in the Master File? Remove them.

---

## 9. When Things Go Wrong

**Copilot overrides confirmed styles or ignores the Spec:** End the conversation. Open a new one with a tighter Spec and an explicit "Do not change" list.

**RAG feels cluttered:** Go to the Master File first. If the answer is not there, the Master File needs updating before you continue.

**You lose track of progress:** Read only the current progress status section of the Master File.

**A page breaks after a Copilot session:** Check Git history. Revert to the last clean commit. Write a tighter Spec before trying again.

---

## 10. RAG Audit Checklist

Run at the start of each new project phase, or when RAG feels cluttered.

1. Is there exactly one Master File, dated within the last few days?
2. Does each Specialist Reference File have a version number, old version removed?
3. Are there Build Logs in RAG whose decisions are already in the Master File? Remove them.
4. Are there duplicate files serving the same purpose? Keep the latest, remove the rest.
5. Can you answer "what is the current project status" using only the Master File? If not, update it first.

---

## Glossary

- **RAG:** Files uploaded into an AI Space so the AI can reference them during conversations.
- **Master File:** Single source of truth for a project. Updated regularly, replaces its previous version.
- **Spec document:** Concise task brief prepared before each code generation session.
- **Context collapse:** When an AI conversation becomes too long and the model forgets earlier instructions.
- **Handoff prompt:** Structured first message in a new AI conversation that restores project context efficiently.
- **Handoff summary:** Structured output generated by Copilot at the end of a session, summarising what was done and what comes next.
- **Vibe Coding:** Non-programmer development approach using AI to generate and iterate code.


---

## 11. AI Configuration Reference

This section records the current System Prompts and role configurations for each tool. Use it as a backup and migration reference. AI role rules do not need a separate folder. Record them here only.

### 11.1 Perplexity Space — System Prompt

Current Space name: Henex

The active configuration is set in the Space Settings Instructions field. After any change, update the record below.

```
[Paste your current Perplexity Space System Prompt here]
```

### 11.2 Copilot — Agent Configuration

Current Agent name: [record your Agent name]

Copilot Agent custom instructions:

```
[Paste your current Copilot Agent Instructions here]
```

Note: Copilot Agent cannot explicitly call GPT-5.5 Thinking. Select that model manually in individual conversations.

### 11.3 Configuration Update Rule

1. Every time you change the Space System Prompt or Copilot Agent Instructions, update this section.
2. This section is the only place where AI configuration is recorded. Do not create separate config files.
3. Increment this document's version number after each configuration update.
