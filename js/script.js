const colElem = document.querySelector(".col")
console.log(colElem);
const btnElem =document.querySelector(".btn")

for (let i = 1; i <= 100; i++) {
    console.log(i);
    const newCell = document.createElement("div");
    newCell.classList.add("cell");
    newCell.innerHTML = i;
    newCell.addEventListener ("click", handleCellClick);
    colElem.append(newCell)
}

btnElem.addEventListener ("click",function() {
    colElem.classList.remove("d-none")
})

function handleCellClick() {
    this.classList.add("lightblue")
    console.log(this);
}