const board = document.getElementById('board');
const dims = 225;

let boardSquares = [];
let tripWordScore = [1,5,15,25,30,35];
let tripLetScore = [2,6,8,10]
let dblWordScore = [50,52,55];
let dblLetScore = [100,150,200];

class Square {
    constructor(pos) {
        this.pos = pos;
    }
}

const displayBoard = () => {

    for(i = 1; i <= dims; i++) {
        let newSquare = new Square(i);
        boardSquares.push(newSquare);
    }

    console.log(boardSquares);

    boardSquares.map((s, i) => {
        let div = document.createElement('div');
        div.setAttribute('key', i);
        div.textContent = setDetails(s.pos);
        // div.style = `background-color: ${setColor(s.pos)}`;
        div.style = setColor(s.pos);
        board.appendChild(div);
    })



}

function setColor(posNumber) {
    let pos = posNumber;
        switch(true) {
            case tripWordScore.includes(pos) :
                return `
                    background-color: var(--tripWord);
                `
                break;
            case tripLetScore.includes(pos): 
                return `
                    background-color: var(--tripLet);
                    color: white;
                `
                break;
            case dblWordScore.includes(pos) :
                return `
                    background-color: var(--dblWord);
                `
                break;
            case dblLetScore.includes(pos) :
                return `
                    background-color: var(--dblLet);
                `
                break;
            default :
                return 'tan'
        }
}

function setDetails(posNumber) {
    let pos = posNumber;

        switch(true) {
            case tripWordScore.includes(pos) :
                return 'Triple Word Score'
                break;
            case tripLetScore.includes(pos): 
                return 'Triple Letter Score'
                break;
            case dblWordScore.includes(pos) :
                return 'Double Word Score'
                break;
            case dblLetScore.includes(pos) :
                return 'Double Letter Score'
                break;
            default :
                return '';
        }
}


displayBoard();