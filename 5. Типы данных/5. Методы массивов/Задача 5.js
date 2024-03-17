function copySorted(arr)
{
  let newArr = arr.slice();
  newArr.sort( (a, b) => a.localeCompare(b) )
  return newArr;
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
