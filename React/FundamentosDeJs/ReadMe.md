# Re-aprendiendo JavaScript antes de aprender React.

## Introducción
¿Por qué una re-aprender? Porque JavaScript tiene una fama razonable de ser el lenguaje de programación más incomprendido del mundo. Aunque a menudo se le ha ridiculizado como un juguete, bajo su aparente sencillez residen características muy potentes, las cuales no todos entienden y donde lo mas facil es creer que el lenguaje es el horrible y lleno de errores, y no la logica de los programadores. En la actualidad JavaScript se utiliza en un gran número de aplicaciones avanzadas, demostrando que un profundo conocimiento de esta tecnología es una habilidad importante para cualquier desarrollador web o móvil.

Suele ser útil empezar con una visión general de la historia del lenguaje. JavaScript fue creado en 1995 por Brendan Eich, ingeniero de Netscape, y fue publicado con Netscape 2 a principios de 1996. Inicialmente iba a llamarse LiveScript, pero fue renombrado en una errónea decisión de marketing para tratar de aprovechar la popularidad del lenguaje Java de Sun Microsystems, a pesar de que ambos lenguajes tienen muy poco en común. Esto ha sido un motivo de confusión que ha alcanzado hasta nuestros días.

Unos meses después, Microsoft lanzó Jscript, una versión compatible con la mayoría del lenguaje Javascript,  en IE 3. Netscape presentó el lenguaje a Ecma Internacional, un organismo europeo de normalización, lo que dio lugar a la primera edición de la norma ECMAScript en 1997. La norma ha recibido una actualización importante, la ECMAScript 3 en 1999, y se ha mantenido más o menos estable desde entonces. La cuarta edición fue abandonada, debido a diferencias políticas relativas a la complejidad del lenguaje. Muchas partes de la cuarta edición formaron la base de la nueva edición de ECMAScript 5, publicado en diciembre de 2009.

Esta estabilidad es una gran noticia para los desarrolladores, ya que les ha dado a las diversas implementaciones mucho tiempo para ponerse al día. Me voy a centrar casi exclusivamente en la tercera edición del lenguaje. Por familiaridad, voy a seguir con el término JavaScript de ahora en adelante.

A diferencia de la mayoría de los lenguajes de programación, el lenguaje JavaScript no tiene un concepto de entrada o salida. Está diseñado para funcionar como un lenguaje de script dentro de un entorno y depende de los mecanismos de este entorno para la comunicación con el mundo exterior. El entorno más común es el navegador, pero los intérpretes de JavaScript también se puede encontrar en Adobe Acrobat, Photoshop, las imágenes SVG, el motor de Widget de Yahoo!, así como entornos de servidor como node.js. Sin embargo, la lista de las areas donde se utiliza JavaScript es mucho más extensa. También incluye las bases de datos NoSQL, el de código abierto Apache CouchDB, ordenadores integrados, o entornos de escritorio completos, como GNOME (una de las interfaces gráficas de usuario más populares para los sistemas operativos GNU / Linux).

Información general
JavaScript es un lenguaje dinámico orientado a objetos. Tiene tipos y operadores, objetos básicos y métodos. Su sintaxis viene de los lenguajes Java y C, por lo que muchas de las estructuras de esos lenguajes se aplican también a JavaScript. Una de las principales diferencias es que JavaScript no tiene clases. En cambio, la funcionalidad de clase se consigue mediante prototipos de objetos. La otra diferencia principal es que las funciones son objetos, dando a las funciones la capacidad para contener código ejecutable y ser pasado como cualquier otro objeto.

Vamos a empezar mirando el componente básico de cualquier lenguaje: los tipos. JavaScript manipula valores, y esos valores pertenecen a un tipo. Los tipos de JavaScript son:

Números
Cadenas de texto (Strings)
Booleanos
Funciones
Objetos
...oh, y Undefined y Null, que son un poco extraños. Y Arrays, que son un tipo especial de objeto. Y fechas y expresiones regulares, que son objetos que se obtienen de forma gratuita. Y para ser técnicamente preciso, las funciones son sólo un tipo especial de objeto. Así que el diagrama se parece más a esto:

Números
Cadenas
Booleanos
Objetos
Funciones
Array
Date
RegExp
Null
Undefined
Y hay algunos tipos de Error pre-construidos también. Sin embargo las cosas son mucho más fáciles si nos quedamos con el primer diagrama.

## Números
Los números en JavaScript son "de doble precisión de 64 bits en formato IEEE 754", de acuerdo con la especificación. Esto tiene algunas consecuencias interesantes. No hay tal cosa como un entero en JavaScript, por lo que hay que ser un poco cuidadoso con la aritmética si esta acostumbrado a las matemáticas en C o Java. Tenga cuidado con cosas como:

0.1 + 0.2 == 0.30000000000000004
En la práctica, los valores enteros se tratan como enteros de 32 bits (y se almacenan de esa manera en algunas implementaciones de navegadores Web), que puede ser importante para las operaciones de bit a bit. 

Los operadores numéricos estándar están implementados, incluyendo suma, resta, módulo (o resto) aritmética y así sucesivamente. También hay un objeto incorporado que me olvidé de mencionar antes llamado Math para manejar las funciones y constantes matemáticas más avanzadas:

Math.sin(3.5);
var d = Math.PI * r * r;
Se puede convertir una cadena de texto a un entero utilizando la función parseInt(). Esta función  toma la base para la conversión como un segundo argumento opcional, el que siempre se deberia proporcionar:

> parseInt("123", 10)
123
> parseInt("010", 10)
10
Si no se proporciona el valor base, se podría obtener resultados sorpresivos en navegadores antiguos (anteriores a 2013):

> parseInt("010")
8
Esto sucede porque la función parseInt decidió tratar la cadena de texto como un octal por la presencia del 0 inicial.

Si quieres convertir un número binario a entero, sólo cambia la base:

> parseInt("11", 2)
3
Igualmente puedes cambiar números flotantes usando la función parseFloat() que utiliza la base 10.

También puedes usar el operador unitario + para convertir valores a números:

> + "42"
42 
Si la cadena es no numérica, se devuelve un valor especial llamado NaN (abreviatura para "Not a Number"):

> parseInt("hello", 10)
NaN
NaN es tóxico: si lo ingresas como dato de cualquier operación matemática el resultado también será NaN:

> NaN + 5
NaN
Podes comprobar el valor de NaN usando la función incorporada isNaN():

> isNaN(NaN)
true
JavaScript también tiene los valores especiales Infinity y -Infinity:

> 1 / 0
Infinity
> -1 / 0
-Infinity
Podes comprobar los valores de Infinity, -Infinity y NaN usando la función incorporada isFinite():

> isFinite(1/0)
false
> isFinite(-Infinity)
false
> isFinite(NaN)
false
Nota: Las funciones parseInt() y parseFloat() analizan una cadena hasta que llegan a un caracter que no es válido para el formato de número especificado, luego devuelven el número analizado hasta ese punto. Sin embargo, el operador "+" simplemente convierte la cadena a NaN si hay algún caracter invalido en él. Trata de analizar tú mismo la cadena "10.2abc" con cada método en la consola y entenderás mejor las diferencias.
Cadenas de caracteres
Las cadenas de caracteres en JavaScript son secuencias de caracteres. Más precisamente, son secuencias de Caracteres Unicode, con cada caracter representado por un número de 16 bits. Éstas deberían ser buenas noticias para aquellos que tuvieron que lidiar con la internacionalización.

Si quieres representar un simple carácter, solo usa una cadena con un largo de 1.

Para saber la longitud de una cadena, accede a su propiedad length:

> "hola".length
4
¡Ahí está nuestra primer pincelada con objetos JavaScript! ¿Mencioné que también podías usar cadenas como si fueran objetos? Ellas también tienen métodos:

> "hola".charAt(0)
h
> "hola, mundo".replace("hola", "adiós")
adiós, mundo
> "hola".toUpperCase()
HOLA

## Otros tipos
JavaScript distingue entre null, que es un valor que indica un "no valor" deliberado (y es sólo accesible a través de la palabra clave null), y undefined, que es un valor de tipo 'undefined' (indefinido) que indica un valor no inicializado — esto es, un valor que todavía no ha sido asignado. Hablaremos de variables luego, pero en JavaScript es posible declarar una variable sin asignarle un valor. Si haces esto, El tipo de variable será undefined. undefined es en realidad una constante.

JavaScript tiene un tipo booleano, con los valores posibles true (verdadero) y false (falso - ambos son palabras claves). Cualquier valor puede convertirse a booleano de acuerdo a las siguientes reglas:

false, 0, la cadena vacía (""), NaN, null, y undefined todos son false
Todos los demás son true
Puedes realizar esta conversión explícitamente usando la función Boolean():

> Boolean("")
false
> Boolean(234)
true
Sin embargo, es raramente necesaria, ya que JavaScript realizará esta conversión silenciosamente cuando espere que el valor sea booleano, tal como sucede en una instrucción if (ver más abajo). Por esta razón, a veces simplemente hablamos de "valores verdaderos" y "valores falsos", queriendo decir valores que se vuelven true y false, respectivamente, al convertirse en booleanos. Alternativamente, tales valores pueden llamarse "los verdaderos" y "los falsos", respectivamente.

JavaScript soporta operaciones Booleanas tales como && (y lógica), || (o lógica), y ! (no lógico). Ver más abajo.

## Variables

Las variables en JavaScript se declaran usando la palabra reservada var:

var a;
var name = "simon";
Si declaras una variable sin asirgnarle ningún valor su tipo será undefined. 

Una diferencia importante de otros lenguajes como Java es que en JavaScript, los bloques no forman un ámbito. Sólo las funciones forman un ámbito. Así que si una variable es definida usando var en una declaración compuesta (por ejemplo dentro de una estructura de control if), será visible para la función entera.

Operadores
Los operadores numericos de JavaScript son +, -, *, / y % (esta última es la operación módulo o resto). Los valores se asignan usando =, y también hay declaraciones compuestas de asignación como += y -= que equivalen a x = x operador y.

x += 5
x = x + 5
Puedes usar ++ y -- para incremento y decremento respectivamente. Éstas pueden usarse como operadores prefijo o sufijo.

El operator + tambien concatena (agrupa) cadenas:

> "hola" + " mundo"
hola mundo
Si agregas una cadena a un número o a otro valor todo se convierte a cadena:

> "3" + 4 + 5
"345"
> 3 + 4 + "5"
"75"
Agrega una cadena vacía a algo es una forma útil de convertirlo.

Comparaciones en JavaScript puede hacerse usando <, >, <= y >=. Esto funciona con cadenas y números. Con el signo igual es un poco menos sencillo. El operador doble igual realiza coerción de tipos. Si le ingresas diferentes tipos obtienes interesantes resultados:

> "perro" == "perro"
true
> 1 == true
true
Para evitar la coerción de tipos, usa el operador "triple igual":

> 1 === true
false
> true === true
true
También hay operadores != y !==.

JavaScript también tiene operaciones a nivel de bits, por si quieres usarlas.

Estructuras de control
JavaScript tiene un juego de estructuras de control similar a otros lenguajes de la familia del lenguaje C. Las declaraciones condicionales son gestionadas por if y else. Puedes encadenarlas si te gusta:

var nombre = "gatito";
if (nombre == "mascotas") {
  nombre += "!";
} else if (nombre == "gatito") {
  nombre += "!!";
} else {
  nombre = "!" + nombre;
}
nombre == "gatito!!"
JavaScript tiene los bucles while y do-while. La primera es buena para bucles básicos. La segunda, para bucles en donde quieres asegurarte que el cuerpo del bucle se ejecute al menos una vez:

while (true) {
  // ¡Un bucle infinito!
}

var input;
do {
  input = get_input();
} while (inputIsNotValid(input))
El bucle for de JavaScript es el mismo que en C y Java: Te permite ingresar la información de control para tu ciclo en una sola linea.

for (var i = 0; i < 5; i++) {
  // Se ejecutará 5 veces
}
Los operadores && y || usan lógica de cortocircuito, que significa que el hecho de que ejecuten el segundo operador depende del primero. Es útil para chequear objetos nulos antes de acceder a sus atributos:

var nombre = o && o.getName();
O para asignar valores por defecto:

var nombre = otroNombre || "default";
JavaScript tiene un operador ternario para expresiones condicionales:

var permitido = (edad > 18) ? "sí" : "no";
La instrucción switch se puede usar para múltiples consecuencias derivadas de un número o cadena:

switch(accion) {
    case 'dibujar':
        dibujalo();
        break;
    case 'comer':
        comelo();
        break;
    default:
        nohacernada();
}
Si no agregas una instrucción break, la ejecución "caerá" al siguiente nivel. Esto raramente sería lo que quieres — De hecho conviene etiquetar con un comentario específico una "caída" si realmente tuviste esa intención para ayudar a la mejor lectura del código:

switch(a) {
    case 1: // fallthrough
    case 2:
        eatit();
        break;
    default:
        donothing();
}
La cláusula por defecto es opcional. Puedes tener expresiones tanto en la parte del switch y en cada uno de los casos, si lo prefieres. Las comparaciones toman lugar entre las dos usando el operador === :

switch(1 + 3) {
    case 2 + 2:
        yay();
        break;
    default:
        neverhappens();
}

## Objetos

Los objetos en JavaScript pueden entenderse como simples colecciones de pares nombre-valor. Como tales, son similares a:

Diccionarios en Python
Hashes en Perl y Ruby
Tablas de Hash en C y C++
Mapas de Hash en Java
Matrices asociativas en PHP
El hecho de que esta estructura de datos sea tan ampliamente usada es un testimonio de su versatilidad. Como todo (con excepción de los tipos primitivos) en JavaScript es un objeto, cualquier programa JavaScript involucra naturalmente un gran manejo de búsquedas en tablas de hash. ¡Es muy bueno que sean tan rápidas!

La parte "name" es una cadena JavaScript, mientras que el valor puede ser cualquier valor JavaScript, incluyendo más objetos. Esto te permite construir estructura de datos de complejidad arbitraria.

Hay dos formas básicas de crear un objeto vacío:

var obj = new Object();
y:

var obj = {};
Estas son semánticamente equivalentes. La segunda se llama sintaxis literal del objeto y es más apropiada. Esta sintaxis también es el núcleo del formato JSON y debería dársele prioridad en todo momento.

La sintaxis literal del objeto se puede usar para inicializar un objeto en su totalidad:

var obj = {
    nombre: "Zanahoria",
    "for": "Max",
    detalles: {
        color: "naranja",
        medida: 12
    }
}
El acceso a atributos se puede juntar en una misma cadena:

> obj.detalles.color
naranja
> obj["detalles"]["medida"]
12
El siguiente ejemplo crea un objeto prototipo, Persona, y una instancia de ese prototipo, Tu.

function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

// Definir un objeto
var Tu = new Persona("Tu", 24); 
// Estamos creando una nueva persona llamada "Tu" 
// (que fue el primer parametro, y su edad, el segundo)

Una vez creadas las propiedades del objeto, puede accederse a ellas de dos formas:

obj.nombre = "Simon";
var nombre = obj.nombre;
y...

obj["nombre"] = "Simon";
var nombre = obj["nombre"];
Estas son semánticamente equivalentes. El segundo método tiene la ventaja de que el nombre de la propiedad se ingresa como cadena, lo que significa que puede ser calculado en tiempo de ejecución aunque usar este método impide que se apliquen algunas optimizaciones del motor JavaScript. También se puede usar para asignar y obtener propiedades con nombres que sean palabras reservadas:

obj.for = "Simon"; // Error de sintaxis, porque 'for' es una palabra reservada
obj["for"] = "Simon"; // Anda bien
 

## Matrices

Las matrices en JavaScript son, en realidad, un tipo especial de objeto. Funcionan mucho como objetos regulares (se puede acceder a las propiedades numéricas sólo usando la sintaxis []) pero tienen una propiedad mágica llamada 'length'. Ésta siempre es un número más que el índice más alto en una matriz.

La vieja forma de crear matrices es la siguiente:

> var a = new Array();
> a[0] = "perro";
> a[1] = "gato";
> a[2] = "gallina";
> a.length
3
Una forma más conveniente es usar una matriz literal:

> var a = ["perro", "gato", "gallina"];
> a.length
3
Dejar comas al final de una matriz u objeto literal es inconsistente en los navegadores, aunque el comportamiento correcto es ignorar la última coma restante y asignarle el valor "undefined." a las otras. Por ahora, no se recomienda hacerlo.

Observa que array.length no es, necesariamente el número de items en la matriz. Considera lo siguiente:

> var a = ["perro", "gato", "gallina"];
> a[100] = "zorro";
> a.length
101
Recuerda que el largo de la matríz es un número más del índice más alto.

Si consultas el índice inexistente de una matriz , obtendrás undefined:

> typeof a[90]
undefined
Si tienes en cuenta lo anterior, puedes iterar una matriz usando lo siguiente:

for (var i = 0; i < a.length; i++) {
    // Hacer algo con a[i]
}
Esto es ligeramente ineficiente ya que buscas la propiedad length en cada oporunidad del ciclo. Una mejora es esta:

for (var i = 0, len = a.length; i < len; i++) {
    // hacer algo con a[i]
}
Y aun mejor:

for (var i = 0, item; item = a[i++];) {
    // hacer algo con el item
}
Aquí estamos creando dos variables. A la asignación en la mitad del ciclo for se le testea su veracidad. Si es verdadera el ciclo continua. Como i se incrementa cada vez, los items de la matriz seran asignados a item en orden secuencial. El ciclo se detiene si se encuentra un item falso (como undefined).

Observa que este truco sólo se puede usarpara matrices que se sabe que no tienen valores falsos (las matrices de objetos o nodos DOM, por ejemplo). Si estas iterando datos numericos que podrían incluir un 0 o datos de una cadena que podría incluirla cadena vacía deberías usar la forma  i, len en su lugar.

Otra forma de iterar es usar el ciclo for...in. Observa que si alguien agregara nuevas propiedades a Array.prototype, también serán iteradas por este ciclo:

for (var i in a) {
  // Hacer algo con a[i]
}
Si quieres agregar un item a una matriz simplemente hazlo así:

a.push(item);
La matriz viene con varios métodos:

Nombre del método	Descripción
a.toString()	Devuelve una cadena para cada elemento separado por comas.
a.toLocaleString()	Devuelve una cadena local para cada elemento separado por comas.
a.concat(item[, itemN])	Devuelve una matriz con los nuevos items agregados a ella.
a.join(sep)	Convierte la matriz a valores de delimitados por el parámetro sep
a.pop()	Quita el último item de la matriz y lo devuelve como resultado.
a.push(item[, itemN])	Push agrega uno o más items al final de la matriz.
a.reverse()	Revierte el orden de los elementos de la matriz.
a.shift()	Quita el primer item de la matriz y lo devuelve como resultado.
a.slice(start, end)	Devuelve una sub-matriz.
a.sort([cmpfn])	Toma una función opcional de comparación.
a.splice(start, delcount[, itemN])	Permite modificar una matriz borrando una sección y reemplazándola con más items.
a.unshift([item])	Antepone items al comienzo de la matriz.

## Funciones

Junto con los objetos, las funciones son un componente principal en la comprensión de JavaScript. La función más básica no podría ser más simple:

function add(x, y) {
    var total = x + y;
    return total;
}
Esto demuestra que hay mucho que aprender de las funciones básicas. Una función JavaScript puede tomar 0 o más parámetros. El cuerpo de la función puede contener tantas declaraciones como quieras y puede declarar sus propias variables que serán locales en la función. La instrucción return puede usarse para retornar un valor en cualquier momento, finalizando la función. Si no se utiliza la instrucción return (o un retorno vacío sin valor), JavaScript devuelve undefined.

Los parametros resultan ser más una guía que cualquier otra cosa. Puedes llamar una función sin pasarle los parametros que espera, en cuyo caso quedarán como undefined.

> add()
NaN // No puedes ejecutar una suma con undefined
También puedes ingresar más argumentos de los que la función espera:

> add(2, 3, 4)
5 // Sumó los dos primeros; 4 fue ignorado
Eso puede ser un poco tonto pero las funciones tienen acceso a una variable adicional dentro de su cuerpo llamada arguments, que es un objeto en forma de matriz que contiene todos los valores pasados a la función. Reescribamos la función add para que tome tantos valores como deseemos:

function add() {
    var suma = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        suma += arguments[i];
    }
    return suma;
}

> add(2, 3, 4, 5)
14
Sin embargo, eso no es realmente más útil que escribir 2 + 3 + 4 + 5. Creemos una función promedio:

function promedio() {
    var suma = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        suma += arguments[i];
    }
    return suma / arguments.length;
}
> promedio(2, 3, 4, 5)
3.5
Esta es muy útil, pero tiene un nuevo problema. La función promedio() toma una lista de argumentos separados por coma. Pero ¿qué sucede si quieres encontrar el promedio de una matríz? Podrías reescribir la función de la siguiente manera:

function avgArray(arr) {
    var sum = 0;
    for (var i = 0, j = arr.length; i < j; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
> avgArray([2, 3, 4, 5])
3.5
Pero sería interesante poder reutilizar la función que ya hemos creado. Afortunadamente, JavaScript permite llamar a una función con una matriz arbitraria de argumentos usando el método apply() de cualquier objeto de la función.

> avg.apply(null, [2, 3, 4, 5])
3.5
El segundo argumento para apply() es la matriz a usar como agumentos. El primero  será tratado luego. Esto enfatiza el hecho de que las funciones también son objetos.

JavaScript permite crear funciones anónimas.

var avg = function() {
    var sum = 0;
    for (var i = 0, j = arguments.length; i < j; i++) {
        sum += arguments[i];
    }
    return sum / arguments.length;
}
Esto es semánticamente equivalente a la forma de function avg(). Es extremadamente potente, ya que te permite poner una definición de función completa en cualquier lugar en el que normalmente pondrías una expresión. Permite toda clase de trucos. Aquí hay una forma de "esconder" algunas variables locales como ámbito de bloque en C:

> var a = 1;
> var b = 2;
> (function() {
    var b = 3;
    a += b;
})();
> a
4
> b
2
JavaScript permite llamar funciones de forma recursiva. esto es particularmente útil para  manejar tres estructuras, tales como entrar en el DOM del navegador.

function countChars(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += countChars(child);
    }
    return count;
}
Esto destaca un problema potencial con las funciones anónimas: ¿Cómo las llamas recusivamente si no tienes un nombre? JavaScript te permite nombrar expresiones de función para ello. Puedes usar las IIFEs (Immediately Invoked Function Expressions -Expresiones de función invocadas inmediatamente-) como sigue:

var charsInBody = (function counter(elm) {
    if (elm.nodeType == 3) { // TEXT_NODE
        return elm.nodeValue.length;
    }
    var count = 0;
    for (var i = 0, child; child = elm.childNodes[i]; i++) {
        count += counter(child);
    }
    return count;
})(document.body);
El nombre provisto a la función de expresión anterior sólo está disponible en el ámbito propio de la función. Esto permite tanto, que se hagan más optimizaciones por el motor y código más legible. El nombre también aparece en el 'debugger' y algunos indicadores de la pila que te pueden ahorrar tiempo.

Observa que las funciones JavaScript son objetos en sí mismos y puedes agregarles o cambiarles sus propiedades igual que a los objetos que hemos visto en la sección Objetos.

Objetos personalizados
Nota: Para un tratamiento más detallado de  programación orientada a objetos en JavaScript, ver Introducción a JavaScript orientado a objetos.
En la programación orientada a objetos clásica, los objetos son colecciones de datos y métodos que operan sobre los datos. JavaScript es un lenguaje basado en prototipos que contiene declaraciones sin clase, tal como se encuentran en  C++ o Java. (Esto es, a veces, confuso para los programadores que están acostubrados a los lenguajes con declaraciones de clase). En su lugar, JavaScript utiliza las funciones como si fueran clases. Consideremos un objeto persona con los campos nombre y apellido. Hay dos formas en las que se podrían mostrar: como "nombre apellido" o como "apellido, nombre". Usando las funciones y objetos que hemos tratado previamente, aquí hay una forma de hacerlo:

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido
    };
}
function nombreCompletoPersona(persona) {
    return persona.nombre + ' ' + persona.apellido;
}
function nombreCompletoPersonaInvertido(persona) {
    return persona.apellido + ', ' + persona.nombre;
}
> s = crearPersona("Simon", "Willison");
> nombreCompletoPersona(s);
Simon Willison
> nombreCompletoPersonaInvertido(s);
Willison, Simon
Ésto funciona, pero se ve bastante feo. Terminas con decenas de funciones en tu espacio de nombres global. Lo que realmente se necesita es una forma de adjuntar la función a un objeto. Como las funciones son objetos, es más fácil:

function crearPersona(nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
        nombreCompleto: function() {
            return this.nombre + ' ' + this.apellido;
        },
        nombreCompletoInvertido: function() {
            return this.apellido + ', ' + this.nombre;
        }
    };
}
> s = crearPersona("Simon", "Willison")
> s.nombreCompleto()
Simon Willison
> s.nombreCompletoInvertido()
Willison, Simon
Hay algo aquí que no hemos visto antes: es la palabra clave 'this'. incluída dentro de una función, 'this' se refierre al objeto actual. Lo que realmente significa es que, estará especificado por la forma en que llames a esa función. Si la llamas usando notación de puntos o notación de paréntesis en un objeto, ese objeto se convierte en 'this'. Si no se usa notación de puntos para llamarla, 'this' se refiere al objeto global. Esta es una causa frecuente de errores. Por ejemplo:

> s = crearPersona("Simon", "Willison");
> var nombreCompleto = s.nombreCompleto;
> nombreCompleto();
undefined undefined
Cuando llamamos a la función nombreCompleto(), 'this' está limitado al objeto global. Como no hay variables globales llamadas nombre o apellido obtenemos undefined para cada una.

Podemos aprovechar la palabra clave 'this' para mejorar nuestra función crearPersona:

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido;
    };
    this.nombreCompletoInvertido = function() {
        return this.apellido + ', ' + this.nombre;
    };
}
var s = new Persona("Simon", "Willison");
Hemos introducido otra palabra clave: 'new'. new está fuertemente relacionada con 'this'. Lo que hace es crear un nuevo objeto vacío desde cero, y luego llama a la función especificada con 'this' para establecer ese nuevo objeto. Observa, sin embargo, que la función especificada con 'this' no retorna ningún valor, sino simplemente modifica el objeto this. Es new la que devuelve el objeto this al lugar de la llamada. Las funciones que están diseñadas para ser llamadas por 'new' se llaman funciones constructoras. La práctica común es escribir con mayúsculas estas funciones como un recordatorio para llamarlas con new.

Nuestros objetos "persona" están mejorando , pero aún tienen algunas asperezas. Cada vez que creamos un objeto "persona" estamos creando dos objetos de funciones nuevas en su interior. ¿No sería mejor si este código se compartiera?

function nombreCompletoPersona() {
    return this.nombre + ' ' + this.apellido;
}
function nombreCompletoPersonaInvertido() {
    return this.apellido + ', ' + this.nombre;
}
function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.nombreCompleto = nombreCompletoPersona;
    this.nombreCompletoInvertido = nombreCompletoPersonaInvertido;
}
Así está mejor: estamos creando las funciones de los métodos sólo una vez y asignandoles las referencias dentro del constructor. ¿Podemos hacer algo mejor que eso? La respuesta es sí:

function Persona(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}
Persona.prototype.nombreCompleto = function() {
    return this.nombre + ' ' + this.apellido;
};
Persona.prototype.nombreCompletoInvertido = function() {
    return this.apellido + ', ' + this.nombre;
};
Persona.prototype es un objeto compartido por todas las instancias de  Persona. Forma parte de una cadena de búsqueda (que tiene un nombre especial, "cadena de prototipos"): siempre que intentes acceder a una propiedad de Persona que no exista internamente, JavaScript chequeará Person.prototype para ver si existe allí. Como resultado, cualquier cosa asignada a Person.prototype quedará disponible para todas las instancias de ese constructor a través del objeto this.

Esta es una herramienta increíblemente poderosa. JavaScript te permite modificar el prototipo de algo en cualquier parte de tu programa, lo que significa que puedes agregar métodos adicionales a los objetos que existan en tiempo de ejecución:

> s = new Persona("Simon", "Willison");
> s.nombreEnMayusculas();
TypeError on line 1: s.nombreEnMayusculas is not a function
> Persona.prototype.nombreEnMayusculas = function() {
    return this.nombre.toUpperCase()
};
> s.nombreEnMayusculas()
SIMON
Es interesante que también puedes agregar cosas al prototipo de objetos propios de JavaScript. Agregamos un método a String que devuelve la cadena invertida:

> var s = "Simon";
> s.reversed()
TypeError on line 1: s.reversed is not a function
> String.prototype.reversed = function() {
    var r = "";
    for (var i = this.length - 1; i >= 0; i--) {
        r += this[i];
    }
    return r;
};
> s.reversed()
nomiS
¡Nuestro método funciona bien incluso en cadenas literales!

> "Ahora se puede invertir esto".reversed()
otse ritrevni edeup es arohA
Como mencioné antes, el prototipo forma parte de una cadena. La raíz de esa cadena es Object.prototype, cuyos métodos incluyen a  toString() — Este es el método que se llama cuando tratas de representar un objeto como cadena. Es útil para corregir errores en nuestros objetos Persona:

> var s = new Persona("Simon", "Willison");
> s
[object Object]
> Persona.prototype.toString = function() {
    return '<Persona: ' + this.nombreCompleto() + '>';
}
> s
<Persona: Simon Willison>
¿Recuerdas que avg.apply() tenía un primer argumento nulo? Podemos revisar eso ahora. El primer argumento para apply() es el objeto que debería tratarse como 'this'. Por ejemplo, aquí hay una implementación trivial de 'new':

function trivialNew(constructor, ...args) {
    var o = {}; // Crear un objeto
    constructor.apply(o, ...args);
    return o;
}
No es una réplica exacta de new porque no establece la cadena de prototipos (sería difícil de ilustrar). No es algo que utilizaras muy amenudo, pero es útil para aprender. En este código, ...args (incluyendo la elipsis) se llama "argumentos restantes" – como su nombre lo indica, contiene el resto de los argumentos. Actualmente, esta característica es experimental y no está disponible en Firefox; Se recomienda utilizar arguments por ahora.

Llamar...

var bill = trivialNew(Person, "William", "Orange");
...es, por lo tanto, casi equivalente a...

var bill = new Person("William", "Orange");
apply() tiene una función hermana llamada call, que de nuevo te permite establecer 'this' pero toma una lista de argumentos expandida al contrario que una matriz.

function lastNameCaps() {
    return this.last.toUpperCase();
}
var s = new Person("Simon", "Willison");
lastNameCaps.call(s);
// Is the same as:
s.lastNameCaps = lastNameCaps;
s.lastNameCaps();
Funciones internas

Se permiten declaraciones de funciones javascript dentro de otras funciones. Hemos visto esto antes, con una primera función crearPersona(). Un detalle importante de las funciones anidadas en JavaScript es que pueden acceder a las variables del entorno de sus funciones padres:

function betterExampleNeeded() {
    var a = 1;
    function oneMoreThanA() {
        return a + 1;
    }
    return oneMoreThanA();
}
Esto provee un gran manejo de utilidad para escribir un código más flexible. Si una función se apoya en una o dos funciones que no son útiles para ninguna otra parte de tu código, puedes anidar esas funciones de utilidad dentro de la función que será llamada desde otro lugar. Esto mantiene bajo el número de funciones que están en el entorno global, lo que siempre es bueno.

Esto es un gran contador para engañar a las variables globales. Cuando escribimos código complejo es tentador usar a veces variables globales para compartir su valor entre múltiples funciones — lo que conduce a un código difícil de mantener. Las funciones anidadas pueden compartir variables de sus padres, también tú puedes usar ese mecanismo para emparejar funciones cuando esto tiene sentido sin contaminar tus espacios de nombres globales — 'globales locales' si prefieres. Esta técnica debe ser usada con precaución, pero es una capacidad muy útil de considerar.

Cerraduras (closures)
Esto nos lleva a una de las abstracciones más poderosas que Javascript tiene para ofrecer, pero además potencialmente confusa. ¿Qué hace ésta?

function hacerSumadora(a) {
    return function(b) {
        return a + b;
    };
}
x = hacerSumadora(5);
y = hacerSumadora(20);
x(6)
?
y(7)
?
El nombre de la función hacerSumadora debería aclararlo: crea nuevas funciones 'sumadoras', que al ser llamadas con un argumento, lo agregan al argumento con las que fueron creadas.

Lo que pasa acá es muy similar a lo que pasaba con las funciones internas vistas anteriormente: una función definida dentro de otra, tiene acceso a las variables de la función externa. La única diferencia aquí ha vuelto y, por lo tanto, el sentido común parecería dictar que las variables locales ya no existen. Pero aún sí existen. de otra manera, sería imposible que anden las funciones sumadoras. ¡Y lo que es más! Hay dos copias diferentes de las variables locales de  hacerSumadora. Una en la que a es 5 y una en la que a es 20. Así que el resultado de esas llamadas a la función queda de la siguiente manera:

x(6) // devuelve 11
y(7) // devuelve 27
Esto es lo que pasa en realidad. Cuando JavaScript ejecute una función, un objeto de entorno se crea para mantener las variables locales creadas dentro de esa función. Se inicializa con cualquier variable pasada a la función como parámetro. Esto es similar al objeto global en el que todas las variables locales residen, pero con un par de diferencias importantes: primeramente, se crea un nuevo objeto de entorno cada vez que una función comienza a ejecutarse y, segundo, a diferencia del objeto global (que es accesible como this y en los navegadores es accesible como window), a estos objetos de entorno no se puede acceder directamente desde tu código JavaScript. No hay mecanismo para iterar las propiedades del objeto de entorno actual, por ejemplo.

Así que cuando se llama a hacerSumadora, a se crea un objeto de entorno con una propiedad: a, que es el argumento pasado a la función hacerSumadora. Luego hacerSumadora devuelve una función creada recientemente. Normalmente el recolector de basura de JavaScript limpiaría el objeto de entorno creado por hacerSumadora en este punto, pero la función devuelta mantiene una referencia al objeto de entorno. Como resultado, el objeto de entorno no será recolectado como basura hasta que no hayan más referencias al objeto de la función que hacerSumadora devolvió.

Los objetos de entorno forman una cadena llamada cadena de entorno similar a la cadena de prototipos usada por el sistema de objetos de JavaScript.

Una cerradura es la combinación de una función y el objeto de entorno en el que fue creada.

Las cerraduras permiten guardar el estado. Como tales, suelen ser usadas en lugar de los objetos. Aquí se pueden encontrar varias introducciones a las cerraduras.

Pérdidas de memoria
Un efecto colateral desafortunado de las cerraduras ocasionan pérdidas de memoria muy fácilmente en Internet Explorer. JavaScript es un lenguaje con recolección de basura. Los objetos memoria asignada a su creación y esa memoria es reclamada por el navegador cuando no quedan referencias a un objeto. Los objetos provistos por el entorno del host son manipulados por ese entorno.

Los hosts de navegador necesitan manipular un gran número de objetos que representan la página HTML que se está mostrando, objetos del DOM. Depende del navegador la gestión de asignación y recupero de éstos.

Internet Explorer usa su propio esquema de recolección de basura para esto, separado del esquema usado para JavaScript. Es la interacción entre los dos la que puede causar pérdidas de memoria.

Una pérdida de memoria en IE ocurre cada vez que se forma una referencia circular entre un objeto de JavaScript y uno nativo. Considera lo siguiente:

function leakMemory() {
    var el = document.getElementById('el');
    var o = { 'el': el };
    el.o = o;
}
La referencia circular formada anteriormente origina pérdida de memoria. IE no liberará la memoria utilizada por el y o hasta que el navegador sea reiniciado completamente.

Es probable que el caso anterior pase desapercibido. Las pérdidas de memoria sólo se vuelven una preocupación real en aplicaciones de extensa ejecución o aplicaciones que pierden mucha memoria debido a grandes estructuras de datos o patrones de pérdida dentro de ciclos repetitivos.

Raramente las pérdidas de memorias sean tan obvias como en el ejemplo. A menudo, la estructura de datos perdidos puede tener muchas capas de referencias, escondiendo la referencia circular.

Las cerraduras hacen que sea fácil crear pérdidas de memoria sin que se tenga intención. Considera esto:

function addHandler() {
    var el = document.getElementById('el');
    el.onclick = function() {
        el.style.backgroundColor = 'red';
    };
}
El anterior código configura a un elemento para que se vuelva rojo al hacer clic sobre él. También crea pérdida de memoria. ¿Por qué? Porque la referencia a el es atrapada inadvertidamente por la cerradura creada por la función interna anónima. Esta crea una referencia circular entre un objeto JavaScript (la función) y el objeto nativo (el).

Hay algunas soluciones para este problema. La más simple es no usar la variable el:

function addHandler(){
    document.getElementById('el').onclick = function(){
        this.style.backgroundColor = 'red';
    };
}
Sorprendentemente, un truco para romper las referencias circulares introducidas por una cerradura es agregar otra cerradura:

function addHandler() {
    var clickHandler = function() {
        this.style.backgroundColor = 'red';
    };
    (function() {
        var el = document.getElementById('el');
        el.onclick = clickHandler;
    })();
}
La función interna se ejecuta inmediatamente y esconde sus contenidos de la cerradura creada con clickHandler.

Otro buen truco para evitar las cerraduras es romper las referencias circulares durante el evento window.onunload. Muchas bibliotecas de eventos harán esto por tí. Observa que al hacer eso se desactive bfcache en Firefox 1.5, así no debes registrar un sensor (listener) unload en Firefox, a menos que tengas otras razones para hacerlo así.
