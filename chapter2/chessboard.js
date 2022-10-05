// Chessboard
let chessboard = "";
const dim = 14;
for (let i = 1; i <= dim; i++) {
    for (let j = 1; j <= dim; j++) {
        if ((i+j) % 2 === 0) {
            chessboard += " ";
        } else {
            chessboard += "#";
        }
    }
    //chessboard += "\n";
    console.log(chessboard);
    chessboard = "";
}

//console.log(chessboard);