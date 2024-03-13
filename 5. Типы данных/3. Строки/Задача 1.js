function ucFirst(str)
{
  let string = str[0].toUpperCase() + str.slice(1);
  return string;
}

alert( ucFirst("вася") == "Вася" );
alert( ucFirst("вася") );
