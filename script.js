let count = 0
let countJs = document.getElementById("countJs")

function add() {
    count = count + 1
    countJs.innerText = count
}

add();