let Godzilla =
{
    name: "Godzilla"
};
function A() 
{
    return Godzilla;
}
function B() 
{
    return Godzilla;
}

let a = new A();
let b = new B();

alert( a == b ); // true
