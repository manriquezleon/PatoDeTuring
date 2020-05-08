# Introduccion a Google Colab

## About

Durante este fast course de Google Colab aprenderas a usar uno de los entornos más completos para trabajar con ciencia de datos.
 

## Nuestros primeros pasos.

El documento que estás leyendo no es una página web estática, sino un entorno interactivo denominado notebook de Colab, que permite escribir y ejecutar código.

Por ejemplo, esta es una celda de código con una secuencia de comandos Python corta que calcula un valor, lo almacena en una variable y devuelve el resultado: 

``` python
seconds_in_a_day = 24 * 60 * 60
seconds_in_a_day
```

Los notebooks de Colab te permiten combinar código ejecutable y texto enriquecido en un único documento, junto con imágenes, HTML, LaTeX y mucho más. Los notebooks que crees en Colab se almacenan en tu cuenta de Google Drive. Puedes compartir fácilmente los notebooks de Colab con amigos o compañeros de trabajo para que realicen comentarios o los editen. Si quieres obtener más información, consulta la Descripción general de Colab. Para crear un nuevo notebook de Colab, ve al menú "Archivo" que aparece más arriba o usa este vínculo: crear un nuevo notebook de Colab.

Los notebooks de Colab son notebooks de Jupyter que aloja Colab. Para obtener más información sobre el proyecto Jupyter, visita jupyter.org.


Hablando de Ciencia de datos
Con Colab, puedes aprovechar por completo las bibliotecas de Python populares para analizar y visualizar datos. La celda de código que se incluye a continuación usa NumPy para generar algunos datos aleatorios y matplotlib para visualizarlos. Para editar el código, haz clic en la celda y comienza a editar.

``` python
import numpy as np
from matplotlib import pyplot as plt

ys = 200 + np.random.randn(100)
x = [x for x in range(len(ys))]

plt.plot(x, ys, '-')
plt.fill_between(x, ys, 195, where=(ys > 195), facecolor='g', alpha=0.6)

plt.title("Sample Visualization")
plt.show()
```
Trandose de ML
Colab nos permite importar un conjunto de datos de imágenes, entrenar un clasificador de imágenes en él y evaluar el modelo con solo unas pocas líneas de código. Los notebooks de Colab ejecutan código en los servidores alojados en la nube de Google, lo que significa que puedes aprovechar al máximo el hardware de Google, incluidas las GPU y TPU, independientemente de la potencia de tu máquina. Lo único que necesitas es un navegador.

Instalar librerias.

## Usar Datos.

## Trabajar nuestros datos en Google Colab.

## Graficar nuestros resultados.

## Proximos pasos.📚

* Introduccion a Python.
* Python para ciencia de datos.
* Probabilidad + Python.
* Introduccion a la estadistica con Python.
* Nuestros primeros pasos de Machine Learning en Python.
* Recolectores de datos. (Armando nuestro data set con Python).
* Introduccion a la ciencia de datos con Python.
* Fundamentos de R para ciencia de datos.
* Ciencia de datos con R, de colibris a ciudades.

## Referencias , fuentes y articulos interesantes.  📚
