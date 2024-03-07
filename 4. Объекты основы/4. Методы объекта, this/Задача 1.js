function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert( user.ref.name ); // Каким будет результат?

//  Выведет undefined тк this будет использвоаться как ф-я а не как метод, значение this в данномслучае undefined

function makeUser() {
  return {
    name: "John",
    ref
	{
	  return this;
	}
  };
}

let user = makeUser();

alert( user.ref().name );

// Тут результатом будет "John" тк this вызывается как метод объекта 
