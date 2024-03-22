//С рекурсией
function printList(list)
{
  alert(list.value);

  if (list.next) 
  {
    printList(list.next);
  }
}

//Без
function printList(list) 
{
  let current = list;
  
  while (current) 
  {
    alert(current.value);
    current = current.next;
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

alert( printList(list) );

//Итеративный способ более эффективный, но рекурсивный способ короче
