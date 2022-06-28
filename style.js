let numero=10
let veces=false;
let interval=null
console.log(numero)

document.querySelector('.btn_atras').addEventListener('click',function(){
    if(veces==false){
        atra()
      veces=true
    }
})

function atra(){
       interval= setInterval(function(){
            numero+=10;
            document.querySelector('.caja').style.transform=`rotateY(${numero}deg)`
        },200);


}
document.querySelector('.adelante').addEventListener('click',function(){
    clearInterval(interval)
    veces=false
})