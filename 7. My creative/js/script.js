let box = document.querySelector('.box');
window.onmousemove = function(e){
    let x = e.clientX/3.5;
    let y = e.clientY/22    ;
    box.style.transform = 'perspective('+ 1000 +'px) rotateY('+ x +'deg)'
}
let wrap = document.getElementsByClassName('wrapper')[0];
let icon = document.getElementById('icon');
icon.onclick = function (){
    if(wrap.style.display == 'block'){
        wrap.style.display='none';
    }
    else wrap.style.display='block';
}