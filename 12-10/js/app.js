"use strict"
function $(x) {return document.getElementById(x);}

const section = document.querySelector('section');
const buttonP = document.querySelector('.Pateikti');
const buttonM = document.querySelector('.Maisyti');
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const nuotraukos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];


buttonP.addEventListener('click', daryti);
//buttonM.addEventListener('click', maisyti);

function daryti() {
        nuotraukos.forEach(function (image) {// for each link l in ArrayOfImages
            let list = document.createElement('li');
            ul.appendChild(list);
            let img = document.createElement('img');// create an img element

            img.src = image;                            // set its src to the link l
            img.height = "400";
            img.width = "400";
            li.appendChild(img);          // append it to the body
        });
    buttonP.style.display = "none";
}

