---
title: Dart para Flutter Developers
published: false
description: En esté Crash Curse aprenderas los fundamentos de Dart para desarrollar en flutter como los pros.
tags: #flutter #dart #español
---

# < Fundamentos de Dart >

Dart es un lenguaje de programación de uso general de código abierto. Fue desarrollado originalmente por Google. Dart es un lenguaje orientado a objetos con sintaxis de estilo C. Admite conceptos de programación como interfaces, clases, a diferencia de otros lenguajes de programación Dart no admite matrices. Las colecciones de Dart se pueden usar para replicar estructuras de datos como matrices, genéricos y tipeo opcional.

El siguiente código muestra un simple programa Dart:

```Dart
void main() {
   print("Dart es maravilloso! ");
}
```

## Variables y tipos de datos
La variable se denomina ubicación de almacenamiento y los tipos de datos simplemente se refieren al tipo y tamaño de los datos asociados con variables y funciones.

Dart usa la palabra clave var para declarar la variable. La sintaxis de var se define a continuación,
```Dart
var name = 'Dart';
```
Las palabras clave **final** y **const** se usan para declarar constantes. Se definen a continuación:
```Dart
void main() {
   final a = 12;
   const pi = 3.14;
   print(a);
   print(pi);
}
```
El lenguaje Dart admite los siguientes tipos de datos:

Números : se utiliza para representar literales numéricos: entero y doble.

Cadenas : representa una secuencia de caracteres. Los valores de cadena se especifican en comillas simples o dobles.

Booleanos : Dart utiliza la palabra clave bool para representar valores booleanos(verdadero y falso).

Listas y mapas : se utiliza para representar una colección de objetos. 

Una lista simple se puede definir como a continuación.
```Dart
void main() {
   var list = [1,2,3,4,5];
   print(list);
}
```


El mapa se puede definir como se muestra aquí:
```Dart
void main() {
   var mapping = {'id': 1,'name':'Dart'};
   print(mapping);
}
```

Dinámico : si el tipo de variable no está definido, su tipo predeterminado es dinámico. 

El siguiente ejemplo ilustra la variable de tipo dinámico:
```Dart
void main() {
   dynamic name = "Dart";
   print(name);
}
```

## Toma de decisiones y bucles
Un bloque de toma de decisiones evalúa una condición antes de que se ejecuten las instrucciones. Dart admite If, ​​If..else y declaraciones de cambio.

Los bucles se utilizan para repetir un bloque de código hasta que se cumpla una condición específica. Dart admite bucles for, for..in, while y do.. while.

Comprendamos un ejemplo simple sobre el uso de sentencias de control y bucles:
```Dart
void main() {
   for( var i = 1 ; i <= 10; i++ ) {
      if(i%2==0) {
         print(i);
      }
   }
}
```
El código anterior imprime los números pares del 1 al 10.

## Las funciones

Una función es un grupo de declaraciones que juntas realizan una tarea específica. Veamos una función simple en Dart como se muestra aquí:

```Dart
void main() {
   add(3,4);
}
void add(int a,int b) {
   int c;
   c = a+b;
   print(c);
}
```

La función anterior agrega dos valores y produce 7 como salida.

Programación orientada a objetos
Dart es un lenguaje orientado a objetos. Admite funciones de programación orientada a objetos como clases, interfaces, etc.

Una clase es una estructura para crear objetos. Una definición de clase incluye lo siguiente: 
* Campos, 
* Getters y setters, 
* Constructores 
* Las funciones.

Ahora, crearemos una clase simple usando las definiciones anteriores:
```Dart
class Employee {
   String name;
   
   //getter method
   String get emp_name {
      return name;
   }
   //setter method
   void set emp_name(String name) {
      this.name = name;
   }
   //function definition
   void result() {
      print(name);
   }
}
void main() {
   //object creation
   Employee emp = new Employee();
   emp.name = "employee1";
   emp.result(); //function call
}
```
