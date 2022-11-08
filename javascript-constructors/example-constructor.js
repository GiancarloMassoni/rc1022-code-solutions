function ExampleConstructor() {

}
console.log('value of ExampleConstructor: ', ExampleConstructor);
console.log('typeof ExampleConstructor: ', typeof ExampleConstructor);

var ec = new ExampleConstructor();
console.log('value of ec: ', ec);

var instance = ec instanceof ExampleConstructor;
console.log('instance of :', instance);
