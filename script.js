
/*funcion agregar con parametro de valor que toma los valores que se asignan como 
parámetro al método agregar y son llamados con el evento asignado al botón, 
*/

function agregar(valor){ 
    document.getElementById('pantalla').value += valor
}
/*se toma el elemento  dentro del documento html en el input pantalla, 
se actualiza el valor de un elemento HTML con el id pantalla, se accede al
valor del elemento con .value y se concatena, se junta mediante +=con el valor existente
(esto quiere decir que si coloco un numero en pantalla y quiero agregar otro, el anterior
no se borrará sino que se agregarán)*/

function borrar() {
    document.getElementById('pantalla').value = ''
}

/*esta funcion se llama desde borrar() y accede a un elemento dentro 
del documento de html, toma el valor el elemento
 que está en pantalla y lo convierte a vacío
*/

function calcular(){
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}

/* en esta funcion calcular que se llama desde el boton
declaramos una constante a la que le pasamos el valor que se encuentra
en la pantalla
luego definimos otra constante para que obtenga el valor de la pantalla
pero usando eval que tiene como funcion convertir una cadena de texto (que
es lo que por defecto obtenemos de pantalla) y se evaluan expresiones
matematicas o logicas y realiza el calculo ingresado.
Finalmente cambiamos el valor obtenido desde la pantalla 
por lo obtenido en resultado. 
*/