var input = document.querySelector('input')
var btn = document.querySelector('button')
var p = document.querySelector('p')

btn.addEventListener('click',()=>{
    let val = input.value;
    if(val!==''){
        p.innerHTML += val + '<br/>';
        document.querySelector('input').value=''
    }
})