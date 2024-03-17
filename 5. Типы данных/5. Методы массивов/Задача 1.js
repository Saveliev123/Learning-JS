function camelize(str)
{
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] == "-")
    {
      arr.splice(i, 2, arr[i + 1].toUpperCase())
    }
  }
  return alert( arr.join('') );
}

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
