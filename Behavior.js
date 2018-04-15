var locked;
function getTime(){
  var el = document.getElementById("Time");
  var Pel = document.getElementById("Present");
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  if (hours < 10)
    hours = "0" + hours;
  if (minutes < 10)
    minutes = "0" + minutes;
  el.innerHTML = hours + ":" + minutes;
  Pel.innerHTML = hours + ":" + minutes;
}

function getDate(){
  var el = document.getElementById("Date");
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10)
    month = "0" + month;
  if (day < 10)
    day = "0" + day;
  if (el != null)
    el.innerHTML = day + "/" + month + "/" + year;
}

function Unlock(){
  var Lock = document.getElementById("LockScreen");
  var Main = document.getElementById("MainScreen");
  Lock.style.setProperty("visibility", "hidden");
  Main.style.setProperty("visibility", "visible");
}

function Startup(){
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++)
    divs[i].style.setProperty("visibility", "hidden");
  var Main = document.getElementById("Off");
  Off.style.setProperty("visibility", "visible");
  locked = true;
}

function Switch(current, toSwitch){
  var Current = document.getElementById(current);
  var Switch = document.getElementById(toSwitch);
  Current.style.setProperty("visibility", "hidden");
  Switch.style.setProperty("visibility", "visible");
}

function Display(Name){
  var message = Name + " will be displayed when I get to it."
  window.alert(message);
}

//TO DO
function Lock(){
  if (locked == false){
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++)
      divs[i].style.setProperty("visibility", "hidden");
    var Screen = document.getElementById("Off");
    Off.style.setProperty("visibility", "visible");
    locked = true;
  }
  else{
    var Current = document.getElementById("Off");
    Off.style.setProperty("visibility", "hidden");
    var Screen = document.getElementById("LockScreen");
    Screen.style.setProperty("visibility", "visible");
    locked = false;
  }
}
