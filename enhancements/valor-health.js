/* VALOR TRAINING SERIES — optional nutrition and supplement helper.
   Does not modify the approved PPLUL workout or visual theme. */
(function (global) {
  "use strict";
  const safeNumber = (value) => typeof value === "number" && Number.isFinite(value) && value >= 0;
  function normalizeFood(food) {
    if (!food || typeof food !== "object") return null;
    const kcal = food.kcal ?? food.calories;
    const protein = food.protein, carbs = food.carbs, fat = food.fat;
    if (![kcal, protein, carbs, fat].every(safeNumber)) return null;
    if (food.basis && food.basis !== "per_100g") return null;
    return { name: String(food.name || food.description || "طعام"), kcal, protein, carbs, fat, basis: "per_100g" };
  }
  function scaleFood(food, grams) {
    const f = normalizeFood(food);
    if (!f || !safeNumber(grams) || grams <= 0) return null;
    const ratio = grams / 100;
    return { name: f.name, grams, kcal: f.kcal * ratio, protein: f.protein * ratio, carbs: f.carbs * ratio, fat: f.fat * ratio };
  }
  function mealTotals(items) {
    if (!Array.isArray(items)) return null;
    const totals = { kcal: 0, protein: 0, carbs: 0, fat: 0 };
    for (const item of items) {
      if (!item || !["kcal","protein","carbs","fat"].every(k => safeNumber(item[k]))) return null;
      for (const key of Object.keys(totals)) totals[key] += item[key];
    }
    return totals;
  }
  const labels = Object.freeze({
    kcal: { ar: "سعرات", unit: "سعرة" },
    protein: { ar: "بروتين", unit: "جم" },
    carbs: { ar: "كارب", unit: "جم" },
    fat: { ar: "دهون", unit: "جم" }
  });
  const supplements = Object.freeze([
    { id:"creatine", nameAr:"كرياتين مونوهيدرات", nameEn:"Creatine Monohydrate", description:"يساعد على تحسين الأداء في التمارين عالية الشدة المتكررة.", generalUse:"3–5 جم يوميًا للبالغين الأصحاء غالبًا؛ راجع المختص عند وجود مرض كلوي أو حمل.", note:"لا يعني شعار Creapure وحده إثبات أصالة عبوة بعينها." },
    { id:"whey", nameAr:"بروتين مصل الحليب", nameEn:"Whey Protein", description:"مصدر بروتين يساعد على إكمال الاحتياج اليومي عند الحاجة.", generalUse:"تختلف الحصة حسب المنتج؛ احسب البروتين من الملصق الغذائي.", note:"يُراعى تحسس الحليب وعدم تحمّل اللاكتوز." },
    { id:"caffeine", nameAr:"الكافيين", nameEn:"Caffeine", description:"قد يحسن اليقظة والأداء لدى بعض البالغين.", generalUse:"راجع الكمية الموجودة في القهوة ومكملات ما قبل التمرين معًا.", note:"قد يؤثر في النوم والنبض؛ لا يُنصح بتحديد جرعة شخصية دون تقييم." },
    { id:"omega3", nameAr:"أوميغا 3", nameEn:"Omega-3", description:"أحماض دهنية تتوفر في الأسماك وبعض المكملات.", generalUse:"راجع مقدار EPA وDHA على العبوة بدل الاعتماد على وزن الكبسولة.", note:"استشر مختصًا عند استخدام مميعات الدم." }
  ]);
  global.VALORHealth = Object.freeze({ normalizeFood, scaleFood, mealTotals, labels, supplements });
})(typeof window !== "undefined" ? window : globalThis);
