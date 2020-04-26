---
title: Curso de JS Moderno
published: false
description: En esta ocasión aprenderemos los fundamentos de ES5 la forma moderna de hacer js 
tags: #español #js #begginers #javascript #ecmascript
---

# *EcmaScript para principiantes.*

## ¿Que aprenderas?
En esta ocacion aprenderemos que es EcmaScript y los fundamentos basicos de este estandar de JS .

## ¿Que necesito?
Para seguir el tutorial de manera más comoda te recomendamos tener instalado: 
* Un navegador como lo puede ser Chrome,Firefox o Safari.
* Un editor de codico, si usas blog de notas bajo tu propio riesgo.
* Tener conocimientos basicos de JS y HTML.
* Tener instaldo Node.js

## ¿Que es EcmaScript?
**ECMAScript** es el estándar en el que se basa **JavaScript**, y a menudo se abrevia como **ES** .

Además de JavaScript hay otros idiomas que tambien implementan ECMAScript, que incluyen:

* ActionScript (el lenguaje de secuencias de comandos de Flash), que está perdiendo popularidad ya que Flash se suspenderá oficialmente en 2020.
* JScript (el dialecto de secuencias de comandos de Microsoft), ya que en ese momento JavaScript solo era compatible con Netscape y las guerras del navegador estaban en su apogeo, Microsoft tuvo que construir su propia versión para Internet Explorer.

pero, por supuesto, JavaScript es la implementación más popular y ampliamente utilizada de ES.

¿Por qué este nombre extraño? Ecma International es una asociación suiza de normas que se encarga de definir las normas internacionales.

Cuando se creó JavaScript, Netscape y Sun Microsystems lo presentaron a Ecma y le dieron el nombre de ECMA-262 alias ECMAScript .
## Primeros Pasos
La sintaxis define el conjunto de reglas con las cuales nosotros vamos a escribir programas. Cada especificación de lenguaje define su propia sintaxis.

Un programa JavaScript puede estar compuesto de :

* Variables : representa un bloque de memoria con nombre que puede almacenar valores para el programa.

* Literales : representa valores constantes / fijos.

* Operadores : símbolos que definen cómo se procesarán los operandos.

* Palabras clave : palabras que tienen un significado especial en el contexto de un idioma.

## Bienvenido a las variables en js
Ahora es cuando pasamos de la teoria a la practica, y que mejor que haciendo nuetro primer hola mundo, para esto te recomendamos crear un archivo nuevo llamado 'index.js', el cual abriremos para colocar la instrucción que a continuacion encontraras y una vez realizado esto ejecutaras desde tu consola de comandos con la instruccion '$ node index.js'.

```js
console.log('Bienvenido al curso de ES6!');
```
Excelente a hora que has hecho tu primer hola mundo comenzemos a ver las variables y tipos de datos en ES6.

Una variable , por definición, es "un espacio con nombre en la memoria" que almacena valores. En otras palabras, actúa como un contenedor de valores en un programa. Los nombres de las variables se denominan identificadores . Las siguientes son las reglas de nomenclatura para un identificador:

* Los identificadores no pueden ser palabras clave.
* Los identificadores pueden contener alfabetos y números.
* Los identificadores no pueden contener espacios y caracteres especiales, excepto el guión bajo (_) y el signo de dólar ($).
* Los nombres de las variables no pueden comenzar con un número.

**Tipo de sintaxis**
Se debe declarar una variable antes de usarla. La sintaxis de ES5 utilizó la palabra clave var para lograr lo mismo. La sintaxis de ES5 para declarar una variable es la siguiente.

//Declaration using var keyword 
var  variable_name
ES6 presenta la siguiente sintaxis de declaración de variables:

Usando el let.
Usando el const.
La inicialización de la variable se refiere al proceso de almacenar un valor en la variable. Una variable se puede inicializar en el momento de su declaración o en un momento posterior.

La sintaxis tradicional de tipo ES5 para declarar e inicializar una variable es la siguiente:

//Declaration using var keyword 
var variable_name = value
Ejemplo: uso de variables
var name = "Tom" 
console.log("The value in the variable is: "+name)
El ejemplo anterior declara una variable e imprime su valor.

El siguiente resultado se muestra en la ejecución exitosa.

The value in the variable is Tom

**JavaScript y escritura dinámica**
JavaScript es un lenguaje de tipado dinamico. Esto significa que una variable de JavaScript puede contener un valor de cualquier tipo de datos. A diferencia de muchos otros idiomas, no tiene que decirle a JavaScript durante la declaración de la variable qué tipo de valor tendrá la variable. El tipo de valor de una variable puede cambiar durante la ejecución de un programa y JavaScript se encarga de ello automáticamente. Esta característica se denomina mecanografía dinámica .

**Alcance variable de JavaScript**
El alcance de una variable es la región de su programa en la que se define. Tradicionalmente, JavaScript define solo dos ámbitos: global y local.

* Alcance global: se puede acceder a una variable con alcance global desde cualquier parte del código JavaScript.

* Alcance local: se puede acceder a una variable con un alcance local desde una función donde se declara.

Ejemplo: variable global versus local
El siguiente ejemplo declara dos variables con el nombre num : una fuera de la función (ámbito global) y la otra dentro de la función (ámbito local).

```js
var num = 10 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num) 
} 
console.log("value of num outside test() "+num) 
test()
```

Cuando se hace referencia a la variable dentro de la función, se muestra el valor de la variable de ámbito local. Sin embargo, la variable num cuando se accede fuera de la función devuelve la instancia con ámbito global.

El siguiente resultado se muestra en la ejecución exitosa.
```js
value of num outside test() 10
value of num in test() 100
```
ES6 define un nuevo alcance variable: el alcance del bloque.

El alcance de Let and Block
El alcance del bloque restringe el acceso de una variable al bloque en el que se declara. La palabra clave var asigna un alcance de función a la variable. A diferencia de la palabra clave var, la palabra clave let permite que el script restrinja el acceso a la variable al bloque de cierre más cercano.
```js
"use strict" 
function test() { 
   var num = 100 
   console.log("value of num in test() "+num) { 
      console.log("Inner Block begins") 
      let num = 200 
      console.log("value of num : "+num)  
   } 
} 
test()
```

El script declara una variable num dentro del alcance local de una función y la vuelve a declarar dentro de un bloque usando la palabra clave let. El valor de la variable de ámbito local se imprime cuando se accede a la variable fuera del bloque interno, mientras que la variable de ámbito de bloque se hace referencia dentro del bloque interno.

Nota : El modo estricto es una forma de optar por una variante restringida de JavaScript.

El siguiente resultado se muestra en la ejecución exitosa.
```js
value of num in test() 100 
```
Inner Block begins 
value of num : 200
Ejemplo: let v / s var
```js
var no = 10; 
var no = 20; 
console.log(no);
```
La siguiente salida se muestra en la ejecución exitosa del código anterior.

20
Reescribamos el mismo código usando la palabra clave let .
```js
let no = 10; 
let no = 20; 
console.log(no);
```
El código anterior arrojará un error: el identificador 'no' ya se ha declarado. A cualquier variable declarada con la palabra clave let se le asigna el alcance del bloque.

dejar y bloquear la seguridad a nivel
Si intentamos declarar una variable let dos veces dentro del mismo bloque, arrojará un error. Considere el siguiente ejemplo:
```html
<script>
   let balance = 5000 // number type
   console.log(typeof balance)
   let balance = {message:"hello"} // changing number to object type
   console.log(typeof balance)
</script>
```
El código anterior dará como resultado el siguiente error:

Uncaught SyntaxError: Identifier 'balance' has already been declared
dejar y múltiples bloques
Sin embargo, la misma variable let se puede usar en diferentes ámbitos de nivel de bloque sin errores de sintaxis.

Ejemplo
```html
<script>
   let count = 100
   for (let count = 1;count <= 10;count++){
      //inside for loop brackets ,count value starts from 1
      console.log("count value inside loop is ",count);
   }
   //outside for loop brackets ,count value is 100
   console.log("count value after loop is",count);

   if(count == 100){
      //inside if brackets ,count value is 50
      let count = 50;
      console.log("count inside if block",count);
   }
   console.log(count);
</script>
```
La salida del código anterior será la siguiente:
```
count value inside loop is 1
count value inside loop is 2
count value inside loop is 3
count value inside loop is 4
count value inside loop is 5
count value inside loop is 6
count value inside loop is 7
count value inside loop is 8
count value inside loop is 9
count value inside loop is 10
count value after loop is 100
count inside if block 50
100
```

**El const**
La declaración const crea una referencia de solo lectura a un valor. No significa que el valor que posee es inmutable, solo que el identificador de la variable no se puede reasignar. Las constantes tienen un alcance de bloque, al igual que las variables definidas utilizando la instrucción let. El valor de una constante no puede cambiar mediante la reasignación, y no se puede volver a declarar.

Las siguientes reglas son válidas para una variable declarada con la palabra clave const :

Las constantes no pueden reasignarse a un valor.
Una constante no se puede volver a declarar.
Una constante requiere un inicializador. Esto significa que las constantes deben inicializarse durante su declaración.
El valor asignado a una variable constante es mutable.
Ejemplo
const x = 10
x = 12 // will result in an error!!
El código anterior devolverá un error ya que las constantes no pueden reasignarse a un valor. Las constantes variables son inmutables.

Las constantes son inmutables
A diferencia de las variables declaradas usando la palabra clave let , las constantes son inmutables. Esto significa que su valor no se puede cambiar. Por ejemplo, si intentamos cambiar el valor de la variable constante, se mostrará un error.
```html
<script>
   let income = 100000
   const INTEREST_RATE = 0.08
   income += 50000 // mutable
   console.log("changed income value is ",income)
   INTEREST_RATE += 0.01
   console.log("changed rate is ",INTEREST_RATE) //Error: not mutable
</script>
```
La salida del código anterior será la siguiente:

changed income value is 150000
Uncaught TypeError: Assignment to constant variable
const y matrices
El siguiente ejemplo muestra cómo crear una matriz inmutable. Se pueden agregar nuevos elementos a la matriz. Sin embargo, reinicializar la matriz dará como resultado un error como se muestra a continuación:
```html
<script>
   const DEPT_NOS = [10,20,30,50]
   DEPT_NOS.push(40)
   console.log('dept numbers is ',DEPT_NOS)

   const EMP_IDS = [1001,1002,1003]
   console.log('employee ids',EMP_IDS)
   //re assigning variable employee ids
   EMP_IDS = [2001,2002,2003]
   console.log('employee ids after changing',EMP_IDS)
</script>
```
La salida del código anterior será como se muestra a continuación:

dept numbers is (5) [10, 20, 30, 50, 40]
employee ids (3) [1001, 1002, 1003]
Uncaught TypeError: Assignment to constant variable.
La palabra clave var
Antes de ES6, la palabra clave var se usaba para declarar una variable en JavaScript. Las variables declaradas usando var no admiten el alcance del nivel de bloque. Esto significa que si una variable se declara en un bucle o si se puede acceder al bloque fuera del bucle o al bloque if . Esto se debe a que las variables declaradas utilizando la palabra clave var admiten el izado.

var y elevación
La elevación variable permite el uso de una variable en un programa JavaScript, incluso antes de que se declare. Dichas variables se inicializarán a indefinidas de forma predeterminada. El tiempo de ejecución de JavaScript buscará declaraciones de variables y las colocará en la parte superior de la función o script. Las variables declaradas con la palabra clave var se elevan a la parte superior. Considere el siguiente ejemplo:
```html
<script>
   variable company is hoisted to top , var company = undefined
   console.log(company); // using variable before declaring
   var company = "TutorialsPoint"; // declare and initialized here
   console.log(company);
</script>
```
La salida del código anterior será como se muestra a continuación:

undefined
TutorialsPoint
alcance var y block
El alcance del bloque restringe el acceso de una variable al bloque en el que se declara. La palabra clave var asigna un alcance de función a la variable. Las variables declaradas con la palabra clave var no tienen un alcance de bloque. Considere el siguiente ejemplo:
```html
<script>
   //hoisted to top ; var i = undefined
   for (var i = 1;i <= 5;i++){
      console.log(i);
   }
   console.log("after the loop i value is "+i);
</script>
```
La salida del código anterior será la siguiente:

1
2
3
4
5
after the loop i value is 6
La variable i se declara dentro del bucle for utilizando la palabra clave var . La variable i es accesible fuera del bucle. Sin embargo, a veces, puede ser necesario restringir el acceso de una variable dentro de un bloque. No podemos usar la palabra clave var en este escenario. ES6 introduce la palabra clave let para superar esta limitación.

seguridad de nivel var y block
Si declaramos la misma variable dos veces usando la palabra clave var dentro de un bloque, el compilador no arrojará un error. Sin embargo, esto puede conducir a errores lógicos inesperados en tiempo de ejecución.
```html
<script>
   var balance = 5000
   console.log(typeof balance)
   var balance = {message:"hello"}
   console.log(typeof balance)
</script>
```
La salida del código anterior es como se muestra a continuación:

number
object
## Operadores

## Condicionales

## Ciclos

## Funciones

## Eventos en JS

## Iteradores

## Objetos

## Clases

## Promises

## Error Handling

## Proximos Pasos
