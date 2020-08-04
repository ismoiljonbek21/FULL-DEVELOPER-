"use strict";

let start = document.querySelector('#start');
let game = document.querySelector('#game');
let time = document.querySelector('#time');
let timeHeader = document.querySelector('#time-header');
let resultHeader = document.querySelector('#result-header');
let result = document.querySelector('#result');
let gameTime = document.querySelector('#game-time');

let score  = 0;
let isGameStarted = false;
start.addEventListener('click', startGame);
game.addEventListener('click',handleBoxClick);
gameTime.addEventListener('input',setGameTime)



function startGame(){
    score = 0;
    isGameStarted = true;
    game.style.backgroundColor = '#fff';
    hide(start);
    gameTime.setAttribute('disabled',true);
    setGameTime();
    var interval = setInterval(function(){
        var stime = parseFloat(time.textContent);
        if(stime<=0){
            clearInterval(interval)
            endGame();
        }else{
            stime -= 0.1;
        time.textContent = (stime.toFixed(1))
        }
    },100)
    renderBox();
}
function setGameTime(){
    show(timeHeader);
    hide(resultHeader)

    var ptime = +gameTime.value;
    time.textContent = ptime.toFixed(1);
}
function setGameScore(){
    result.textContent = score.toString();
}
function endGame(){
    isGameStarted = false;
    setGameScore();
    show(start);
    game.innerHTML = '';
    game.style.backgroundColor = '#ccc';
    gameTime.removeAttribute('disabled');
    hide(timeHeader);
    show(resultHeader);
}
function handleBoxClick(event){
    if(!isGameStarted) return;
    if(event.target.dataset.box == 'true'){
        score++;
        renderBox();
    }
}
function renderBox(){
    game.innerHTML = '';
    
    let box = document.createElement('div');
    var boxSize = getRandom(30,100);
    var gameSize = game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxLeft = gameSize.width - boxSize;
    box.style.height = box.style.width = boxSize + 'px';
    box.style.background = 'rgb(' + getRandom(0,255)+','+getRandom(0,255)+','+getRandom(0,255)+')' ;
    box.style.position = 'absolute'; 
    box.style.top = getRandom(0,maxTop) + 'px';
    box.style.left = getRandom(0,maxLeft) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box',true);

    game.insertAdjacentElement('afterbegin',box);
}

function getRandom(min,max){
    return Math.floor(Math.random() * (max - min ) + min) 
}



function show(el) {
    el.classList.remove('hide')
  }
  
  function hide(el) {
    el.classList.add('hide')
  }