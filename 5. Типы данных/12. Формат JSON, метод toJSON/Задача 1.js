let user = 
{
  name: "Василий Иванович",
  age: 35
};

let str = JSON.stringify(user);
alert(str);
let obj = JSON.parse(str);
alert(obj);
