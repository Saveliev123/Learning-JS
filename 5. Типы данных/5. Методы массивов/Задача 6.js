/*function Calculator()
{
  this.calculate = function(str)
  {  
    let result = 0;
    if (str.includes("+"))
    {
      str = str.split(' + ');
      result = +str[0] + +str[1];
      return result;
    }
    if (str.includes("-"))
    {
      str = str.split(' - ');
      result = +str[0] - +str[1];
      return result;
    }
  };

  this.addMethod = function(name, func) 
  {

  };
  
}*/

function Calculator() 
{
  this.methods = 
  {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) 
  {
    let split = str.split(' ');
    let a = +split[0];
    let op = split[1];
    let b = +split[2];
    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) 
  {
    this.methods[name] = func;
  }
}

let calc = new Calculator;

alert( calc.calculate("3 + 7") ); // 10
alert( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
