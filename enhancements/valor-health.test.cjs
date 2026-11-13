// Run with: node --test enhancements/valor-health.test.cjs
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const vm = require("node:vm");
const source = fs.readFileSync(require("node:path").join(__dirname,"valor-health.js"),"utf8");
const sandbox = {};
vm.runInNewContext(source,sandbox);
const v = sandbox.VALORHealth;
test("scales 100g cooked rice",()=>{
 const x=v.scaleFood({name:"rice",kcal:130,protein:2.7,carbs:28.2,fat:0.3,basis:"per_100g"},100);
 assert.equal(x.kcal,130);assert.equal(x.protein,2.7);
});
test("scales 250g",()=>assert.equal(v.scaleFood({kcal:130,protein:2.7,carbs:28.2,fat:0.3},250).kcal,325));
test("rejects missing protein",()=>assert.equal(v.scaleFood({kcal:130,protein:null,carbs:28.2,fat:0.3},100),null));
test("rejects unverified basis",()=>assert.equal(v.scaleFood({kcal:130,protein:2.7,carbs:28.2,fat:0.3,basis:"unverified"},100),null));
test("rejects invalid grams",()=>assert.equal(v.scaleFood({kcal:130,protein:2.7,carbs:28.2,fat:0.3},-1),null));
test("totals complete items",()=>assert.equal(v.mealTotals([{kcal:130,protein:2.7,carbs:28.2,fat:0.3}]).kcal,130));
test("rejects incomplete totals",()=>assert.equal(v.mealTotals([{kcal:130,protein:null,carbs:28.2,fat:0.3}]),null));
test("Arabic calorie label",()=>assert.equal(v.labels.kcal.ar,"سعرات"));
