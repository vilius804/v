const stul = document.querySelector('.stul');
const eil = document.querySelector('.eil');
const btn = document.querySelector('.padaryti');
const table = document.querySelector(".myTable");

btn.addEventListener('click', makeTable);

function makeTable() {
    for(let i=0; i<eil.value; i++){
        let row =table.insertRow(i);
        for(let j=0; j<stul.value; j++){
            row.insertCell(j).appendChild(document.createTextNode('New cell'));
        }
    }
}

makeTable();

makeTable2();
