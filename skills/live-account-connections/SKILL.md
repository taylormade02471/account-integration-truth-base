---
name: live-account-connections
description: Use when coursework work needs connected Gmail, Hotmail/Outlook, iCloud-route, Google Drive, Google Calendar, Outlook Email, or Outlook Calendar data or actions.
---

# Live Account Connections

Use this skill before reading or changing a connected school storage, email, or calendar service.

## Identity check

1. Call the selected connector's profile action before other actions.
2. Compare the exact returned account with the user approved role in `scripts/connection_roles_template.json`.
3. Do not assume Gmail, Google Drive, and Google Calendar use the same Google account.
4. Do not assume Outlook Email and Outlook Calendar are the user's school account merely because they share a Microsoft login.
5. For email work, also compare the exact account against `scripts/email_connections_template.json`; Hotmail, Outlook.com, Live.com, MSN, and Microsoft 365 mailboxes use the Outlook Email connector.
6. Treat iCloud Mail as a requested mailbox provider until a supported connector or user-approved forwarding/export route is available.
7. If the role is unapproved or the account changed, stop before writes and report the exact mismatch.
8. Use safe authentication memory to choose a visible already-signed-in account, provider route, approved connector, or approved tool route. Stop before passwords, MFA, passkeys, remember-device prompts, OAuth consent, billing, permission escalation, or unclear account choices.

## Service roles

- Storage account: assignment folders, source files, drafts, review copies, and approved final copies.
- Announcement inbox: professor messages, the school LMS messages, Blackboard notices, feedback, and deadline changes.
- Coursework calendar: drafting blocks, review windows, safety reminders, and verified deadlines.
- Mailbox registry: up to 30 individually approved email accounts, each with its own provider, connector, role labels, and write permissions.
- Control-unit registry: approved tool routes, account routes, file roots, connector scopes, and non-secret vault references used to dispatch work to Codex, Gemini, Google, Microsoft, or other approved agents.

One account may hold multiple roles only after the user confirms it. Keep personal, business, and school roles separate by default.

## Action rules

- Read, search, and summarize are low risk after the workflow is authorized.
- Create folders, upload files, and create calendar blocks are allowed only in an approved role account and must be verified by readback.
- Prepare email drafts without sending them.
- Sending mail, deleting or moving source records, changing account settings, and final coursework submission require immediate user approval.
- Never store passwords, MFA codes, passkeys, access tokens, refresh tokens, cookies, session URLs, SAML links, RelayState values, request signatures, recovery codes, device identifiers, browser credential-store contents, password-manager vault contents, or cloud-vault secret values in plugin files, shared coordination folders, or coursework storage.
- Password managers and cloud vaults may be referenced by metadata only. Use official connector, OAuth, OS credential, password-manager, or vault UI flows for secret handling.

## Verification output

For every live run, record:

- Connector used.
- Account identity verified.
- Role used.
- Read or write action performed.
- Readback result for writes.
- Approval state.
- Any mismatch or missing access.

