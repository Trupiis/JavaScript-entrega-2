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

        if(IMC <= 18.5){
            explicacion.textContent = `La recomendación es ${bajoPeso.recomendacion}`
        }else if(IMC <= 24.9){
            explicacion.textContent = `La recomendación es ${buenPeso.recomendacion}`
        }else if(IMC <= 29.9){
            explicacion.textContent = `La recomendación es ${buenPeso.recomendacion}`
        }else if(IMC <= 39.9){
            explicacion.textContent = `La recomendación es ${Obeso.recomendacion}`
        }else{
            explicacion.textContent = `La recomendación es ${obesidadExtrema.recomendacion}`
        }

        
}});

    import {bajoPeso, buenPeso, sobrePeso, Obeso, obesidadExtrema } from './objects.js';


    