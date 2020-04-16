# Machine Learning con Js
En esta ocacion aprenderemos a trabajar algunos de los conceptos fundamentales de Machine Learning en js. Para realizar esta actividad solo necesitaras contar con acceso a internet, un navegador o node.js instalado en tu equipo de computo.

### Machine learning
Empesemos por hablar de machine learning

### ML en el Brouser
A hora pasemos a hablar de la capacidad de los navegadores para soportar algoritmos de Machine Learning.

### Brain.js
**instalacion de brain.js**
Para hacer uso de brain.js en nuestros proyectos de node deberemos hacer uso de la instruccion:
```
npm install brain
```



```
const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// network.train([
//   { input: [0, 0, 0], output: [0] },
//   { input: [0, 0, 1], output: [0] },
//   { input: [0, 1, 1], output: [0] },
//   { input: [1, 0, 1], output: [1] },
//   { input: [1, 1, 1], output: [1] }
// ]);

network.train([
  { input: [1, 2], output: [1] }, // Team 2 wins
  { input: [1, 3], output: [1] }, // Team 3 wins
  { input: [2, 3], output: [0] }, // Team 2 wins
  { input: [2, 4], output: [1] }, // Team 4 wins
  { input: [1, 2], output: [0] }, // Team 1 wins
  { input: [1, 3], output: [0] }, // Team 1 wins
  { input: [3, 4], output: [0] } // Team 3 wins
]);

const output = network.run([1, 4]);

console.log(`Prob: ${output}`);
```

### Tensorflow.js
**instalacion de tensorflow.js**
Para hacer uso de brain.js en nuestros proyectos de node deberemos hacer uso de la instruccion:
```
npm install tensorflow
```
