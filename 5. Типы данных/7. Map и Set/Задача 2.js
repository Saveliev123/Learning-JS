function aclean(arr)
{
  let map = new Map();
  let key;
  for (elem of arr)
  {
    key = elem.toLowerCase().split("").sort().join();
    map.set(key, elem);
    
  }
  return Array.from(map.values());
  
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
