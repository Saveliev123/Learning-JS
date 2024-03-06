// до вызова функции
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};
alert(menu);
multiplyNumeric(menu);
alert(menu);
// после вызова функции
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj)
{
  for (let key in obj)
  {
    if (obj[key] === Number(obj[key]))
    {
      obj[key] *= 2;
    }
  }
}

// Вариант после прочтения P.S. :)
function multiplyNumeric(obj)
{
  for (let key in obj)
  {
    if (typeof obj[key] == "number")
    {
      obj[key] *= 2;
    }
  }
}
