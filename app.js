const express = require('express');
const app = express();
const path = require('path');

// Servir los archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para los resultados
app.get('/results', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'results.html'));
});

// Puerto de escucha
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
