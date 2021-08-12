var name = "小红";
var age = 22;

function sum(num1, num2) {
  return num1 + num2;
};

var flag = true;

if (flag) {
  console.log("hhh.js打印：" +sum(10,10));
}

// 1、导出对象
export {
  // flag:flag,
  // sum:sum
  //不能使用对象写法

  flag,sum
}

//2、导出变量
export let a = '这是hhh.js里面的a';

//3、导出函数/类
export function aaa(num1, num2) {
  return num1 * num2;
}

export class preson {
  run (){
    console.log("这将会是hhh2.js打印：" + "preson is run");
  }
}

//4、export default
// 只能使用一个
//多个报错：Identifier '.default' has already been declared

// export default function () {
//   console.log("this is export default --> function");
// }

// export default "sdafakhfka";

const adress = "this is adress";
export default adress;
