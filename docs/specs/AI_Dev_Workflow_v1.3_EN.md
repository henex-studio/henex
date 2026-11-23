# AI-Assisted Website Development Workflow v1.3

**Document type:** Working agreement for the HENEX website
**Version:** 1.3
**Date:** 2026-11-23
**Replaces:** `AI_Dev_Workflow_v1.2_EN.md`
**Owner:** Cafe Yi

---

## 1. What changed from v1.2

Version 1.2 assumed a local-first workflow. Claude produced files, Cafe copied them into VS Code, committed with GitHub Desktop and uploaded documents to the project knowledge base by hand. Version 1.3 moves the work online. The GitHub repository becomes the single source of truth, Claude edits and pushes branches directly from a cloud session, and Claude maintains the project knowledge base itself.

The Perplexity and Copilot split described in v1.2 is retired. Decisions, specs, code and documentation now happen in one Claude project, with a new conversation per deliverable.

## 2. Sources of truth

There are three places where project content lives. Each has one job.

| Location | Role | Who writes to it |
| --- | --- | --- |
| GitHub `henex-studio/henex`, branch `main` | Single source of truth for code, assets referenced in code, and every project document under `docs/` | Claude through branches and pull requests. Cafe for small copy edits. |
| Claude project knowledge base (RAG) | Read-optimised mirror of the documents read in most sessions | Claude only, always copied from `main` |
| Local clone on Cafe's Mac (`01_website/henex`) | Backup and quick-edit workspace | Cafe, through `git pull` and occasional small commits |

When any two locations disagree, `main` wins. A RAG document is never edited on its own. It is always replaced with the current file from `main`.

Large media stays on Cloudflare R2, as before. Deployment stays on Vercel, which builds `main` for production and every other branch as a preview.

## 3. Standard change flow

Every change that Claude makes follows the same six steps.

1. **Sync.** At the start of a session Claude fetches `main` and reads `docs/HENEX_Project_Execution_Plan.md`, so it starts from the real state, including any edits Cafe pushed from the Mac.
2. **Branch.** Claude creates a short-lived branch named by type and topic, for example `fix/wst-readmore`, `feat/lab-page`, `docs/workflow-v1-3`.
3. **Commit.** Claude commits in small, specific steps with present-tense messages. Specs and decisions are committed to `docs/` in the same branch as the code they describe.
4. **Preview.** Claude pushes the branch. Vercel builds a preview URL automatically and Claude shares it. Nothing on the live site changes at this point.
5. **Review.** Cafe checks the preview in light and dark mode. Claude does not claim a visual fix works until Cafe confirms it on the preview.
6. **Merge.** Claude opens a pull request into `main` and merges it only after Cafe approves in the conversation. Cafe can also merge on GitHub directly. Vercel then deploys production. The branch is deleted after merge.

Two exceptions keep the flow light. Pure documentation changes with no effect on the live site may be merged as soon as they are written, without a preview round. Emergency fixes to a broken live page still go through a branch, but the review can happen on the preview within minutes.

## 4. Local edits by Cafe

Cafe will occasionally fix a sentence in VS Code. Three rules keep this safe.

1. Pull `main` before editing. GitHub Desktop shows "Fetch origin", then "Pull origin".
2. Keep local edits to copy changes on a single page. Anything structural, any CSS and any JavaScript goes through Claude's branch flow.
3. Commit and push immediately after editing, with a message that names the page and the change. Do not leave local work uncommitted overnight, because Claude's next session starts from GitHub, not from the Mac.

If a local edit and a Claude branch touch the same file, Claude rebases the branch onto the new `main` before asking for review.

## 5. Knowledge base (RAG) policy

The knowledge base holds only documents that are read in most sessions. Everything else lives in `docs/` and Claude reads it from the repository when a task needs it.

### 5.1 Hot list

| RAG document | Source in repository |
| --- | --- |
| `HENEX_Project_Execution_Plan.md` | `docs/HENEX_Project_Execution_Plan.md` |
| `UX_Case_Master_Template_Spec_v1.md` | `docs/specs/UX_Case_Master_Template_Spec_v1.md` |
| `HENEX_IA_Content_Workbook_v2.md` | `docs/ia/HENEX_IA_Content_Workbook_v2.md` |
| `2026-06-01_HENEX_Method_Recipe_Card_Copy_and_Mapping_v1.md` | `docs/content/` (same filename) |
| `HENEX_Case_Study_Voice_and_Narrative_Rules.md` | `docs/specs/` (same filename) |
| `HENEX_Framework_Theory_v1.0.md` | `docs/reference/` (same filename) |
| `HENEX_Philosophy_Page_IA_v2.0.md` | `docs/ia/` (same filename) |
| `HENEX_Design_System_v1_3_About_Global_Update.md` | `docs/specs/` (same filename) |
| `henex-audit-rules_v1.0.md` | `docs/specs/audit rules.md` |
| `AI_Dev_Workflow_v1.3_EN.md` | `docs/specs/AI_Dev_Workflow_v1.3_EN.md` |

### 5.2 Sync rules

1. Sync runs one way, from `main` to RAG.
2. When a merged change edits a hot-list document, Claude replaces the RAG copy in the same session. Cafe no longer uploads anything.
3. Claude only syncs after the change is on `main`. A document on an unmerged branch is a draft and stays out of RAG.
4. Adding or removing a hot-list document is a decision Claude proposes and Cafe confirms. Claude then updates the table in 5.1 in the same commit.
5. Superseded documents move to `docs/archive/` in the repository and leave RAG.

## 6. Branch and history hygiene

Finished long-running branches are archived as tags before deletion, so their history stays reachable. The naming pattern is `archive/<branch-name>`. `ds-convergence` and `home-v2` are the first two branches handled this way.

Open branches older than two weeks without activity are listed in the next phase summary so Cafe can decide whether to merge, archive or drop them.

## 7. Session rhythm

**Start.** Claude syncs `main`, reads the Execution Plan's Current Focus, states the task type and model recommendation, and confirms the goal with Cafe.

**During.** Claude works on one branch per deliverable and shares the preview link as soon as a reviewable state exists.

**End.** Claude updates the Execution Plan on the branch, merges once approved, syncs any changed hot-list documents to RAG, and writes a short phase summary in the conversation covering what was completed, what was decided, what comes next and what is unresolved.

## 8. When things go wrong

**A merged change breaks the live site.** Claude reverts the merge commit on a new branch, Cafe confirms the preview, and the revert is merged. The original fix is redone on a fresh branch.

**RAG and the repository disagree.** The repository wins. Claude replaces the RAG copy and notes the drift in the session summary.

**Claude cannot push.** The GitHub App permission for `henex-studio` is missing or expired. Cafe reinstalls or reconnects it, and until then Claude writes files to the local clone for Cafe to commit with GitHub Desktop.

## 9. Glossary

1. **Single source of truth:** the one authoritative copy. Every other copy is updated from it.
2. **Branch:** a separate line of changes that does not touch the live site until it is merged.
3. **Preview deployment:** a temporary Vercel URL built from a branch for review.
4. **Pull request:** a request to merge a branch into `main`, where the change can be reviewed.
5. **Rebase:** moving a branch so it starts from the latest `main`.
6. **RAG:** the project knowledge base that Claude reads at the start of conversations.
7. **Archive tag:** a permanent named pointer to the last commit of a deleted branch.

---

## Appendix A. Replacement text for the Claude project instructions

Replace the "Deployment Environment" section of the project instructions with the text below.

> **Deployment Environment.** Code repository: GitHub `henex-studio/henex` (public). The `main` branch is the single source of truth for code and all project documents under `docs/`. The local clone on Cafe's Mac is a backup and is used only for small copy edits, pulled before and pushed straight after. Claude works from a cloud clone, creates one branch per deliverable, pushes it, shares the Vercel preview, and merges into `main` only after Cafe approves. Deployment: Vercel Hobby, production from `main`, previews from every branch. Large image storage: Cloudflare R2. Workflow reference: `docs/specs/AI_Dev_Workflow_v1.3_EN.md`.

Replace every instruction that asks Claude to remind Cafe to upload or replace a file in RAG with the text below.

> **Knowledge base.** Claude maintains the project knowledge base directly. It mirrors the hot-list documents defined in the workflow document, copied one way from `main` after merge. Claude never asks Cafe to upload documents, and never edits a knowledge-base document without the same change being on `main` first.
