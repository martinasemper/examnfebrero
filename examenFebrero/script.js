let imagen = document.querySelector('img')
let Anterior = document.querySelector('#Anterior')
let Siguiente = document.querySelector('#Siguiente')
let titulo = document.querySelector('h1')
let archivo = 'auto.fiat.jpg'


Siguiente.onclick = function() {
   
    if (archivo == 'auto.fiat.jpg') {
        //el siguiente va a ser Perro
        imagen.src = 'auto.2.jpg'
        titulo.textContent = 'El Fiat Fastback es un SUV crossover cupé subcompacto producido por Fiat principalmente para el mercado sudamericano, que fue lanzado en agosto de 2022. '
        archivo = 'auto.2.jpg'
    } else if (archivo == 'auto.2.jpg') {
        imagen.src = 'auto3.jpg'
        titulo.textContent = 'es tu mejor cómplice para ambientes urbanos: practicidad, modernidad y gran tecnología para llegar a donde quieras, a tu manera.'
        archivo = 'auto3.jpg'
    } else if (archivo == 'auto3.jpg') {
        imagen.src = 'camioneta.jpg'
        titulo.textContent = 'La Fiat Toro o Ram 1000 es una camioneta pickup mediana, producida por el fabricante ítalo-estadounidense Fiat Chrysler Automobiles, para su producción y venta en el mercado del Mercosur, bajo la marca italiana Fiat.'
        archivo = 'camioneta.jpg'
    } else {
        imagen.src = 'auto.fiat.jpg'
        titulo.textContent = 'El Fiat Cronos es un sedán familiar fabricado en Argentina.'
        archivo = 'auto.fiat.jpg'
    }
}


Anterior.onclick = function() {
    
    if (archivo == 'auto.fiat.jpg') {
        imagen.src = 'camioneta.jpg'
        titulo.textContent = 'La Fiat Toro o Ram 1000 es una camioneta pickup mediana, producida por el fabricante ítalo-estadounidense Fiat Chrysler Automobiles, para su producción y venta en el mercado del Mercosur, bajo la marca italiana Fiat.'
        archivo = 'camioneta.jpg'
    } else if (archivo == 'auto3.jpg') {
        imagen.src = 'auto.fiat.jpg'
        titulo.textContent = 'El Fiat Cronos es un sedán familiar fabricado en Argentina.'
        archivo = 'auto.fiat.jpg'
    } else if (archivo == 'auto.2.jpg') {
        imagen.src = 'auto.2.jpg'
        titulo.textContent = ''
        archivo = 'auto.2.jpg'
    } else {
        imagen.src = 'auto3.jpg'
        titulo.textContent = 'es tu mejor cómplice para ambientes urbanos: practicidad, modernidad y gran tecnología para llegar a donde quieras, a tu manera.'
        archivo = 'auto3.jpg'
    }
}






 

