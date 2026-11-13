# VALOR — إضافة التغذية والمكملات (نسخة مراجعة)

هذه إضافة اختيارية مستقلة عن `index.html`، ولا تغيّر التصميم المعتمد أو جدول PPLUL أو فيديوهاته.

## الملفات
- `valor-health.js`: دوال تحقق وحساب غذائي، تسميات عربية، وبيانات تعليمية أولية للمكملات.

## الربط بعد الاعتماد
أضف `<script src="./valor-health.js"></script>` قبل نهاية `</body>` في واجهة يتم اختبارها، ثم استخدم `window.VALORHealth`.
لا يتم دمج الإضافة في `index.html` الرئيسي قبل مراجعة توافقها مع البنية الحالية.

## قواعد البيانات
- بيانات USDA FoodData Central وOpen Food Facts يجب جلبها من واجهة الخدمة الموجودة، مع التحقق من القيم لكل 100 جم.
- لا تخمّن القيم الغذائية الناقصة ولا تحسبها على أنها صفر.
- الباركود لا يضمن أصالة المكمل؛ لا تضع ادعاءات علاجية أو توصيات جرعات شخصية.

## اختبار سريع من Console
```js
const v = window.VALORHealth;
console.assert(v.scaleFood({name:"rice",kcal:130,protein:2.7,carbs:28.2,fat:0.3,basis:"per_100g"},100).kcal===130);
console.assert(v.scaleFood({name:"unknown",kcal:130,protein:null,carbs:28,fat:0},100)===null);
console.assert(v.mealTotals([{kcal:130,protein:2.7,carbs:28.2,fat:0.3}]).kcal===130);
console.assert(v.labels.kcal.ar==="سعرات");
```

**الحالة:** نسخة مراجعة فقط؛ لم تُدمج ولم تُنشر في الموقع.
