# Proof of Work

## Title

Account Integration Truth Base: Safe Coursework and Account Automation Router

## Description

I built a supervised Codex plugin that coordinates coursework and account workflows while keeping the user in control of authentication and final external actions. It maintains a grounded truth base, separates classes and account roles, runs a Monday through Sunday coursework schedule, performs LMS connection preflight checks, builds source inventories and requirement checklists, prepares review handoffs, and applies APA and rubric checks before a user reviews work.

The release contains 12 focused skills and 7 workflow/configuration files. It supports approved Gmail, Google Drive, Google Calendar, Outlook Email, and Outlook Calendar connector roles, plus a supervised browser route for an LMS. The router can select an approved tool or account role, but it stops for passwords, MFA, passkeys, OAuth consent, unclear account selection, final submission, sending, deletion, certification, or account-setting changes.

## Category

Other AI / Automation

## Subcategory

Workflow Automation

## Skills demonstrated

- AI Agents & Assistants
- Workflow Automation
- AI Integration & APIs

## Repository

https://github.com/taylormade02471/account-integration-truth-base

## Demo video

A real 30 to 90 second continuous screen recording should show a class workflow being selected, a connection preflight, a class-scoped handoff, and a blocked result when authentication is required. A video is not claimed until that run is recorded and uploaded.

## Outcome / ROI

The plugin turns a recurring multi-step coursework routine into a repeatable review pipeline: intake, source inventory, requirement checklist, draft/review status, weekly schedule, class-scoped handoff, and final approval gate. It reduces repeated routing decisions and prevents cross-class mixing while preserving user control over authentication and submission.

## Verification

Run `node scripts/verify_coursework_workflow.mjs`. The verifier checks the Monday and Sunday schedule, class isolation, LMS preflight, blocked outcomes, no-blind-retry rule, and external-action approval boundary. The current verified result is `coursework workflow contract: PASS`.

## Limits

This proof demonstrates workflow orchestration, routing, validation, and safety controls. It does not claim silent login, credential storage, automatic MFA completion, automatic academic submission, unsupported provider APIs, or a measured labor-savings percentage that has not been independently recorded.
