// 1、导入
import { flag, sum } from "./hhh.js";
if (flag) {
  console.log("hhh2.js打印：" + "这里还是小红的js");
}
console.log("hhh2.js打印hhh.js的sum：" +sum(50, 50));

import { a } from "./hhh.js";
console.log("hhh2.js打印hhh.js的a：" + a);

import { aaa, preson } from "./hhh.js";
console.log("hhh2.js打印hhh.js的aaa:" + aaa(100, 10));
const p = new preson();
p.run();

//2、导入export default
import bbb from "./hhh.js";
// 对应的函数
// bbb();
//对应的变量
console.log(bbb);

//3、导入import * as
import * as all from "./hhh.js";
console.log(all);
console.log(all.default);

