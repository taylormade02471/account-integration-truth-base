---
name: user-control-layer
description: Use when deciding what the coursework system may automate, what must be approved by the user, and how to keep the user in control.
---

# User Control Layer

Use this skill whenever Codex is deciding whether to act automatically, ask for approval, or pause for the user.

## Core rule

The system should learn the user's ways and reduce repeated work, but the user stays in control of final academic, account, communication, and submission decisions.

Safe account memory may reduce repeated login-routing instructions and let the plugin act as a control-unit router, but it cannot store or replay secrets. Store only approved routes, account labels, connector roles, tool routing, vault reference names, password-manager product choice, cloud-vault provider choice, connector scopes, account ownership notes, and stop conditions.

The router may automatically choose an approved route, connector, or tool when the user already mapped the role and the action is within Levels 0 through 4. It must stop for the user before passwords, MFA, passkeys, recovery codes, OAuth consent, billing, permission escalation, final submit, send, delete, certification, unclear account choices, or account setting changes.

Never store passwords, MFA codes, passkeys, recovery codes, OAuth tokens, cookies, SAML links, RelayState values, request signatures, session URLs, device identifiers, browser credential-store contents, password-manager vault contents, or cloud-vault secret values.

## Automation levels

- Level 0 observe: read, summarize, and report.
- Level 1 organize: create folders, rename drafts, build checklists, and sort materials.
- Level 2 draft: create outlines, discussion posts, replies, emails, and papers.
- Level 3 revise: apply known user rules, grammar checks, APA checks, and rubric fixes.
- Level 4 prepare: prepare upload packets, calendar changes, and message drafts.
- Level 5 act externally: submit, send, delete, certify, or change account state.

Levels 0 through 4 may be automated when the user has already authorized the workflow and connectors are available. Level 5 always requires explicit user approval immediately before the action.

## Approval triggers

Ask before:

- Submitting coursework.
- Sending an email or message.
- Certifying authorship.
- Accepting OAuth consent, billing, or permission escalation.
- Confirming a remember-device prompt or any new sign-in trust prompt.
- Changing a deadline or deleting a calendar item.
- Deleting source files or prior drafts.
- Using a personal fact that is not already verified.
- Making a claim that lacks course or outside source support.
- Choosing between conflicting instructions.

## Decision output

When the system pauses, explain:

- What is ready.
- What decision is needed.
- Why approval is required.
- The safest recommended choice.

