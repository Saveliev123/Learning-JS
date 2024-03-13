function truncate(str, maxlength)
{
  if (str.length <= maxlength)
  {
    return str;
  }
  return str.slice(0, maxlength - 1) + "…";
}


alert( truncate("Всем привет!", 20) );
alert( truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) );
