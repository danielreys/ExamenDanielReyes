
setCookie("pregunta1","Mi pregunta 1?");
setCookie("pregunta2","Mi pregunta 2?");
setCookie("pregunta3","Mi pregunta 3?");

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

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

  