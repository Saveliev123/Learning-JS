let calculator = {
  read() 
  {
	  this.a = +prompt("Введите первое число a");
	  this.b = +prompt("Введите второе число b");
  },
  sum()
  {
	  return this.a + this.b;
  },
  mul()
  {
	  return this.a * this.b;
  }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
