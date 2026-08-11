# GitHub Account Migration Log

**Date:** 2026-08-11
**Scope:** Migration of the `henex` and `Studier` repositories from GitHub account `cafeyee` to `henex-studio`
**Status:** Complete for both repositories. Follow-up items remain open.

---

## 1. Reason for migration

The `cafeyee` account could still sign in but could not install the Vercel GitHub App. The installation URL returned a 404. Testing in a clean browser session confirmed that the same installation succeeded under a newly created account, `henex-studio`. The fault therefore sat with the account, not with the browser or with Vercel.

Because the Vercel App could not be installed, the `cafeyee` account could no longer drive automatic deployments. Migration became necessary rather than optional.

---

## 2. Method chosen

Two options were available. GitHub Transfer Ownership moves a repository with its issues, stars and history intact. Clone and push recreates the repository from a local copy and carries only code and commit history.

Clone and push was selected. The `cafeyee` account was in an uncertain state, and a Transfer that failed part way through could have left a repository stranded between two owners. Clone and push is reversible at every stage because the source repository stays untouched. Neither repository held issues or pull requests, so nothing of value was lost.

The `Studier` repository is private. Rather than adding `henex-studio` as a collaborator, which would create a visible link between the two accounts, GitHub Desktop was signed out of the new account, signed in as `cafeyee` for the clone, then signed back in to `henex-studio`. No online association between the accounts was created.

---

## 3. Steps performed

1. Confirmed the Vercel GitHub App installs successfully under `henex-studio` and fails under `cafeyee`.
2. Created two empty repositories on `henex-studio`: `henex` and `studier`.
3. Audited the local `henex` working copy. Working tree clean, local `main` identical to the recorded remote.
4. Cloned `cafeyee/Studier` to `/Users/cafeyee/Desktop/Work/Studier/code/Studier` using a temporary sign-in as `cafeyee`.
5. Changed the `origin` remote of both repositories to point at `henex-studio`.
6. Created a local `dev` branch in `Studier` from the cached remote reference, before any fetch could prune it.
7. Pushed `Studier` first as a low-risk test, then `henex`.
8. Reconnected the Vercel `henex` project to the new repository through Project Settings, not through Add New Project.
9. Verified the domain, environment variables, production branch, automatic deployment and live site.

---

## 4. Verification record

| Repository | Branch | Commits | Result |
|---|---|---|---|
| henex | main | 126 | Verified |
| henex | ds-convergence | 116 | Verified |
| Studier | main | 102 | Verified |
| Studier | dev | 106 | Verified |

The domain remained attached to the existing Vercel project throughout. Environment variables were screenshotted before the change and confirmed intact afterwards. A test commit triggered an automatic deployment, which completed and served the site correctly, including images loaded from the repository.

---

## 5. Findings recorded during the audit

**No credentials were ever committed.** Neither repository contains a `.env` file in any commit. `Studier` holds only `.env.example`. A keyword scan matched `service_role` in several files, but all matches sit inside the Supabase library source under `node_modules` and are part of that library rather than project secrets.

**The `henex` `.gitignore` contains a syntax error.** The file reads:

```
.DS_Store
**/.DS_Storeassets/img/
```

A missing line break has merged `**/.DS_Store` and `assets/img/` into one invalid rule. As a result `assets/img/` was never ignored and 460 image files entered the repository. The site currently depends on those files being deployed from the repository, so the rule must not be corrected until Cloudflare R2 delivery is in place.

**The `henex` repository is large.** The `.git` directory holds 574 MB and the working folder holds 1.1 GB. The largest contributors are PDF reference documents under `docs/reference/`, where the nine largest files total roughly 165 MB, and the image library under `assets/`.

**`Studier` has no `.gitignore` at all.** The `node_modules` directory is committed, accounting for 4,915 of the 4,950 tracked files. This originated from the web based Add files via upload workflow, visible in the commit messages.

---

## 6. Open items

1. Archive the `cafeyee/henex` and `cafeyee/Studier` repositories once the new setup has run stably for one week. Archive rather than delete, so the rollback path stays available.
2. Reduce the `henex` repository size. Reference PDFs under `docs/reference/` do not need to be deployed and are the cheapest target. This requires rewriting history and should be planned as a separate task.
3. Fix the `henex` `.gitignore` syntax error. This depends on moving image delivery to Cloudflare R2 first.
4. Add a `.gitignore` to `Studier` and remove `node_modules` from tracking. This is an ordinary commit rather than a history rewrite, so the risk is low.
5. Migrate the remaining repositories under `cafeyee`. The procedure in section 3 applies unchanged.
6. Review the `cafeyee` account for other assets, including Gists, SSH keys and Actions secrets.

---

## 7. Rollback position

The source repositories under `cafeyee` remain untouched and complete. If the new setup fails, the Vercel projects can be reconnected to the original repositories through the same Project Settings path, and the domain will follow the project rather than the repository.
