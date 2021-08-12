let name = "小红";
var age = 22;

function sum(num1, num2) {
  return num1 + num2;
};

var flag = true;

if (flag) {
  console.log(sum(10,10));
}

export {
  // flag:flag,
  // sum:sum
  //不能使用对象写法

  flag,sum
}