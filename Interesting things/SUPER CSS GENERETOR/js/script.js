"use strick";


function start() {
    let righttop = document.getElementById('righttop').value;
    let lefttop = document.getElementById('lefttop').value;
    let leftbottom = document.getElementById('leftbottom').value;
    let rightbottom = document.getElementById('rightbottom').value;
    let border =document.getElementById('border').value;
    
    let bordercolor= document.getElementById('bordercolor').value;
    let block = document.getElementById('block');
    let background = document.getElementById('backgroundcolor').value;
    let borderstyle = document.getElementById('borderstyle').value;
    let opacity = document.getElementById('opacity').value;
    block.style.borderRadius = righttop + 'px ' + lefttop + 'px ' + leftbottom + 'px ' + rightbottom + 'px';
    block.style.border = border + 'px   '+ borderstyle +' ' + bordercolor ;
    block.style.backgroundColor = background;
    block.style.opacity=opacity;
    document.getElementById('pxs').innerText='Border-radius: '+righttop+'px ' + lefttop+'px '+leftbottom+'px '+rightbottom+'px ';
    document.getElementById('pxs1').innerText='Opacity '+opacity;
  
   
    
}
function start1(){
    let bordercolor= document.getElementById('bordercolor').value;
    let all = document.getElementById('all').value;
    let block = document.getElementById('block');
    let border =document.getElementById('border').value;
    let borderstyle = document.getElementById('borderstyle').value;
    block.style.borderRadius=all+'px ';
    document.getElementById('pxs').innerText='Border-radius: '+all+'px '+all+'px '+all+'px '+all+'px ';
}