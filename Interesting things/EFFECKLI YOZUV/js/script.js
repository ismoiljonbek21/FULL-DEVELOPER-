var input= document.getElementsByClassName('input')[0];
output=document.getElementsByClassName('output')[0];
input.addEventListener('keyup', function(){
    output.innerHTML= this.value;
}, false)