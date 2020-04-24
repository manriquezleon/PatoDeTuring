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
````
En este caso estamos buscando una coincidencia de texto directamente en nuestra cadena de prueba 'hola mundo', en el caso de que dicha coincidencia sea verdadera obtendremos un true, caso contrario nos regresara un false.

¿Por qué usar expresiones regulares?
Como te habia mencionadó, las expresiones regulares son una forma de describir patrones en datos dentro de una cadena. Podemos usarlos para verificar una cadena de caracteres, por ejemplo, para buscar una dirección de correo electrónico, haciendo coincidir el patrón definido por nuestra expresión regular.
# A la vuelta de la esquina:
* Applying for a code interview.
* Pytorch for Millennials .
* Angular 9 Crash Course .
* JS-fundamentals -A Crash Course for begginers .
* AWESOME JS - An advanced js course .
* De Dude a Data Scientist con R .
* Algorithms.js - How to think in Computer Science?
