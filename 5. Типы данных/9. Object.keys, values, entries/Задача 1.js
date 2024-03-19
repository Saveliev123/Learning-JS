function sumSalaries(salaries)
{
  let isEmpty = 1;
  let sum = 0;
  for (item in salaries)
  {
    isEmpty = 0;
    break;
  }
  if (!isEmpty)
  {
    arrSalary = Object.values(salaries);
    for (salary of arrSalary)
    {
      sum += salary;
    }
    return sum;
  }
  else 
  {
    return 0;
  }
}

let salaries = 
{
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( sumSalaries(salaries) ); // 650
