---
name: valor-nutrition
description: Use when implementing VALOR food search, food quantities, meal totals, or nutrition labels.
---

# Nutrition and food tracking

## Workflow
- Preserve the approved workout index.html and videos.
- Use existing USDA API and Open Food Facts as sources; never expose USDA credentials.
- Require verified per-100g calories, protein, carbohydrates, and fat before calculations. Missing is not zero.
- Scale by grams/100; sum only complete items. Round for display, not internal totals.
- Display Arabic labels السعرات، البروتين، الكارب، الدهون and explicit units.
- Distinguish cooked from uncooked foods and serving-based from 100g values.
- Test 100g cooked rice example 130 kcal, 2.7g protein, 28.2g carbs, 0.3g fat, plus missing-nutrient rejection.

## Completion
Provide changed file paths, tests performed, remaining issues, and confirmation that the approved workout was not modified.
