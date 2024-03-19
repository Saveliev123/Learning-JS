function topSalary(salaries)
{
  let maxSum = 0;
  let name = null;
  for (let salary of Object.entries(salaries))
  {
    let [worker, salaries] = salary;
    if (salaries > maxSum)
    {
      maxSum = salaries;
      name = worker;
    }
  }
  return name;
}

let salaries = 
{
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

alert( topSalary(salaries) );
