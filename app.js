document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')
    let currentPlayer = 1


    for(let i=0, len = squares.length; i < len; i++)

    (function(index) {
        //Add an onclick to each square in grid
        squares[i].onclick = function() {
            //if slot below current slot is taken, you can go ontop of it
            if(squares[index + 7].classList.contains('taken') && !squares[index].classList.contains('taken')) {
                if(currentPlayer === 1) {
                    squares[index].classList.add('taken', 'player-one')

                    //switch to player 2
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer === 2) {
                    squares[index].classList.add('taken', 'player-two')

                    //switch to player 1
                    currentPlayer = 1
                    displayCurrentPlayer.innerHTML = currentPlayer
                }
            } else {
                alert('Cannot go there')
            }
        }
    })(i)

    //Checking board for winning arrays
    function connectFour() {
        const winningArrays = [
            //horizontal winnings
            [0,1,2,3],
            [1,2,3,4],
            [2,3,4,5],
            [3,4,5,6],
            [7,8,9,10],
            [8,9,10,11],
            [9,10,11,12],
            [10,11,12,13],
            [14,15,16,17],
            [15,16,17,18],
            [16,17,18,19],
            [17,18,19,20],
            [21,22,23,24],
            [22,23,24,25],
            [23,24,25,26],
            [24,25,26,27],
            [28,29,30,31],
            [29,30,31,32],
            [30,31,32,33],
            [31,32,33,34],
            [35,36,37,38],
            [36,37,38,39],
            [37,38,39,40],
            [38,39,40,41],
            //vertical winnings
            [0,7,14,21],
            [7,14,21,28],
            [14,21,28,35],
            [1,8,15,22],
            [8,15,22,29],
            [15,22,29,36],
            [2,9,16,23],
            [9,16,23,30],
            [16,23,30,37],
            [3,10,17,24],
            [10,17,24,31],
            [17,24,31,38],
            [4,11,18,25],
            [11,18,25,32],
            [18,25,32,39],
            [5,12,19,26],
            [12,19,26,33],
            [19,26,33,40],
            [6,13,20,27],
            [13,20,27,34],
            [20,27,34,41],
            //diagonal going up winnings 
            [21,15,9,3],
            [28,22,16,10],
            [22,16,10,4],
            [35,29,23,17],
            [29,23,17,11],
            [23,17,11,5],
            [36,30,24,18],
            [30,24,18,12],
            [24,18,12,6],
            [37,31,25,19],
            [31,25,19,13],
            [38,32,26,20],
            //diagonal going down winnings
            [14,22,30,38],
            [7,15,23,31],
            [15,23,31,39],
            [0,8,16,24],
            [8,16,24,32],
            [16,24,32,40],
            [1,9,17,25],
            [9,17,25,33],
            [17,25,33,41],
            [2,10,18,26],
            [10,18,26,34],
            [3,11,19,27]
        ]
          
        //Take 4 values in each winningArrays and put them into square
            for(let y=0; y < winningArrays.length; y++) {
                const square1 = squares[winningArrays[y][0]]
                const square2 = squares[winningArrays[y][1]]
                const square3 = squares[winningArrays[y][2]]
                const square4 = squares[winningArrays[y][3]]

                //now check those arrays to see if they all have class of player one
                if(square1.classList.contains('player-one') &&
                    square2.classList.contains('player-one') &&
                    square3.classList.contains('player-one') &&
                    square4.classList.contains('player-one')) {
                        return result.innerHTML = ('Player One!')
                    }
                    //now check for player two
                    else if(square1.classList.contains('player-two') &&
                    square2.classList.contains('player-two') &&
                    square3.classList.contains('player-two') &&
                    square4.classList.contains('player-two')) {
                        return result.innerHTML = 'Player Two!'
                    } 
            }   
    }

    //Add eventListener to each square that will trigger connectFour function on click
    squares.forEach(square => square.addEventListener('click', () => connectFour()))

})