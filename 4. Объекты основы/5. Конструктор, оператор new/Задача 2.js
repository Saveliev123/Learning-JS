function Calculator()
{
	
	this.read = function()
	{
	  this.a = +prompt("Введите первое число a");
	  this.b = +prompt("Введите второе число b");
	},
	this.sum = function()
	{
	  return this.a + this.b;
	},
	this.mul = function()
	{
	  return this.a * this.b;
	}
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );
