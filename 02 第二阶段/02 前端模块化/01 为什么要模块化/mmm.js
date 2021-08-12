// let flag = false;
// 报错：Identifier 'flag' has already been declared
//标识符“flag”已被声明

// let name = "小红";
//报错：Identifier 'name' has already been declared

var f = false;
if (!f) {
  console.log("这里是小明的js")
}

// var flag = false;
// 会报错

// 使用let后，可以避免相互影响，除非这个人直接使用 flag=false