const header = document.querySelector('header');
const section = document.querySelector('section');
let filmai = [
    {}
]



document.getElementById('btn').addEventListener('click', function () {
    let filmo_pavadinimas = document.getElementById("term").value;
    let requestURL = 'https://www.omdbapi.com/?apikey=e4db3ced&t=' + filmo_pavadinimas;
    console.log(requestURL);
    fetch(requestURL).then(function (res) {
        return res.json()
    }).then(function (res) {
        console.log(res)

    })
});




