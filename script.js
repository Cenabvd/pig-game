var scores , roundscore , activeplayer , dice , activeplaying;
init();


//when roll btn clicked
document.querySelector('.btn-roll-dice').addEventListener('click' , function(){
    // if game active
    if(activeplaying){
        //dice img
        let diceDom = document.getElementById('dice')
        dice = Math.floor(Math.random()*6)+1;
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+dice+'.svg';

        if(dice !== 1){
            roundscore += dice;
            document.getElementById('current-' + activeplayer).textContent = roundscore;
        }else{
            //next player
            nextPlayer();
        }

    }
})


// when hold btn clicked
document.querySelector('.btn-hold').addEventListener('click' , function(){
    if(activeplaying){
        //add current score to global score
        scores[activeplayer] += roundscore;
        //update the UI
        document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer]
        // check if player won the game
        if(scores[activeplayer] >= 100){
            document.getElementById('name-' + activeplayer).textContent = 'YOU WINNER!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-'+activeplayer+'-panel').classList.toggle('winner')
            
            activeplaying = false;

        }else{
            // next player
            nextPlayer();
        }
    }
})

//when new game btn clicked
document.getElementById('btn-new').addEventListener('click', init)


// funciton next player
function nextPlayer(){
    // next player
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
    roundscore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active-player')
    document.querySelector('.player-1-panel').classList.toggle('active-player')

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.dice').style.display = 'none';
}

// funciton initial
function init(){
    scores = [0 , 0]
    roundscore = 0;
    activeplayer = 0;
    activeplaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';   
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.add('active-player')
    document.querySelector('.player-1-panel').classList.remove('active-player')
    document.querySelector('.player-0-panel').classList.remove('winner')


}





























// document.querySelector('#current-' + activeplayer).innerHTML = dice;