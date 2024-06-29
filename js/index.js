const body = document.body;

let titulo = document.getElementById('titulo')
titulo.innerText = "Calculadora de índice de masa corporal (IMC)"

titulo.classList.add("titulo")
header.classList.add("header")
seccion.classList.add("seccion")
formulario.classList.add("form")

let resultado = document.getElementById('resultado')
let boton = document.getElementById('boton');

boton.innerText = "CALCULAR"

document.getElementById('formulario').addEventListener('submit', function(event){
    event.preventDefault();

    let PesoIngresado = parseFloat(document.getElementById('inputPeso').value);
    let AlturaIngresadaCm = parseFloat(document.getElementById('inputAltura').value);

    let AlturaIngresadaM = AlturaIngresadaCm / 100;

    if(isNaN (PesoIngresado) || isNaN(AlturaIngresadaCm)){
        alert(`Por favor, ingrese un numero válido`)
    }else{
        let IMC = PesoIngresado / (AlturaIngresadaM * AlturaIngresadaM)

        let resultado = document.getElementById('resultadoIMC');

        resultado.innerHTML = ' ';

        let parrafo = document.createElement('p');

        parrafo.textContent = `Tu indice de masa corporal es ${IMC.toFixed(1)}`
        parrafo.classList.add('results')

        resultado.appendChild(parrafo);

        this.reset();

        resultado.classList.remove('resultado-oculto');
        resultado.classList.add('resultado-visible');

        let explicacion = document.createElement('p')

        resultado.appendChild(explicacion);


        explicacion.textContent = 
        (IMC <= 18.5) ? `La recomendación es ${bajoPeso.recomendacion}` : 
        (IMC > 18.5 && IMC <= 24.9) ? `Está en un buen peso, ${buenPeso.recomendacion}` :
        (IMC > 24.9 && IMC <= 29.9) ? `${sobrePeso.recomendacion}` :
        (IMC > 29.9 && IMC <= 39.9) ? `Es escencial ${Obeso.recomendacion}` : 
        (IMC > 39.9 && IMC <= 150) ? `${obesidadExtrema.recomendacion}` : 
        (alert('Ingrese datos validos'), explicacion.textContent);

/*  if(IMC <= 18.5){
            explicacion.textContent = `La recomendación es ${bajoPeso.recomendacion}`
        }else if(IMC >= 18.5 && edad <= 24.9){
            explicacion.textContent = `Está en un buen peso, ${buenPeso.recomendacion}`
        }else if(IMC >= 24.9 && edad<= 29.9){
            explicacion.textContent = `${sobrePeso.recomendacion}`
        }else if(IMC >= 29.9 && edad <= 39.9){
            explicacion.textContent = `Es escencial ${Obeso.recomendacion}`
        }else if(IMC <= 150){
            explicacion.textContent = `${obesidadExtrema.recomendacion}`
        }else {
            alert('Ingrese datos validos')
        }  */
}});

    import {bajoPeso, buenPeso, sobrePeso, Obeso, obesidadExtrema } from './objects.js';


    