# Account Integration Truth Base

Account Integration Truth Base is a supervised Codex plugin for coursework intake, grounded source notes, APA review, deadline planning, and account-safe workflow routing.

## What it automates

- Monday through Sunday coursework intake, drafting, review, and handoff stages.
- Class-scoped source inventories and requirement checklists.
- Blackboard connection preflight before a manual or scheduled run.
- Read-only audits of released course items, due dates, rubrics, and completion indicators.
- Truth-base writing and APA review checks.
- Approved connector-role routing for Gmail, Google Drive, Google Calendar, Outlook Email, and Outlook Calendar.
- Blocked handoffs when a browser tab, authentication state, exact course, or destination is uncertain.

## Safety boundary

The plugin stores routes, visible account labels, connector roles, tool preferences, vault reference names, and stop conditions. It does not store or replay passwords, MFA codes, passkeys, recovery codes, OAuth tokens, cookies, SAML links, session URLs, API keys, or vault secret values.

External actions remain approval-gated. The plugin may organize, draft, revise, and prepare a packet. It stops before authentication prompts, OAuth consent, billing, permission escalation, final submission, sending, deletion, certification, or account-setting changes.

## Verification

Run:

```powershell
node scripts/verify_coursework_workflow.mjs
```

The verification script checks the required Monday and Sunday schedule, class isolation, Blackboard preflight, blocked outcomes, no-blind-retry rule, and external-action approval boundary.

## Public-release note

This repository is a privacy-reviewed public release. Personal coursework handoffs, session identifiers, account credentials, authentication links, and local connection history are intentionally excluded. Replace the example account labels and URLs only in a private, user-controlled configuration when a real connector role is approved.

## License

Copyright (c) Kyle Taylor. All rights reserved for this personal proof-of-work release.

