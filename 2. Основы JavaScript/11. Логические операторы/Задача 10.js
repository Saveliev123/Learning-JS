let login = prompt("Ваш логин?");

if (login == "Админ")
{
  let password = prompt("Ваш пароль?");
  if (password == "Я главный")
  {
    alert("Здравствуйте!");
  }
  else if (password == "" || password == null)
  {
    alert("Отменено");
  }
  else
  {
    alert("Неверный пароль");
  }
}
else if (login == "" || login == null)
{
  alert("Отменено");
}
else
{
  alert("Я вас не знаю");
}
