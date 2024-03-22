//С рекурсией
function printBackwards(list) 
{
  if (list.next) 
  {
    printBackwards(list.next);
  }
  
  alert(list.value);
}

//Без
function printBackwards(list)
{
  let arr = [];
  let current = list;

  while (current) 
  {
    arr.push(current.value);
    current = current.next;
  }

  for (let i = arr.length - 1; i >= 0; i--)
  {
    alert( arr[i] );
  }
}

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

alert( printBackwards(list) );
