;
// 这样的处理，还是要注意模块不能重名
const moduleA = (function () {
  let obj = {};
  
  const name = "小红";
  let age = 22;

  function aaa() {
    console.log("这里是小红的js");
  };

  let flag = true;

  if (flag) {
    aaa();
  };

  obj.flag = flag;
  obj.aaa = aaa;

  return obj;
})();