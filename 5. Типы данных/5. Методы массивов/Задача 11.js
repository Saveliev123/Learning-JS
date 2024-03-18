function getAverageAge(users)
{
  let ages = users.map(item => item = item.age);
  let avgSum = 0;
  for (yearsOld of ages)
  {
    avgSum += yearsOld;
  }
  return avgSum / ages.length;
}

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
