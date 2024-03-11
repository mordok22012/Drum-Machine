 ### requerimientos de la app
  1. un contenedor que englobe la app con la id "drum-machine".
  2. Un elemento con la id "display" que muestre los cambios de estado en la app.
  3. Dentro de "drum-machine" debe haber 9 drum pad en los cuales se pueda hacer click.
     Cada uno con un nombre de clase de "drum-pad".
     Un ID único que describe el clip de audio que se configurará para activar el drum pad.
     Un texto interno que corresponde a una de las siguientes teclas en el teclado Q, W, E, A, S, D, Z, X, C los drum pad deben ser en este orden.
  4. Dentro de cada ".drum-pad" debe haber Un  elemento HTML5 de audio con:
        un atributo src apuntando a un clip de audio. 
        Un nombre de clase de "clip". 
        Un id  correspondiente al texto interno de su elemento padre ".drum-pad" (e.g. id="Q", id="W", id="E" etc.).
  5. Cuando haga click en un elemento ".drum-pad" el clip de audio contenido en su elemento hijo "audio" debe ser gatillado.

  6. Cuando yo presiono la tecla gatillo asociada con cada ".drum-pad" el clip de audio contenido en cada elemento "audio" debe ser gatillado.
  (e.g. pressing the Q key should trigger the drum pad which contains the string Q, pressing the W key should trigger the drum pad which contains the string W, etc.).

  7.  cuando un ".drum-pad" es gatillado, un string describiendo el clip de audio asociado es mostrado como el texto interno del elemento "#display" (each string must be unique).


### paleta de colores
celadon : #B9D8C2 
light blue : #9AC2C9
cadet gray : #8AA1B1
ebony : #4A5043
sunglow : #FFCB47

### Ideas para mejorar 
1. poner un titulo arriba de la app.
1. un marco copado.