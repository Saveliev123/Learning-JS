//Итеративно
function sumTo(n)
{
  let sum = 0;
  for(let i = 0; i < n; i++)
  {
    sum += i;
  }
  return sum;
}

//Рекурсивно
function sumTo(n)
{
  let sum = 1;
  if(n == 1)
  {
    return sum;
  }
  else
  {
    sum = n + sumTo(n - 1);
    return sum;
  }    
}

// Aормула арифметической прогрессии
function sumTo(n)
{
  let d = 1;
  let an = 1 + (n - 1) * d;
  return ((1 + an) / 2) * n;
}

alert( sumTo(1) );
alert( sumTo(2) );
alert( sumTo(5) );
alert( sumTo(100) );

//Самый быстрый с использованием формулы тк тут для любого n тут вычисляется всего 2 переменные, 
//итеративный второй тк он изменяет только переменные sum и i n раз, 
//самый медленный рекурсивный тк придётся хранить все данные стека вызовов

//sumTo(100000) не сможет посчитать результат (переполнится стек вызовов)
