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
            if(squares[index + 7].classList.contains('taken')) {
                if(currentPlayer === 1) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-one')

                    //switch to player 2
                    currentPlayer = 2
                    displayCurrentPlayer.innerHTML = currentPlayer
                } else if (currentPlayer === 2) {
                    squares[index].classList.add('taken')
                    squares[index].classList.add('player-two')

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
            []
        ]
          
    }

})