var books = [
  {
    isbn: '1234',
    title: 'Diary of a Wimpy Kid',
    author: 'Jeff Kinney'
  },
  {
    isbn: '4321',
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  },
  {
    isbn: '3214',
    title: 'Game of Thrones',
    author: 'George R.R. Martin'
  }
];
console.log('array: ', books);
console.log('typeof :', typeof books);

var json = JSON.stringify(books);
console.log('JSON.stringify: ', json);
console.log('typeof: ', typeof json);

var string = '{"id":"12345","name":"giancarlo"}';

console.log('string: ', string);
console.log('typeof string:', typeof string);

var obj = JSON.parse(string);

console.log('object: ', obj);
console.log('type of object:', typeof obj);
