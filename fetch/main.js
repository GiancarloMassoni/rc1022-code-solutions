fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => Response.json())
  .then(data => console.log(data));

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(response => Response.json())
  .then(data => console.log(data));
