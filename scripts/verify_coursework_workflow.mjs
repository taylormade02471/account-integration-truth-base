import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptsDir = dirname(fileURLToPath(import.meta.url));
const root = dirname(scriptsDir);

async function readJson(relativePath) {
  return JSON.parse(await readFile(join(root, relativePath), "utf8"));
}

async function readText(relativePath) {
  return readFile(join(root, relativePath), "utf8");
}

const [schedule, policy, contract, browserSkill, schedulerSkill, routerSkill] = await Promise.all([
  readJson("scripts/weekly_schedule_template.json"),
  readJson("scripts/automation_policy.json"),
  readJson("scripts/coursework_run_contract_template.json"),
  readText("skills/blackboard-browser-connection/SKILL.md"),
  readText("skills/weekly-coursework-scheduler/SKILL.md"),
  readText("skills/decision-router/SKILL.md")
]);

assert.equal(schedule.weekBoundary.startsOn, "Monday");
assert.equal(schedule.weekBoundary.endsOn, "Sunday");
assert.equal(schedule.runContract.requiredBeforeEachBlackboardStage, true);
assert.equal(schedule.runContract.noBlindRetries, true);

const monday = schedule.weeklyWorkflow.find((item) => item.day === "Monday");
const sunday = schedule.weeklyWorkflow.find((item) => item.day === "Sunday");
assert.ok(monday, "Monday workflow is required");
assert.ok(sunday, "Sunday workflow is required");
assert.ok(monday.actions.some((action) => action.includes("Blackboard connection preflight")));
assert.ok(sunday.actions.some((action) => action.includes("read-only course audit")));

const preflight = policy.connectionRules.blackboardRunPreflight;
assert.equal(preflight.requiredBeforeEachManualOrScheduledRun, true);
assert.equal(preflight.noBlindRetries, true);
assert.equal(preflight.maximumAutomaticReconnectAttempts, 0);
assert.equal(policy.connectionRules.weeklyReadOnlyAudit.enabled, true);
assert.equal(policy.connectionRules.classIsolation.required, true);

assert.deepEqual(contract.weekBoundary, { startsOn: "Monday", endsOn: "Sunday" });
assert.deepEqual(contract.courses.map((course) => course.courseKey), ["CRJ", "PSY"]);
assert.equal(contract.classIsolation.neverMixArtifacts, true);
assert.equal(contract.externalActionBoundary.requiresImmediateApproval, true);
assert.ok(contract.preflight.blockedStatuses.includes("needs_tab_attachment"));

assert.match(browserSkill, /## Required run preflight/);
assert.match(browserSkill, /Do not retry or refresh in a loop/);
assert.match(schedulerSkill, /## Automated run contract/);
assert.match(routerSkill, /## Weekly Blackboard run sequence/);

console.log("coursework workflow contract: PASS");

