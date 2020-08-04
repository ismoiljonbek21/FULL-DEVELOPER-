"use strict";
function insert(num) {
    if(document.teng == 'onclick'){
        document.form.textview.value ='';
        document.form.textview.value = document.form.textview.value + num;
    }
    else document.form.textview.value = document.form.textview.value + num;
}
function yigindi(){
    var bosh=document.form.textview.value;
    if(bosh){
         document.form.textview.value=eval(bosh)
    }
    
    else alert('Hechnarsa yozilmaganku!')
   
}
function toza(){
    document.form.textview.value=""
}
function orqa(){
    var bosh=document.form.textview.value;
    document.form.textview.value=bosh.substring(0,bosh.length-1)

}
