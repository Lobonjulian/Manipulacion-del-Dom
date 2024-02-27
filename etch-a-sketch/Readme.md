# Asignación

¡No olvides comprometerte temprano y con frecuencia! Usted puede!

1. Cree una página web con una cuadrícula de divs cuadrados de 16x16.

2. Crea los divs usando JavaScript. ¡No intente hacerlos a mano con copiar y pegar en su archivo HTML!.

- Es mejor colocar sus cuadrados de cuadrícula dentro de otro contenedor “ ” div ( que puede ir directamente en su HTML ).

- Use flexbox para hacer que los divs aparezcan como una cuadrícula (frente a solo uno en cada línea). A pesar del nombre, no se puede usar CSS Grid para esto.

- ¡Tenga cuidado con los bordes y márgenes, ya que pueden ajustar el tamaño de los cuadrados!
“OMG, ¿por qué no se crea mi cuadrícula???”

- ¿Enlazó su hoja de estilo CSS?
Abra las herramientas de desarrollo de su navegador.

- Compruebe si hay algún error en la consola JavaScript.

- Revise su panel “elements” para ver si los elementos realmente han aparecido pero de alguna manera están ocultos.

- Ve con voluntades y agrega console.log declaraciones en su JavaScript para ver si realmente se está cargando.

3. Configure un efecto “hover” para que las divisiones de cuadrícula cambien de color cuando el mouse pasa sobre ellas, dejando un rastro (pixelado) a través de su cuadrícula como lo haría un bolígrafo.

- Sugerencia: “Hovering” es lo que sucede cuando el ratón entra en un div y termina cuando el ratón lo deja. Puede configurar oyentes de eventos para cualquiera de esos eventos como punto de partida.
- Hay múltiples formas de cambiar el color de los divs, incluyendo:

- - Agregar una nueva clase al div.

- - Cambiar el color de fondo de las divazas usando JavaScript.

4. Agregue un botón a la parte superior de la pantalla que enviará al usuario una ventana emergente solicitando el número de cuadrados por lado para la nueva cuadrícula. Una vez ingresada, se debe eliminar la cuadrícula existente y se debe generar una nueva cuadrícula en el mismo espacio total que antes (por ejemplo, 960px de ancho) para que tengas un nuevo bloc de bocetos. Punta: Establezca el límite para la entrada del usuario en un máximo de 100. Un mayor número de cuadrados da como resultado que se utilicen más recursos informáticos, lo que podría causar retrasos, congelación o fallas que queremos evitar.

- Investigación button etiquetas en HTML y cómo puede hacer que una función JavaScript se ejecute cuando se hace clic en una.

- También echa un vistazo prompts.
- Deberías poder entrar 64 y haga que aparezca una nueva cuadrícula de 64x64 sin cambiar la cantidad total de píxeles utilizados.