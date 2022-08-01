var gCount
var gBoard
var gTime = document.querySelector('.timer')
var gStartTime
var gTimePassed
var gState = 'Easy'
var gScoreBoard = document.querySelector('.body-score')
var gNums = []
var gDifficulty = 4
function init() {
    gCount = 1
    gDifficulty 
    shuffleNums()
    gBoard = createBoard(gDifficulty)
    renderBoard(gBoard)

}

function createBoard(difficulty) {
    var board = []
    for (var i = 0; i < difficulty; i++) {
        board[i] = []
        for (var j = 0; j < difficulty; j++) {
            board[i][j] = gNums.pop()

        }

    }
    return board
}

function shuffleNums() {
    for (var i = 0; i < gDifficulty ** 2; i++) {
        gNums[i] = i + 1

    }
    gNums = gNums.sort((a, b) => 0.5 - Math.random())

}

function renderBoard(board) {
    var strHTML = ''
    for (var i = 0; i < gDifficulty; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < gDifficulty; j++) {
            strHTML += `<td class="cell" onclick="cellClicked(this)">${board[i][j]}</td>`

        }
        strHTML += '</tr>'

    }
    var elBoard = document.querySelector('tbody.board')
    elBoard.innerHTML = strHTML
    // console.log(elBoard);

}

function cellClicked(cell) {

    if (+cell.innerText === gCount) {
        if (gCount === 1) {
            gStartTime = Date.now()
            gTimePassed = setInterval(startTimer, 1)
        }
        if(gCount === gDifficulty**2){
            clearInterval(gTimePassed)
            gScoreBoard.innerHTML += `<td>${gTime.innerText}</td><td> ${gState} </td>`
            var tryAgain = document.querySelector('.try-again').style.display = 'block'
            
        }
        cell.style.backgroundColor = 'red'
        gCount++
        
    }

}

function startTimer() {
    var currTime = Date.now() - gStartTime
   
    var sec = parseInt(currTime / 1000)
    gTime.innerText = `${sec}`



}

function tryAgain(elButton){
    init()
    elButton.style.display = 'none'
   

}

function changeDifficulty(elButton){
    var tryButton = document.querySelector('.try-again')
    if(elButton.innerText === 'Easy'){
        gState = 'Easy'
        gDifficulty = 4
        clearInterval(gTimePassed)
        tryAgain(tryButton)
    }
    else if(elButton.innerText === 'Hard'){
        gState = 'Hard'
        gDifficulty = 5
        clearInterval(gTimePassed)
        tryAgain(tryButton)
    }
    else if(elButton.innerText === 'EXTREME'){
        gState = 'Extreme'
        gDifficulty = 7
        clearInterval(gTimePassed)
        tryAgain(tryButton)
    }
}