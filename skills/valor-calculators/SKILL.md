---
name: valor-calculators
description: Use when implementing VALOR calorie targets, protein targets, body metrics, and progress tracking.
---

# Nutrition and progress calculators

## Workflow
- Obtain age, sex, height, weight, activity, and goal when required; do not invent inputs.
- Label calculated TDEE as an estimate, not a measurement.
- For fat-loss planning, distinguish maintenance from deficit; show the arithmetic and avoid silently applying a surplus.
- Clarify units kg/cm/kcal/g and date; use explicit validation and realistic input bounds.
- Do not save personal health measurements to public GitHub repositories or third-party APIs.
- Keep calculations optional and separate from the approved five-day workout schedule.

## Completion
Provide changed file paths, tests performed, remaining issues, and confirmation that the approved workout was not modified.
