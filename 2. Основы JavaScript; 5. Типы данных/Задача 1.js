let name = "Ilya";

alert( `hello ${1}` ); // hello 1, в ${} просто указано 1

alert( `hello ${"name"}` ); // hello name, в данном случае "name" это просто строка, а не переменная (из-за кавычек)

alert( `hello ${name}` ); // hello Ilya, т.к. name внутри ${} вычисляется и становится частью строки
