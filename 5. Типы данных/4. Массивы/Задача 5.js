//O(n^2)
function getMaxSubSum(arr)
{
  let sum = 0;
  for (let i = 0; i < arr.length; i++)
  {
    subSum = 0;
    for (let j = i; j < arr.length; j++)
    {
      subSum += arr[j]
      if (subSum > sum)
      {
        sum = subSum;
      }
    }
  }
  return alert(sum);
}

//O(n)
function getMaxSubSum(arr)
{
  let sum = 0;
  let subSum = 0;
  for (let elem of arr)
  {
    subSum += elem;
    if (subSum < 0)
    {
        subSum = 0;
    }
    if (subSum > sum)
    {
        sum = subSum;
    }
  }
  return alert(sum);
}

getMaxSubSum([-1, 2, 3, -9]);
getMaxSubSum([2, -1, 2, 3, -9]);
getMaxSubSum([-1, 2, 3, -9, 11]);
getMaxSubSum([-2, -1, 1, 2]);
getMaxSubSum([100, -9, 2, -3, 5]);
getMaxSubSum([1, 2, 3]);

getMaxSubSum([-1, -2, -3]);
