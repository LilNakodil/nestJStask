function wrap(target) {
    return new Proxy(target, {
      get(target, prop, receiver) {
        if (prop in target) {
          return Reflect.get(target, prop, receiver);
        } else {
          throw new ReferenceError(`Property does not exist: "${prop}"`)
        }
      }
    });
}
array = new Proxy(array, {
    get(target, prop, receiver) {
      if (prop < 0) {
        // даже если обращение к элементу идёт как arr[1]
        // prop является строкой, нужно преобразовать её к числу
        prop = +prop + target.length;
      }
      return Reflect.get(target, prop, receiver);
    }
});
let handlers = Symbol('handlers');

function makeObservable(target) {
 
  target[handlers] = [];

 
  target.observe = function(handler) {
    this[handlers].push(handler);
  };

  return new Proxy(target, {
    set(target, property, value, receiver) {
      let success = Reflect.set(...arguments); 
      if (success) { 
        
        target[handlers].forEach(handler => handler(property, value));
      }
      return success;
    }
  });
}
let user = {};

user = makeObservable(user);

user.observe((key, value) => {
  alert(`SET ${key}=${value}`);
});
let expr = prompt("Введите арифметическое выражение:", '2*3+2');
console.log(eval(expr))

function isInteger(num) {
    return (num ^ 0) === num;
}
let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = new Intl.Collator();
animals.sort(function(a, b) {
  return collator.compare(a, b);
});
  