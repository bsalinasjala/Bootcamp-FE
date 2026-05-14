## Prompt 1: pedir ayuda desde tu avance actual
Tengo esta imagen de referencia y estoy haciendo el layout en HTML y CSS separado en index.html y style.css.

Ya avancé hasta esta parte del HTML:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Challenge 1 - CSS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="contenedor">

  <div class="menu"></div>

  <div class="principal">
    <div class="header"></div>
    <div class="contenido">

Y este es mi CSS actual:

body {
  font-family: Arial, sans-serif;
  padding: 0;
  margin: 0;
}

.contenedor {
  min-height: 100vh;
  display: flex;
  background-color: #00ffd5;
}

.menu {
  flex: 1;
  background-color: #000000;
}

.principal {
  flex: 3;
  display: flex;
  flex-direction: column;
}

Según la imagen, me falta completar el área de contenido con 4 cuadros rosados, 2 arriba y 2 abajo.

Ayúdame a avanzar paso a paso usando flexbox, sin rehacer todo desde cero.
Primero dime qué HTML me falta cerrar o agregar dentro de contenido, y luego qué CSS necesito agregar.
## Prompt 2: completar el HTML de los cuadros
Ya tengo dentro de .principal un header y un div contenido.

Ahora quiero agregar los 4 cuadros dentro de .contenido.

Dame solo la parte del HTML que debo colocar dentro de .contenido y dime cómo cerrar correctamente los divs que faltan.
No me des todo el HTML completo.
## Prompt 3: CSS para acomodar los cuadros
Ya agregué 4 divs con clase cuadro dentro de .contenido.

Ahora necesito que esos cuadros se acomoden en 2 columnas y 2 filas usando flexbox.

Dame solo el CSS que debo agregar a .contenido y .cuadro.
Quiero usar display flex, flex-wrap, gap y padding.
## Prompt 4: entender flex-wrap
Explícame de forma sencilla qué hace flex-wrap: wrap en mi .contenido.

Tengo 4 cuadros dentro de un contenedor con display flex.
Quiero entender por qué los cuadros bajan a la siguiente fila.
## Prompt 5: entender gap y padding
Explícame la diferencia entre gap y padding en mi diseño.

Estoy usando gap para separar los cuadros entre ellos y padding para separar los cuadros del borde gris del contenedor.
Explícalo con palabras simples.
## Prompt 6: entender flex: 1 1 40%
Explícame esta línea de CSS:

.cuadro {
  flex: 1 1 40%;
}

Quiero entender qué significa:
- el primer 1
- el segundo 1
- el 40%

También explícame por qué eso ayuda a que entren 2 cuadros por fila.
## Prompt 7: revisar el código completo
Este es mi HTML y CSS actual.

Revísalo como ejercicio de clase.
No quiero que lo rehagas completo desde cero.

Solo dime:
- qué está bien
- qué falta
- si estoy usando flexbox correctamente
- qué cambios mínimos debo hacer para que se parezca más a la imagen
## Prompt 8: pedir explicación final para presentar
Explícame mi layout como si tuviera que presentarlo en clase.

Quiero explicar:
- cómo el contenedor usa flexbox
- cómo se divide entre menu y principal
- cómo principal usa flex-direction column
- cómo header y contenido se reparten el espacio
- cómo los cuadros se acomodan usando flex-wrap
## paginas que use
- para colores 

https://pinetools.com/image-color-picker 

- google ModoIA 
shortcut para armar el html en vscodeEl shortcut para armar la estructura básica de HTML5 en Visual Studio Code consiste en escribir ! (signo de exclamación) o html:5 y luego presionar la tecla Tab o Enter

