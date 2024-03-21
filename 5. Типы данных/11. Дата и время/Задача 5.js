function getLastDayOfMonth(year, month)
{
  let date = new Date(year, month, 27);
  let lastDay;
  while (date.getMonth() == month)
  {
    lastDay = date.getDate();
    date.setDate(date.getDate() + 1);
  }
  return lastDay;
}

alert( getLastDayOfMonth(2012, 1) ); // 29.
