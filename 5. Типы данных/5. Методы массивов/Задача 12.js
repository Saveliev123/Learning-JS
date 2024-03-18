//1
function unique(arr)
{
  arr.sort();
  for (let i = 0; i < arr.length; i++)
  {
    if (arr[i] == arr[i + 1])
    {
      arr.splice(i + 1, 1)
      i--;
    }
  }
  return arr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); 

//2
function unique(arr) 
{
  let newArr = [];
  for (word of arr)
  {
    if (!newArr.includes(word))
    {
      newArr.push(word);
    }
  }
  return newArr;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); // кришна, харе, :-O
