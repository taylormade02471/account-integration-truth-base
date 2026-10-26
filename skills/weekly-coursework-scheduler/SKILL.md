---
name: weekly-coursework-scheduler
description: Use when building or updating the Monday through Sunday coursework automation plan, drafting windows, review gates, and final approval timeline.
---

# Weekly Coursework Scheduler

Use this skill when the user asks to schedule weekly coursework automation, convert deadlines into calendar blocks, or review the Monday through Sunday workflow.

## Recommended schedule

- Monday 8:00 AM: Run the Blackboard preflight for each configured class, then ingest unit materials, verify assignment list, create outlines, and save a separate source inventory for each ready class.
- Tuesday 10:00 AM: Draft discussion post and run first source check.
- Wednesday 5:00 PM: Final check discussion post and prepare submission packet for user approval.
- Thursday 12:00 PM: Review classmate posts and draft two reply options.
- Friday 4:00 PM: Prepare discussion replies for user approval. Friday 6:00 PM: Draft weekly paper or unit assignment.
- Saturday 10:00 AM: Polish paper, compare against rubric and instructor feedback, and prepare final packet.
- Sunday 7:00 PM: Run a read-only audit for each class, write separate CRJ and PSY handoffs, then prepare final submission materials only when the live Blackboard evidence is complete. Archive the week's working files after the user confirms completion.

## Automated run contract

Every scheduled or manual weekly run begins with `blackboard-browser-connection` preflight. The run may not use an older tab identifier, old due date, old course mapping, or remembered discussion title as proof that Blackboard is ready.

For each class, keep these records isolated:

- Live course/page verification.
- Current week, unit, and date range.
- Released assignment list and visible deadlines.
- Requirement and source inventory.
- Draft and review status.
- Blockers and next user action.
- Class-chat destination status.

If a class is not ready, create a blocked handoff only for that class and continue with another class only if its own preflight is `ready`. Do not cross-route drafts, downloaded files, or messages between CRJ and PSY.

The Sunday audit is Level 0 observation. It may report what appears due and prepare a Word or PDF review packet, but it must not submit coursework, post a reply, upload a final file, or send a class-chat message.

## Improvements over blind autopilot

- Add a Monday missing materials alert if Blackboard content is not available.
- Add a Wednesday approval gate before any discussion post is submitted.
- Add a Friday approval gate before replies are posted.
- Add a Sunday approval gate before final paper submission.
- Add a deadline conflict check whenever an inbox message changes a due date.
- Add a source verification check before APA formatting.

## Calendar block rules

- Verify the calendar profile with live-account-connections before any write.
- Do not create blocks until the user has approved that exact account for coursework.
- Drafting windows should include the course name, assignment name, and exact deadline.
- Hard deadline reminders should be earlier than school deadlines.
- Keep a separate final review block before any submission window.
- Do not delete old calendar blocks automatically. Mark superseded items clearly or ask the user before deleting.
- Read back each created or updated block and record its event identifier in the weekly summary.

## Weekly output

Create:

- A task list by day.
- Required source list.
- Draft status.
- Review status.
- User approval status.
- Submission packet status.
- Per-class browser preflight result.
- Per-class audit handoff or a clear blocked status.

