

var a = window.document.getElementById('hora')
var img = window.document.getElementById('imag')
var agora = new Date ()
var horas = agora.getHours() 



a.innerHTML= `Agora são ${horas} horas`

if(horas >= 12 && horas < 18){
   var b = window.document.getElementById('bod')
   b.style.background = 'rgb(83, 81, 81)'
   img.src = 'fotos/foto-tarde.jpg'
     
} if  (horas >= 18 ) {
     var n = window.document.getElementById('bod')
    n.style.background = 'black'
     img.src = 'fotos/foto-noite.jpg'
 } else {
      var d = window.document.getElementById('bod')
    d.style.background = rgb(70, 142, 236);
 }

