---
name: coursework-communications-monitor
description: Use when monitoring Gmail, Outlook/Hotmail, approved iCloud-route mailboxes, or school announcements for course updates, professor messages, changed deadlines, and calendar actions.
---

# Coursework Communications Monitor

Use this skill when reviewing school inboxes, professor announcements, the school LMS updates, Blackboard messages, or calendar changes.

## Daily monitor scope

Look for:

- Messages from Professor Wesche.
- Messages from the school LMS.
- Blackboard announcements.
- Assignment deadline changes.
- Rubric updates.
- Make up work notices.
- Grade feedback.
- Course access or technical issues.

## Required handling

1. Use live-account-connections to verify the exact inbox account and approved mailbox slot in `scripts/email_connections_template.json`.
2. Summarize what changed.
3. Identify the affected course and assignment.
4. Compare the new information against the existing schedule.
5. Update the schedule only when the new deadline or requirement is verified.
6. Create or adjust calendar drafting windows only in the approved coursework calendar account.
7. Ask for confirmation before sending messages, replying to professors, or submitting work.

## Message drafting rules

School emails should be concise, respectful, and specific. Keep placeholders for missing professor names, course sections, student IDs, or attachment names instead of inventing them.

## Automation behavior

When running as a recurring check, stay quiet if nothing meaningful changed. Notify the user only when there is a deadline change, new assignment instruction, grade feedback, required action, or possible conflict.

Do not mark a message read, archive it, move it, label it, or delete it unless that mailbox action was specifically authorized for that exact mailbox slot.

