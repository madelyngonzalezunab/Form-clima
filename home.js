fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => {
    document.getElementById('apiData').textContent = `Nombre: ${data.name}, Altura: ${data.height}`;
  })
  .catch(error => {
    document.getElementById('apiData').textContent = 'Error al cargar datos de la API';
  });