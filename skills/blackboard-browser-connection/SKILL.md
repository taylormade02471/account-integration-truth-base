---
name: blackboard-browser-connection
description: Use when reading current the school LMS Blackboard pages, downloading course materials, reviewing discussion boards, or preparing supervised uploads.
---

# Blackboard Browser Connection

Use the user's existing authenticated browser session for Blackboard work.

## Connection rules

1. Reuse the current Blackboard or the school LMS tab when available.
2. Read the current URL and page before navigating or refreshing.
3. Use safe authentication memory only for routes, visible account choices, approved connector roles, and stop conditions, never for credential material.
4. For the school LMS, use external Chrome and start at `https://school.example.edu/` or a verified Blackboard course URL.
5. If Blackboard shows the login page, click `Sign in with third-party account`, choose `Office365 - Student`, and select `student@example.edu` only when it is visibly shown as already signed in.
6. The user handles passwords, MFA, passkeys, remember-device prompts, identity checks, and unexpected sign in prompts.
7. Treat the current Blackboard prompt, rubric, announcement, and due date as authoritative over older notes.
8. Use exact course and content links after they are verified. Do not rely on duplicate visible labels when a direct link is available.

## Required run preflight

Run this preflight before every manual or scheduled Blackboard stage, including a Monday intake, a discussion-board review, a downloader handoff, and a Sunday course audit.

1. Confirm that a user-controlled external Chrome tab is exposed to the current chat.
2. Confirm that the visible page host is the school LMS or Blackboard and that the page is not an authentication or account-picker screen.
3. Confirm that the page is not being actively used by the user.
4. Confirm the exact course from the live page before using any course-specific draft, tag, or handoff.
5. Record only the course key, page type, visible assignment title, run status, and next action.

Use one of these outcomes:

- `ready`: Continue with read-only intake, audit, downloading, or draft preparation for that course only.
- `needs_tab_attachment`: No browser tab is exposed to this chat. Leave the user's browser alone, write a blocked handoff, and stop the run.
- `needs_user_auth`: Blackboard requires a password, MFA, passkey, remember-device confirmation, or an account choice. Stop and let the user complete it privately.
- `needs_live_verification`: The page, course, target thread, or assignment is unclear. Do not infer the missing details from an old handoff.
- `needs_user_availability`: The browser is in use. Leave the page untouched and stop the run.

Do not retry or refresh in a loop. A scheduled run can resume only after the next scheduled time or after the user exposes a verified tab again.

## Forbidden storage

Do not store, copy, repeat, or write into code: passwords, MFA codes, passkeys, recovery codes, cookies, SAML links, RelayState values, request signatures, session URLs, OAuth tokens, API keys, device identifiers, browser credential-store contents, password-manager vault contents, or cloud-vault secret values.

## Allowed automation

- Read course outlines, unit pages, prompts, rubrics, announcements, feedback, and discussion posts.
- Download or prepare copies of allowed course materials.
- Extract requirements and source provenance.
- Prepare drafts and upload ready files.
- Fill an upload chooser only when the user has asked for upload preparation.
- Run a read-only current-week audit and create separate class handoffs with visible requirements, due dates, completion indicators, and blockers.

## Required stop points

Stop for the user before:

- Signing in or completing MFA.
- Confirming a remember-device prompt.
- Accepting an academic integrity statement.
- Certifying authorship.
- Clicking a final submit, post, or send control.
- Replacing an already submitted attempt.

After any prepared upload, report the course, assignment, filename, visible deadline, and the final action still waiting for user approval.

