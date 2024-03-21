function getSecondsToTomorrow()
{
  let date = new Date();
  let nextDay = new Date();
  nextDay.setDate(nextDay.getDate() + 1);
  nextDay.setHours(0, 0, 0, 0)

  return (nextDay - date) / 1000;
}

alert( getSecondsToTomorrow() );
