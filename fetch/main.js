fetch('https://jsonplaceholder.typicode.com/users')
  .then(Response => Response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(Response => Response.json())
  .then(data => console.log(data));
