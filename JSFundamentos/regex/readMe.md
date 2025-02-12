---
title: Expresiones regulares en JS
published: false
description: ¿ Expresiones regulares en js ?
tags: #js #español #principiantes #fundamentos
---
# Usando Expresiones regulares en js 

## ¿Que aprenderas?
En esta ocacion aprenderemos que son las expresiones regulares en js, como funcionan, usarlas y que podemos hacer con ellas.

## ¿Que necesito?
Para seguir el tutorial de manera mas comoda te recomendamos tener instalado: 
* Un navegador como lo puede ser Chrome,Firefox o Safari.
* Un editor de codico, si usas blog de notas bajo tu propio riesgo.
* Tener conocimientos basicos de JS y HTML.

Una Expresión regular de JavaScript (o Regex ) es una secuencia de caracteres que podemos utilizar para trabajar eficazmente con cadenas. Usando esta sintaxis, podemos:
* **buscar** texto en una cadena
* **reemplazar** subcadenas en una cadena
* **extraer** información de una cadena

Desde la década de 1950, las expresiones regulares se formalizaron como un concepto para la búsqueda de patrones en algoritmos de procesamiento de cadenas.

De esta manera JavaScript tiene soporte para expresiones regulares directamente integrado en el lenguaje. Una comprensión sólida de las expresiones regulares te hará un programador mucho más efectivo. ¡Entonces empecemos!


Un patrón de expresiones regulares muy básico
Comencemos viendo el patron mas básico, el hola mundo de las expresiones regulares en js:
``` js
var regex = /hola/; 
console.log (regex.test('hola mundo'));  
// true
```
En este caso estamos buscando una coincidencia de texto directamente en nuestra cadena de prueba 'hola mundo', en el caso de que dicha coincidencia sea verdadera obtendremos un true, caso contrario nos regresara un false.

### ¿Por qué usar expresiones regulares?

Como te habia mencionadó, las expresiones regulares son una forma de describir patrones en datos dentro de una cadena. Podemos usarlos para verificar una cadena de caracteres, por ejemplo, para buscar una dirección de correo electrónico, haciendo coincidir el patrón definido por nuestra expresión regular.




------------------------------------


### Métodos de expresión regular

Con nuestras expresiones regulares hay dos metodos que normalmente usamos  test() y exec().

#### test()

Utilizamos este método para verificar si se ha encontrado una coincidencia o no. Acepta una cadena que probamos con una expresión regular y devuelve true o false, dependiendo de si se encuentra la coincidencia o no.
Veamos un ejemplo:
``` js
var regex = / hola /; 
var str = 'hola mundo'; 
resultado var = regex.test (str); 
console.log (resultado); 
// devuelve 'true' ya que hello está presente en nuestra cadena
```
### exec()
Utilizamos este método para recibir una matriz de todos los grupos coincidentes. Acepta una cadena que probamos contra nuestra expresión regular.
Un ejemplo:
``` js
var regex = /hola/; 
var str = 'hola mundo'; 
resultado var = regex.exec (str); 
console.log (resultado); 
// devuelve ['hola', índice: 0, entrada: 'hola mundo', grupos: indefinido]
```

En este ejemplo, ‘hello’es nuestro patrón coincidente, indexes donde comienza la expresión regular y inputes la cadena que se pasó.
Para el resto del artículo, utilizaremos el test()método.
El poder de la expresión regular
Hasta ahora hemos visto cómo crear patrones simples de expresión regular. Esto es realmente solo la punta del iceberg. ¡Vamos a sumergirnos en la sintaxis para ver todo el poder de las expresiones regulares para manejar tareas más complejas!
Un ejemplo de una tarea más compleja sería si tuviéramos que hacer coincidir varias direcciones de correo electrónico. Al usar los caracteres especiales definidos en la sintaxis, ¡podemos lograr esto!
Echemos un vistazo ahora para que podamos comprender mejor y, por lo tanto, utilizar expresiones regulares en nuestros programas.
Banderas
En cualquier expresión regular, podemos usar las siguientes banderas:

g: coincide con el patrón varias veces
i: hace que la expresión regular no sea sensible
m: habilita el modo multilínea. Dónde ^y $coincidir con el inicio y el final de toda la cadena. Sin esto, las cadenas de varias líneas coinciden con el principio y el final de cada línea.
u: habilita el soporte para Unicode
s: abreviatura de una sola línea , hace .que también coincida con los nuevos caracteres de línea
Las banderas también se pueden combinar en una sola expresión regular y el orden de la bandera no importa. Se agregan al final de la cadena en literales regex :

/hello/ig.test('HEllo ') 
// devuelve true



### Grupos de elementos:

### Conjunto de caracteres [abc]

Usamos conjuntos de caracteres para unir diferentes elementos en una sola posición. Coinciden con cualquier carácter individual en la cadena con los caracteres dentro de los corchetes:
```js
var regex = / [hc]oli /; 
console.log (regex.test ('holi')); 
// devuelve true 
console.log (regex.test ('coli')); 
// devuelve verdadero 
console.log (regex.test ('boli')); 
// devuelve falso
```

### Caracteres negados [^abc]
En este caso coincide con todo lo que no está entre corchetes:
```js
var regex = /[^hl]ola/; 
console.log (regex.test ('hola')); 
// devuelve false 
console.log (regex.test ('sola')); 
// devuelve false 
console.log (regex.test ('lora')); 
```

### Rangos de [a hasta z]
Si queremos unir todas las letras de un alfabeto en una sola posición, podemos usar rangos. Por ejemplo: [aj] coincidirá con todas las letras de a a j. También podemos usar dígitos como [0–9] o letras mayúsculas como [AZ] :
```js
var regex = /[az]ola/; 
console.log (regex.test ('hola'));  
// devuelve true 
console.log (regex.test ('sola'));
// devuelve verdadero 
console.log (regex.test ('lora'));  
// devuelve verdadero
```


### Cuantificadores
Los cuantificadores son símbolos que tienen un significado único en expresiones regulares.
Vamos a verlos en acción:
+ Coincide con la expresión anterior 1 o más veces:
```js
var regex = /\d+/; 
console.log(regex.test('1')); 
// true 
console.log(regex.test('1122')); 
// cierto
```

* Coincide con la expresión anterior 0 o más veces:
```js
var regex = /hi*d/; 
console.log (regex.test ('hd')); 
// true 
console.log (regex.test ('hid')); 
// cierto
```

? Coincide con la expresión anterior 0 o 1 vez, es decir, el patrón anterior es opcional:
```js
var regex = /hii?d/; 
console.log(regex.test('hid')); 
// true 
console.log(regex.test('hiid')); 
// true 
console.log(regex.test('hiiid')); 
// falso
```

^ Coincide con el comienzo de la cadena, la expresión regular que sigue debe estar al comienzo de la cadena de prueba:
```js
var regex = /^h/; 
console.log(regex.test('hola')); 
// true 
console.log(regex.test('bye')); 
// falso
```
$ Coincide con el final de la cadena, la expresión regular que la precede debe estar al final de la cadena de prueba:
```js
var regex = /.com$/; 
console.log(regex.test('patodeturing@email.com ')); 
// true 
console.log(regex.test('prueba@email')); 
// falso
```

{N}Coincide exactamente con N ocurrencias de la expresión regular anterior:
```js
var regex = /hi{2}d/;
console.log(regex.test('hiid'));
// true
console.log(regex.test('hid'));
// false
```
{N,}Coincide al menos N ocurrencias de la expresión regular anterior.
```js
var regex = /hi{2,}d/;
console.log(regex.test('hiid'));
// true
console.log(regex.test('hiiid'));
// true
console.log(regex.test('hiiiid'));
// true
```
{N,M}Coincide con al menos N ocurrencias y como máximo M ocurrencias de la expresión regular anterior (cuando M> N).
```js
var regex = /hi{1,2}d/;
console.log(regex.test('hid'));
// true
console.log(regex.test('hiid'));
// true
console.log(regex.test('hiiid'));
// false
```
La alternancia coincide con X o Y:
```
var regex = /bici (amarilla|verde)/;
console.log(regex.test('bici amarilla'));
// true
console.log(regex.test('bici verde'));
// true
console.log(regex.test('bici roja'));
// false
```
Nota: para utilizar cualquier carácter especial como parte de la expresión, por ejemplo, si desea hacer coincidir literal +o ., entonces deberá escapar de ellos con una barra diagonal inversa \. Al igual que:
```js
var regex = /a+b/;  
// esto no funciona 
var regex = /a\+b/; 
// ¡esto funciona! 
console.log(regex.test('a+b')); 
// true
```
Revisando Regex
Con estos conceptos frescos en nuestras mentes, ¡repasemos lo que hemos aprendido!
Coincide con cualquier número de 10 dígitos:
```js
var regex = /^\d{10}$/;
console.log(regex.test('4658264822'));
// true
```
Entonces \dcoincide con cualquier carácter de dígitos. {10}coincide con la expresión anterior, en este caso \d exactamente 10 veces. Entonces, si la cadena de prueba contiene menos de o más de 10 dígitos, el resultado será falso.
Haga coincidir una fecha con el siguiente formato:
DD-MM-YYYY o DD-MM-YY
```js
var regex = /^(\d{1,2}-){2}\d{2}(\d{2})?$/;
console.log(regex.test('01-01-2000'));
// true
console.log(regex.test('01-01-00'));
// true
console.log(regex.test('01-01-200'));
// false
```

Aquí hemos envuelto toda la expresión dentro ^ y $, para que la coincidencia abarque toda la cadena. (es el comienzo de la primera subexpresión. \d{1,2}coincide con al menos 1 dígito y como máximo 2 dígitos. -coincide con el guión literal. )es el final de la primera subexpresión.
Luego {2}coincide con la primera subexpresión exactamente 2 veces. \d{2}coincide exactamente con 2 dígitos. (\d{2})?coincide exactamente con 2 dígitos. Sin embargo, es opcional, por lo que cualquier año contiene 2 dígitos o 4 dígitos.
Si está listo para avanzar en sus habilidades de codificación, consulte mi nuevo curso SASS para CSS: Desarrollo Frontend Avanzado . ¡Este curso interactivo para principiantes lo guía a través de todo lo que necesita saber para subir de nivel sus habilidades de desarrollo front-end!

## Conclusión

Y ahí vamos! Hemos examinado Expresiones regulares desde lo más básico hasta implementaciones más avanzadas. Incluyendo los métodos literales y de construcción, métodos de prueba, indicadores y sintaxis de caracteres.
¡Las expresiones regulares pueden ser bastante complejas! Sin embargo, tomarse el tiempo para aprender la sintaxis te ayudará en gran medida a identificar los patrones de expresiones regulares más fácilmente. ¡Cualquier nueva habilidad que desbloqués seguramente te preparara para conquistar el próximo obstáculo que encuentre en tu camino como desarrollador!

¡Espero que este tutorial te sirviera de mucho! y te facilite a resolver problemas en tus proyectos. Recuerda que eres libre de dejar tus comentarios en la seccion de abajo y yo tratare de resoponder lo antes posible. No olvides suscribirte y Nos vemos en la proxima!! 



# A la vuelta de la esquina:
* Applying for a code interview.
* Pytorch for Millennials .
* Angular 9 Crash Course .
* JS-fundamentals -A Crash Course for begginers .
* AWESOME JS - An advanced js course .
* De Dude a Data Scientist con R .
* Algorithms.js - How to think in Computer Science?
