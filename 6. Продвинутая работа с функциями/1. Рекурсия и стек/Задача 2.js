function factorial(n)
{
  return (n == 1) ? n : factorial(n) * factorial(n - 1);
}

alert( factorial(5) );
