function sumInput()
{
  let arr = [];
  let i = 0;
  let sum = 0;
  while (true)
  {
    arr[i] = prompt("Введите число в массив");
    if (arr[i] === null || arr[i] == "" || !isFinite(+arr[i]))
    {
      alert(sum);
      break;
    }
    sum += +arr[i];
    i++;
  }
}

sumInput();
