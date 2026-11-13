---
name: valor-qa-release
description: Use before merging or deploying any VALOR nutrition/supplement enhancement.
---

# iPhone QA and release gate

## Workflow
- Check that index.html, PUSH_01.mp4 through PUSH_06.mp4, exercise order, and approved theme are unchanged.
- Test on iPhone Safari viewport: text visibility, tap targets, RTL labels, safe-area spacing, no cropped headings.
- Test API /health, USDA search, barcode lookup, missing fields, network errors, and totals.
- Verify no keys or private data appear in HTML, JS, commits, or logs.
- Make changes on a feature branch and draft PR; do not merge or publish without explicit approval.
- Report exact test results, limitations, and deployment status. Never describe untested functionality as working.

## Completion
Provide changed file paths, tests performed, remaining issues, and confirmation that the approved workout was not modified.
