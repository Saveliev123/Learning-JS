//Что не так в нижеприведённом тесте функции pow?

it("Возводит x в степень n", function() { // Нет блока describe
  let x = 5;

  let result = x;
  assert.equal(pow(x, 1), result); 

  result *= x;
  assert.equal(pow(x, 2), result); // Тесты лучше разбить на разные болки it

  result *= x; 
  assert.equal(pow(x, 3), result);
});

//Так лучше:

describe("pow", function() {
  let x = 5;
  let result; 
  it("Возводит x в степень 1", function() {
    result = x;
    assert.equal(pow(x, 1), result); 
  }

  it("Возводит x в степень 2", function() {
    result *= x;
    assert.equal(pow(x, 2), result); 
  }

  it("Возводит x в степень 3", function() {
    result = x * x * x;
    assert.equal(pow(x, 3), result);
  });
});
