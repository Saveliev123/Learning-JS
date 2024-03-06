const user = {
  name: "John"
}

// это будет работать?
user.name = "Pete";

// да, это будет работать, тк const относится только к user, но не к свойству name
