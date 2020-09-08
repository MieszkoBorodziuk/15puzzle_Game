let nrMoves = -15;

function swapPuzzle(puzzle1, puzzle2) {

    let memor = document.getElementById(puzzle1).className;
    document.getElementById(puzzle1).className = document.getElementById(puzzle2).className;
    document.getElementById(puzzle2).className = memor;
    nrMoves++;
    document.getElementById("moves").innerHTML = "Moves:" + nrMoves;
    checkWin();

}
function verification(line, column) {

    if (column < 5) {
        if (document.getElementById("puzzle" + line + (column + 1)).className === "element15") {
            swapPuzzle("puzzle" + line + column, "puzzle" + line + (column + 1));
        }
    }
    if (column > 1) {
        if (document.getElementById("puzzle" + line + (column - 1)).className === "element15") {
            swapPuzzle("puzzle" + line + column, "puzzle" + line + (column - 1));
        }
    }
    if (line < 3) {
        if (document.getElementById("puzzle" + (line + 1) + column).className === "element15") {
            swapPuzzle("puzzle" + line + column, "puzzle" + (line + 1) + column);
        }
    }
    if (line > 1) {
        if (document.getElementById("puzzle" + (line - 1) + column).className === "element15") {
            swapPuzzle("puzzle" + line + column, "puzzle" + (line - 1) + column);

        }
    }

}

function mix() {
    nrMoves = -15;
    for (let line = 1; line <= 3; line++) {
        for (let column = 1; column <= 5; column++) {

            let line2 = Math.floor(Math.random() * 3) + 1;
            let column2 = Math.floor(Math.random() * 5) + 1;

            swapPuzzle("puzzle" + line + column, "puzzle" + line2 + column2);
        }
    }
}
function checkWin() {
    let tabDiv =
        [document.getElementById("puzzle11"), document.getElementById("puzzle12"), document.getElementById("puzzle13"),
            document.getElementById("puzzle14"), document.getElementById("puzzle15"), document.getElementById("puzzle21"),
            document.getElementById("puzzle22"), document.getElementById("puzzle23"), document.getElementById("puzzle24"),
            document.getElementById("puzzle25"), document.getElementById("puzzle31"), document.getElementById("puzzle32"),
            document.getElementById("puzzle33"), document.getElementById("puzzle34"), document.getElementById("puzzle35")];


    if (tabDiv[0].className === "element1" && tabDiv[1].className === "element2" && tabDiv[2].className === "element3"
        && tabDiv[3].className === "element4" && tabDiv[4].className === "element5" && tabDiv[5].className === "element6"
        && tabDiv[6].className === "element7" && tabDiv[7].className === "element8" && tabDiv[8].className === "element9"
        && tabDiv[9].className === "element10" && tabDiv[10].className === "element11" && tabDiv[11].className === "element12"
        && tabDiv[12].className === "element13" && tabDiv[13].className === "element14" && tabDiv[14].className === "element15") {

        function Op() {
            for (let i = 0; i <= 14; i++) {
                tabDiv[i].style.opacity -= "0.02";
                tabDiv[i].onclick="";
                document.getElementById("puzzle").style.opacity -= "0.001";
            }
        }
        for (let i = 0; i <= 4000; i = i + 70) {

            setTimeout(Op, i);
        }
    }
}
