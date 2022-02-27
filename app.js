const containers = document.getElementsByClassName('.container')
const displayCurrentPlayer = document.querySelector('.current-player')
const results = document.querySelector('.results')
    
//Add EventListener
document.getElementsByClassName('.row').addEventListener('click', index => {
    let currentPlayer = 1
    let len = rows.length
    for(let i =0;i < len; i++) {
        if(rows[index + 7].classList.contains('taken')) {
            if(currentPlayer === 1) {
                rows[index].classList.add('taken', 'player-one')
            
                currentPlayer = 2
                displayCurrentPlayer.innerHTML = currentPlayer
            } else if(currentPlayer === 2) {
                rows[index].classList.add('taken', 'player-two')

                currentPlayer = 1
                displayCurrentPlayer.innerHTML = currentPlayer
            } 
        } else alert('Cannot go there')
    }(i)
    document.append(rows)
})

