function extractCurrencyValue(str)
{
  str = str.slice(1);
  return +str;
}

alert( extractCurrencyValue('$120') === 120 ); // true
