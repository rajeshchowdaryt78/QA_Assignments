# QA_Assignments

Automation framework using Playwright + TypeScript.

## Installation
* Download the node.js and VS Code Editor
* npm init playwright@latest
* TypeScript or JavaScript (default: TypeScript)
* Tests folder name (default: tests, or e2e if tests already exists)
* Add a GitHub Actions workflow (recommended for CI)
* Install Playwright browsers (default: yes)

## Run Tests
*npx playwright test .filename.spec.ts

## Tips to Run
* See the browser window: add --headed.
* Run a single project/browser: --project=chromium.
* Run one file: npx playwright test tests/example.spec.ts.


## Run UI Mode
*npx playwright test --ui

## View Report
*npx playwright show-report
