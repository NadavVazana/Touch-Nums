// returns random number from the min to max (not included the max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}


// create board with the number of rows and cols thats given
function createBoard(ROWS, COLS) {
    var board = []
    for (var i = 0; i < ROWS; i++) {
        board[i] = []
        for (var j = 0; j < COLS; j++) {
            board[i][j] = createCell(i, j)

        }

    }
    return board

}

// rendering a board from the board and element board thats given
function renderBoard(board, elBoard) {
    strHTML = ''
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>'
        for (var j = 0; j < board[0].length; j++) {
            strHTML += `<td ${renderCell(i, j, board)}</td>`



        }
        strHTML += '</tr>'

    }
    elBoard.innerHTML = strHTML

}


// create object cell with i,j and a fill to the cell (default = '')
function createCell(rowIdx, colIdx, inCell = '') {
    return {
        i: rowIdx,
        j: colIdx,
        element: inCell
    }


}


// return inner html with class = cell-(i)-(j) and inner text with the element 
//inside the board thats given
function renderCell(rowIdx, colIdx, board) {
    return `class="cell-${rowIdx}-${colIdx}"> ${board[rowIdx][colIdx].element}`

}


// returns number of neighbors by the given cell and board
function countNeighbors(cell, board) {
    var count = 0
    var rowIdx = cell.i
    var colIdx = cell.j
    for (var i = rowIdx - 1; i <= rowIdx + 1; i++) {
        if (i < 0 || i >= board.length) continue
        for (var j = colIdx - 1; j <= colIdx + 1; j++) {
            if (j < 0 || j >= board[0].length) continue
            if (rowIdx === i && colIdx === j) {

                continue
            }
            if (board[i][j]) {
                count++
            }

        }

    }
    return count
}


// returns random color hex
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}





// returns an array of all the empty cells (objects)
function getEmptyCell(board) {
    emptyCells = []
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {
            if (!board[i][j].element) {
                emptyCells.push(board[i][j])

            }

        }

    }
    return emptyCells
}




