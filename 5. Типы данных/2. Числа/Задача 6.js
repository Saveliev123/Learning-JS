function randomInteger(min, max)
{
  return min + Math.round(Math.random() * (max - min));
}

alert( randomInteger(1, 3) );
