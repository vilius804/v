"use strict"

const section = document.querySelector('section');
const articles = document.querySelectorAll('article');
const button = document.querySelector('button')
const spalva = document.querySelector('input:nth-of-type(2)')
const dydis = document.querySelector('input:nth-of-type(1)')
const sriftas = document.querySelector('input:nth-of-type(3)')



button.addEventListener('click', keiskViska);

function keiskViska(){
    for(let article of articles){
        article.style.fontSize = dydis.value;
        article.style.backgroundColor = spalva.value;
        article.style.fontFamily = sriftas.value;
    }
}