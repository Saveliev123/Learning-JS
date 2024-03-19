function count(user)
{
  return Object.values(user).length;
}

let user = 
{
  name: 'John',
  age: 30
};

alert( count(user) ); // 2

/*function count(user)
{
  let sum = 0;
  for (let value of Object.values(user)) 
  {
    sum++;
  }
  return sum;
}*/

let user = 
{
  name: 'John',
  age: 30
};

alert( count(user) ); // 2
