function getWeekDay(date)
{
  switch(date.getDay())
  {
    case 0:
      return 7;
    case 1:
      return 1;
    case 2:
      return 2;
    case 3:
      return 3;
    case 4:
      return 4;
    case 5:
      return 5;
    case 6:
      return 6;
  }  
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getWeekDay(date) );        // нужно вывести 2

let date1 = new Date(2014, 0, 3); // 3 января 2014 года
alert( getWeekDay(date1) ); // 5
