const container = document.querySelector("#container");
const changeBtn = document.querySelector(".changeBtn");
let numCell = 0;
let cellSize = 55;
cellBorder = 1;


changeBtn.addEventListener("click", ()=>{
    numCell = parseInt(prompt("Escoge el tamaño de la matriz"));
    container.style.width = `${numCell * (cellSize + 2 * cellBorder)}px`;
    container.innerHTML = "";
    for (let i = 0; i < numCell* numCell; i++) { // 16x16 = 256 celdas
        const cell = document.createElement("div"); // Crear cada celda
        cell.classList.add("grid"); // Agregar clase
        container.appendChild(cell);
    }
})


