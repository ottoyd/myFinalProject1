let score=[0,0];
let tempScore=0;
let activePlayer=0;
let totalScore=0;
let ranjau2=Infinity


// document.querySelector('#current-'+activePlayer).innerHTML='<strong>'+ dice +'</strong>'
// let store=document.querySelector('#score-0').textContent
// console.log(store);
let x = prompt('INSERT GAME LENGTH')
let ranjau1 = prompt('(OPTIONAL) Insert More Traps #1')


document.getElementById('score-0').textContent='0'
document.getElementById('score-1').textContent='0'

document.getElementById('current-0').textContent='0'
document.getElementById('current-1').textContent='0'

document.querySelector('.btn-hold').style.display='none'
document.querySelector('.dice').style.display='none'

document.querySelector('.btn-roll').addEventListener('click', function() {
document.querySelector('.btn-hold').style.display='block'
  //random
  let dice= Math.floor(Math.random()*6 + 1);
  
  // dislay result
  
document.querySelector('.dice').style.display='block';
  
  let diceDom= document.querySelector('.dice');
    diceDom.style.display='block';
    diceDom.src='dice-'+dice+'.png';

  if ( dice !== 2 && dice !== ranjau2 && dice !== ranjau1){
    tempScore += dice
    // console.log(total +' player '+activePlayer);
    // console.log('ini score sementara '+tempScore +' player '+activePlayer);
    document.querySelector('#current-'+activePlayer).textContent = tempScore;
  }else{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')
    tempScore = 0;
    document.getElementById('current-0').textContent= '0'
    document.getElementById('current-1').textContent= '0'
    // console.log(roundScore);
    document.querySelector('.dice').style.display = 'none';
    // //reseting & Change Player
    // Reset JS
    // tempScore = 0;
    // Reset HTML
    // Pass Active
    // HIDE DICE after Being a Pig
  }

})

document.querySelector('.btn-hold').addEventListener('click', function() {

  let total0 = Number(document.getElementById('score-0').textContent);
  let total1 = Number(document.getElementById('score-1').textContent);

  document.querySelector('.btn-hold').style.display='none';
  if(activePlayer === 1){
    total1 += tempScore;
    tempScore=0
    document.getElementById('score-'+activePlayer).textContent = total1;
  }
  else{
    total0 += tempScore;
    tempScore = 0
    document.getElementById('score-'+activePlayer).textContent = total0;
  }
  
  document.getElementById('current-0').textContent= '0'
  document.getElementById('current-1').textContent= '0'

  activePlayer === 0? activePlayer = 1 : activePlayer = 0;

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')
  if (total0 >= x){
    document.getElementById('name-0').textContent = 'PLAYER 1 WIN'
    document.getElementById('name-1').textContent = 'PLAYER 1 WIN'
    document.querySelector('.btn-hold').style.display='none'
    document.querySelector('.btn-roll').style.display='none'
    document.querySelector('.dice').style.display='none'
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
  }else if (total1 >= x){
    document.getElementById('name-0').textContent = 'PLAYER 2 WIN'
    document.getElementById('name-1').textContent = 'PLAYER 2 WIN'
    document.querySelector('.btn-hold').style.display='none'
    document.querySelector('.btn-roll').style.display='none'
    document.querySelector('.dice').style.display='none'
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
  }
    // total += tempScore  
    
})

