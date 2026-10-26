---
name: decision-router
description: Use when deciding which coursework automation skill should handle an action, whether a check is needed, and whether the user must approve the next step.
---

# Decision Router

Use this skill as the front door for the complete coursework automation system.

## Routing table

- New course materials: use coursework-intake.
- Live Gmail, Drive, Calendar, or Outlook access: use live-account-connections first.
- Current Blackboard pages or upload preparation: use blackboard-browser-connection first.
- Assignment requirements: use assignment-requirement-parser or coursework-intake.
- Writing in user's voice: use truth-base-writing.
- Learned preferences: use preference-learning.
- Weekly timing: use timeline-pattern-learner and weekly-coursework-scheduler.
- Inbox or announcements: use coursework-communications-monitor.
- APA, spelling, or final paper review: use apa-final-check.
- Approval decisions: use user-control-layer.
- Scheduled or manual weekly Blackboard run: use blackboard-browser-connection preflight, then weekly-coursework-scheduler before any class-specific intake or audit.

## Decision sequence

For every action:

1. Identify the task type.
2. Identify the risk level.
3. Identify the source of truth.
4. Verify the connector identity when an external account is involved.
5. Route to the right skill.
6. Run required checks.
7. Decide whether user approval is required.
8. Log the outcome in the weekly summary.

## Weekly Blackboard run sequence

1. Establish the current Monday-through-Sunday school week.
2. Run the Blackboard preflight for one class at a time.
3. If preflight is `ready`, run only the read, organization, draft, or audit stages permitted by the request.
4. If preflight is blocked, write a course-scoped handoff with the exact blocker and stop that class. Do not guess from earlier notes or force a reconnect.
5. Keep CRJ and PSY artifacts, tags, downloads, and class-chat destinations isolated.
6. Before any external send, upload, post, submission, certification, or deletion, apply user-control-layer and obtain immediate action-time approval.

## Automation status vocabulary

Use these exact high-signal states in the weekly summary:

- `ready_for_read_only_run`
- `needs_tab_attachment`
- `needs_user_auth`
- `needs_live_verification`
- `needs_user_availability`
- `ready_for_user_review`
- `waiting_for_action_time_approval`
- `completed_with_live_evidence`

## Authentication memory routing

- Safe to remember: starting URLs, provider names, visible account labels, approved connector roles, preferred tool routing, vault reference names, password-manager product choice, cloud-vault provider choice, connector scopes, account ownership notes, and stop conditions.
- Safe to use automatically: selecting a clearly visible already-signed-in account, approved connector, or approved tool route when the route and role are mapped.
- Safe control-unit actions: create job records, truth-base notes, file maps, connector maps, and non-secret vault references in the shared coordination folder.
- Stop for user: password, MFA, passkey, recovery code, remember-device prompt, account trust prompt, unclear account picker, academic integrity statement, certification, final submit, send, delete, or account setting change.
- Forbidden automation: silent account rotation to bypass service limits, accepting OAuth consent, approving billing, elevating permissions, or replaying secrets.
- Forbidden storage: passwords, MFA codes, passkeys, recovery codes, OAuth tokens, cookies, SAML links, RelayState values, request signatures, session URLs, API keys, device identifiers, browser credential-store contents, password-manager vault contents, and cloud-vault secret values.

Password managers and cloud vaults are allowed only as user-mediated sign-in helpers or secret backends referenced by metadata. Store provider and reference names, never secret values.

## Risk levels

- Low risk: read, summarize, organize, outline.
- Medium risk: draft, revise, cite, schedule.
- High risk: send, submit, delete, certify, change external account state.

High risk actions always require user approval.

