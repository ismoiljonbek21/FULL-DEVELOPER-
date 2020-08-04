var img1 = document.getElementById('img1');
var img3 = document.getElementById('img3');
var summa = 0;
var img4 = document.getElementById('img4');
var img5 = document.getElementById('img5');
var start = document.getElementById('start');
var inp = document.getElementById('input');




function startGame() {
  summa = 0;
  start.classList.add('hide')
  var pos = 0;
  var pos2 = -140;
  var pos3 = -340;
  var pos4 = -440;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos >= 850) {
      pos=0;
      img1.style.left = getRandom(0, 1266) + "px";
      img1.style.display = 'block';
    }
    if (pos4 >= 850) {
      pos4=-200;
      img5.style.left = getRandom(0, 1266) + "px";
      img5.style.display = 'block';
    }
    else if (pos2 >= 850) {
      pos2=-50;
      img4.style.left = getRandom(0, 1266) + "px";
      img4.style.display = 'block';
    }
    else if (pos3 >= 850) {
      pos3=-50;
      img4.style.left = getRandom(0, 1266) + "px";
      img4.style.display = 'block';
    }
    else {
      pos++;
      pos2++;
      pos3++;
      pos4++;
      img1.style.top = pos + "px";
      img3.style.top = pos2 + "px";
      img4.style.top = pos3 + "px";
      img5.style.top = pos4 + "px";
  
    }
  }
 var bbb =  setInterval(() => {
    if(inp.value <= 0){
      clearInterval(id);
      start.classList.remove('hide')
     clearInterval(bbb)
    }
    else {
      inp.value -= 1
    }
  }, 1000);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
img1.onmousemove = function(){
  if(inp.value == 0){summa}
  else{summa+=5;img1.style.display='none';}
  
  document.getElementsByClassName('soccer')[0].innerHTML='SCORE: ' + summa;
}
img3.onmousemove = function(){
  if(inp.value == 0){summa}
  else{summa+=5;img3.style.display='none';}
  
  document.getElementsByClassName('soccer')[0].innerHTML='SCORE: ' + summa;
}
img4.onmousemove = function(){
  if(inp.value == 0){summa}
  else{summa+=5;img4.style.display='none';}
  
  document.getElementsByClassName('soccer')[0].innerHTML='SCORE: ' + summa;
}
img5.onmousemove = function(){
  if(inp.value == 0){summa}
  else{summa+=5;img5.style.display='none';}
  
  document.getElementsByClassName('soccer')[0].innerHTML='SCORE: ' + summa;
}


  

