var idcont=2;
var aux = 0;
var arraypreg = new Array ();
var preg1 = {id:"0", pregunta:"Doe??",respuesta1:"dsdas",respuesta2:"adadas",respuesta3:"adas",respuesta4:"sdsd",respuestacorrecta:2};
var preg2 = {id:"1", pregunta:"Doasddasxxe??",respuesta1:"dsdas",respuesta2:"adadas",respuesta3:"adas",respuesta4:"sdsd",respuestacorrecta:1};
var preg3 = {id:"2", pregunta:"Dodasdase??",respuesta1:"dsdas",respuesta2:"adadas",respuesta3:"adas",respuesta4:"sdsd",respuestacorrecta:2};

arraypreg.push(preg1);
arraypreg.push(preg2);
arraypreg.push(preg3);

function empezar()
{
    var tiempo = 10;
     display = document.querySelector('#time');
		empezartiempo(tiempo, display);
}
function lanzarPregunta (codi)
{
    if(typeof arraypreg[codi] === 'undefined') {
        document.getElementById("question").innerHTML="error no definido";
    }
    else {

        document.getElementById("question").innerHTML= arraypreg[codi].pregunta;  
        document.getElementById("respuesta0").innerHTML= arraypreg[codi].respuesta1;
        document.getElementById("respuesta1").innerHTML= arraypreg[codi].respuesta2;  
        document.getElementById("respuesta2").innerHTML= arraypreg[codi].respuesta3;  
        document.getElementById("respuesta3").innerHTML= arraypreg[codi].respuesta4;  
        document.getElementById("npreg").innerHTML= codi;    
    }
}
lanzarPregunta(1);
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

  setCookie("pregunta1",arraypreg[0],30);
  setCookie("pregunta1",arraypreg[1],30);
  setCookie("pregunta2",arraypreg[2],30);

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function eraseCookie(name) {   
    document.cookie = name+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
function comprobarCookie(name) {
    var myCookie = getCookie(name);

    if (myCookie == "" || myCookie == null) {
        return false;
    }
    else {
        return true;
    }
}

function empezartiempo(duration, display) { //temporizador
    timer = duration;
	llamarTemporizador();
   miInterval= setInterval(function () {
		llamarTemporizador();
    }, 1000);
}
function llamarTemporizador ()
{
	   minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(miInterval);

        }
}
function validar (obj)
{
    var id = obj.id;
    var num = document.getElementById('npreg');
    if (arraypreg[num].respuestacorrecta == id)
    {
        //es correcto
    }
}
empezar();
  