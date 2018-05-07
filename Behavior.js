var locked;                                                                     //Variável que decide se o ecrã está bloqueado ou não
var displayed = 0;                                                              //Variável que decide se os ícones do menu principal se encontram disponibilidados ou não
var friendsdisplayed = 0;
var currentScreen;                                                              //Variável que guarda o Id do ecrã em que o utilizador se encontra
var stack = [];                                                                 //Variável que guarda os Ids dos ecrãs anteriores ao ecrã em que o utilizador se encontra

var names = ["Ant&oacute;nio", "Ana", "Fernando", "Jo&atilde;o", "Jorge", "Pedro", "Rita", "Tiago", "Alice", "Mariana", "Teresa", "Paula", "In&ecirc;s", "Francisco", "Miguel"];
var added = [];
var toAdd;
var addedLength = 0;
var lastDisplayed = 0;
var deleteMode = 0;
var following1 = 0;

var amount = 0;                                                                 //variavel que aumenta com os sinais de mais e menos
var drink = 0;                                                                  //variavel que decide a bebida a ser apresentada
var totalPint = 0;                                                              //numero total de cervejas
var totalSangria = 0;                                                           //numero total de sangrias
var totalDrinks = 0;                                                            //numero total de bebidas

var onQueue = 0;

var ArtistsDisplayed = 0;

var LocationStatus = 1;

function AddCart(){
  window.alert("Dude what");
  var total = document.getElementById("Total");
  if(drink == 0){
    totalPint += amount;
    totalDrinks += amount;
  }
  else if (drink == 1) {
    totalSangria += amount;
    totalDrinks += amount;
  }
  resetAmount();
  total.innerHTML = totalDrinks + "&euro;";
}

function ResetAmounts(){
  amount = 0;
  drink = 0;
  totalPint = 0;
  totalSangria = 0;
  totalDrinks = 0;
}

function resetAmount(){
  amount = 0;
  var total = document.getElementById("DrinkAmount");
  total.innerHTML = amount+ "&euro;";
}

function ChangeDrinkRight(){
  if(drink + 1 > 1){
    drink = 0;
    document.getElementById("Drink").src = "pint.png";
    document.getElementById("DrinkAmount").innerHTML = totalPint;
  }
  else{
    drink++;
    document.getElementById("Drink").src = "sangria.png";
    document.getElementById("DrinkAmount").innerHTML = totalSangria;
  }
}

function ChangeDrinkLeft(){
  if(drink - 1 < 0){
    drink = 1;
    document.getElementById("Drink").src = "sangria.png";
    document.getElementById("DrinkAmount").innerHTML = totalSangria;
  }
  else{
    drink--;
    document.getElementById("Drink").src = "pint.png";
    document.getElementById("DrinkAmount").innerHTML = totalPint;
  }
}

function ShowTotal(){
  var total = document.getElementById("TotalDrinks");
  total.innerHTML = totalDrinks +"&euro;";
}

function AddAmount(){
  if (drink == 0){
    AddAmountBeer();
  }
  else{
    AddAmountSangria();
  }
}

function DecAmount(){
  if (drink == 0){
    DecAmountBeer();
  }
  else{
    DecAmountSangria();
  }
}

function ShowAmounts(){
  var total = document.getElementById("BeerAmount");
  var total1 = document.getElementById("SangriaAmount");
  total.innerHTML = totalPint;
  total1.innerHTML = totalSangria;
}

function DecAmountBeer(){
  var total = document.getElementById("BeerAmount");
  var all = document.getElementById("DrinkAmount");
  if(totalPint - 1 >=0){
    totalPint--;
    totalDrinks--;
    total.innerHTML = totalPint;
    all.innerHTML = totalPint;
    ShowTotal();
    verifyDrinks();
  }
}

function AddAmountBeer(){
  var total = document.getElementById("BeerAmount");
  var all = document.getElementById("DrinkAmount");
  totalPint++;
  totalDrinks++;
  total.innerHTML = totalPint;
  all.innerHTML = totalPint;
  ShowTotal();
  verifyDrinks();
}

function DecAmountSangria(){
  var total = document.getElementById("SangriaAmount");
  var all = document.getElementById("DrinkAmount");
  if(totalSangria - 1 >=0){
    totalSangria--;
    totalDrinks--;
    total.innerHTML = totalSangria;
    all.innerHTML = totalSangria;
    ShowTotal();
    verifyDrinks();
  }
}

function AddAmountSangria(){
  var total = document.getElementById("SangriaAmount");
  var all = document.getElementById("DrinkAmount");
  totalSangria++;
  totalDrinks++;
  total.innerHTML = totalSangria;
  all.innerHTML = totalSangria;
  ShowTotal();
  verifyDrinks();
}

function verifyDrinks(){
  var button = document.getElementById("DrinksButton");
  if (totalDrinks == 0){
    button.disabled = true;
    button.style.setProperty("opacity", "0.5");
  }
  else{
    button.disabled = false;
    button.style.setProperty("opacity", "1");
  }
}

function resetDrinks(){
  var all = document.getElementById("DrinkAmount");
  var Pint = document.getElementById("BeerAmount");
  var Sangria = document.getElementById("SangriaAmount");
  totalDrinks = 0;
  totalPint = 0;
  totalSangria = 0;
  ShowTotal();
  all.innerHTML = totalDrinks;
  Pint.innerHTML = totalPint;
  Sangria.innerHTML = totalSangria;
}

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
  var t = setTimeout(getTime, 500);
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

function ScrollDetect(){
  var ScrollArea = document.getElementById("MenuScroll");
  var TopPart = document.getElementById("TopPart");
  var BottomPart = document.getElementById("BottomPart");
  if (ScrollArea.scrollTop > 20){
    TopPart.src = "Unoccupied.png";
    BottomPart.src = "Current.png";
  }
  else {
    TopPart.src = "Current.png";
    BottomPart.src = "Unoccupied.png";
  }
}

function IconDisplay(){
  var ScrollArea = document.getElementById("MenuScroll");
  var Icon1 = document.getElementById("Amigos");
  var Icon2 = document.getElementById("Bebidas");
  var Icon3 = document.getElementById("WC");
  var Icon4 = document.getElementById("Notificacoes");
  var Icon5 = document.getElementById("Definicoes");
  if (displayed == 0){
    ScrollArea.style.setProperty("visibility", "visible");
    Amigos.style.setProperty("visibility", "visible");
    Bebidas.style.setProperty("visibility", "visible");
    WC.style.setProperty("visibility", "visible");
    Notificacoes.style.setProperty("visibility", "visible");
    Definicoes.style.setProperty("visibility", "visible");
    displayed = 1;
  }
  else {
    ScrollArea.style.setProperty("visibility", "hidden");
    Amigos.style.setProperty("visibility", "hidden");
    Bebidas.style.setProperty("visibility", "hidden");
    WC.style.setProperty("visibility", "hidden");
    Notificacoes.style.setProperty("visibility", "hidden");
    Definicoes.style.setProperty("visibility", "hidden");
    displayed = 0;
  }
}

function ArtistDisplay(){
  var Artist1 = document.getElementById("Artist1");
  var Artist2 = document.getElementById("Artist2");
  var Artist3 = document.getElementById("Artist3");
  var Artist4 = document.getElementById("Artist4");
  if (ArtistsDisplayed == 0){
    Artist1.style.setProperty("visibility", "visible");
    Artist2.style.setProperty("visibility", "visible");
    Artist3.style.setProperty("visibility", "visible");
    Artist4.style.setProperty("visibility", "visible");
    ArtistsDisplayed = 1;
  }
  else{
    Artist1.style.setProperty("visibility", "hidden");
    Artist2.style.setProperty("visibility", "hidden");
    Artist3.style.setProperty("visibility", "hidden");
    Artist4.style.setProperty("visibility", "hidden");
    ArtistsDisplayed = 0;
  }
}

function hideFriends(){
  var Icon1 = document.getElementById("Locator1");
  var Icon2 = document.getElementById("Locator2");
  var Icon3 = document.getElementById("Locator3");
  Locator1.style.setProperty("visibility", "hidden");
  Locator2.style.setProperty("visibility", "hidden");
  Locator3.style.setProperty("visibility", "hidden");
  friendsdisplayed = 0;
}

function Unlock(){
  var Lock = document.getElementById("LockScreen");
  var Main = document.getElementById("MainScreen");
  Lock.style.setProperty("visibility", "hidden");
  Main.style.setProperty("visibility", "visible");
  var Pel = document.getElementById("Present");
  Present.style.setProperty("visibility", "visible");
  IconDisplay();
}

function Startup(){
  var divs = document.getElementsByTagName("div");
  for (var i = 0; i < divs.length; i++)
    divs[i].style.setProperty("visibility", "hidden");
  var Main = document.getElementById("Off");
  Off.style.setProperty("visibility", "visible");
  var Border = document.getElementById("Border");
  Border.style.setProperty("visibility", "visible");
  locked = true;
  Place = document.getElementById("Placer");
  Place.innerHTML = "Ainda n&atilde;o adicionou nenhum amigo.";
}

function Switch(current, toSwitch){
  current.style.setProperty("visibility", "hidden");
  toSwitch.style.setProperty("visibility", "visible");
  if (current == 'MainScreen' || toSwitch == 'MainScreen'){
    IconDisplay();
  }
  currentScreen = toSwitch;
  if (current != 'LockScreen' || current != 'Off'){
    stack.push(current);
    var Pel = document.getElementById("Present");
    Present.style.setProperty("visibility", "visible");
  }

  if (toSwitch.id == 'WifiAwait'){
    if (LocationStatus != 0) {
      setTimeout(function() { Switch(WifiAwait, SuccessfulConnection); }, 1000);
    }
    else {
      verifyLocation();
    }
  }
  if (toSwitch.id == 'SuccessfulConnection'){
    if (LocationStatus != 0){
      addFriend();
    }
    else {
      verifyLocation();
    }
  }
  if (current.id == 'SuccessfulConnection' && toSwitch.id == 'LocationMenu'){
    stack.pop();
    stack.pop();
    stack.pop();
  }
  if (toSwitch.id == 'Locator'){
    if (LocationStatus != 0){
      displayFriend();
    }
    else {
      verifyLocation();
    }
  }
  if (toSwitch.id != 'Locator' && friendsdisplayed == 1){
    hideFriends();
  }
  if (toSwitch.id == 'PaymentMenu'){
    verifyDrinks();
  }
  if (current.id == 'PaymentSuccessful' && toSwitch.id == 'MainScreen'){
    resetDrinks();
    stack.pop();
    stack.pop();
    stack.pop();
  }
  if (toSwitch.id == 'WCSuccessful'){
    if (onQueue == 0){
      onQueue = 1;
    }
    else{
      var text = document.getElementById("Place");
      text.style.setProperty("visibility", "hidden");
      var status = document.getElementById("TextStatus");
      status.innerHTML = "J&aacute; se encontra na fila";
      var waitingtime = document.getElementById("QueueTime");
      waitingtime.style.setProperty("top", "-20%");
      var button = document.getElementById("QueueButton");
      button.style.setProperty("top", "-17.5%");
    }
  }
  if (toSwitch.id == 'News'){
    var ScrollArea = document.getElementById("NewsScroll");
    ScrollArea.style.setProperty("visibility", "visible");
  }
  if (toSwitch.id == 'Playbill'){
    ArtistDisplay();
    var Pel = document.getElementById("Present");
    Pel.style.setProperty("color", "#b9cf6e");
    var ScrollArea = document.getElementById("PlaybillScroll");
    ScrollArea.style.setProperty("visibility", "visible");
  }
  else {
    var Pel = document.getElementById("Present");
    Pel.style.setProperty("color", "black");
  }
}

function Goback(){
  var toSwitch = stack.pop();
  if (toSwitch != null){
    currentScreen.style.setProperty("visibility", "hidden");
    toSwitch.style.setProperty("visibility", "visible");
    if (toSwitch == 'MainScreen'){
      IconDisplay();
    }
    if (toSwitch.id != 'Locator' && friendsdisplayed == 1){
      hideFriends();
    }
    if (currentScreen.id == 'News'){
      var ScrollArea = document.getElementById("NewsScroll");
      ScrollArea.style.setProperty("visibility", "hidden");
    }
    if (currentScreen.id == 'Playbill'){
      ArtistDisplay();
      var Pel = document.getElementById("Present");
      Pel.style.setProperty("color", "black");
      var ScrollArea = document.getElementById("PlaybillScroll");
      ScrollArea.style.setProperty("visibility", "hidden");
    }
    currentScreen = toSwitch;
  }
}

function Display(Name){
  var message = Name + " will be displayed when I get to it."
  window.alert(message);
}

function giveRandom(){
  var name = names[Math.floor((Math.random() * 14) + 1)];
  toAdd = name;
}

function addFriend(){
  giveRandom();
  added[addedLength] = toAdd;
  Place = document.getElementById("Placer");
  Place.style.setProperty("top", "0%");
  if (addedLength == 0){
    Place.innerHTML = "";
  }
  addedLength++;
  HText = document.getElementById("Header");
  HText.innerHTML = toAdd + " foi adicionado(a)!";
  if (addedLength < 7){
    if(addedLength == 0){
      Place.innerHTML = toAdd + "<br>";
    }
    else
      Place.innerHTML = Place.innerHTML + toAdd + "<br>";
  }
}

function displayFriend(){
  if (addedLength != 0){
    if (addedLength > 0){
      F1 = document.getElementById("Name1");
      F1.innerHTML = added[0];
      Loc1 = document.getElementById("Locator1");
      Loc1.style.setProperty("visibility", "visible");
      friendsdisplayed = 1;
    }
    if (addedLength > 1){
      F2 = document.getElementById("Name2");
      F2.innerHTML = added[1];
      Loc2 = document.getElementById("Locator2");
      Loc2.style.setProperty("visibility", "visible");
    }
    if (addedLength > 2){
      F3 = document.getElementById("Name3");
      F3.innerHTML = added[2];
      Loc3 = document.getElementById("Locator3");
      Loc3.style.setProperty("visibility", "visible");
    }
  }
}

function changeImage(number){
  var image = document.getElementById("Main");
  if (number == 0)
    image.src = "Map.png";
  else if (number == 1)
    image.src = "MapToFriend1.png";
  else if (number == 2)
    image.src = "MapToFriend2.png";
  else
    image.src = "MapToFriend3.png";
}

function verifyLocation(){
  var Screen = document.getElementById("NoLocation");
  if (LocationStatus == 0){
    Switch(currentScreen, Screen);
    stack.pop();
  }
}

function followArtist1(){
  var image = document.getElementById("Box1");
  if (!following1){
    image.src = "CheckmarkInBox.png";
    following1 = 1;
  }
  else {
    image.src = "Box.png";
    following1 = 0;
  }
}

function changeMode(){
  var Rem = document.getElementById("Remove");
  if (deleteMode == 0){
    Rem.style.setProperty("background-color", "White");
    Rem.style.setProperty("border", "1px solid Black");
    deleteMode = 1;
  }
  else{
    Rem.style.setProperty("background-color", "Transparent");
    Rem.style.setProperty("border", "none");
    deleteMode = 0;
  }
}

function changeLocationStatus(){
  var Slider = document.getElementById("LocationSlider");
  var LocationIcon = document.getElementById("Location");
  if (LocationStatus == 0){
    Slider.src = "SliderRight-icon.png";
    LocationIcon.style.setProperty("visibility", "visible");
    LocationStatus = 1;
  }
  else {
    Slider.src = "SliderLeft-icon.png";
    LocationIcon.style.setProperty("visibility", "hidden");
    LocationStatus = 0;
  }
}

function Lock(){
  displayed = 0;
  var Pel = document.getElementById("Present");
  Present.style.setProperty("color", "black");
  Present.style.setProperty("visibility", "hidden");
  if (locked == false){
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++)
      divs[i].style.setProperty("visibility", "hidden");
    var Border = document.getElementById("Border");
    Border.style.setProperty("visibility", "visible");
    var Screen = document.getElementById("Off");
    Off.style.setProperty("visibility", "visible");
    if (LocationStatus == 1){
      var LocationIcon = document.getElementById("Location");
      LocationIcon.style.setProperty("visibility", "hidden");
    }
    while (stack.length != 0){
      stack.pop();
    }
    locked = true;
  }
  else{
    var Current = document.getElementById("Off");
    Off.style.setProperty("visibility", "hidden");
    var Screen = document.getElementById("LockScreen");
    Screen.style.setProperty("visibility", "visible");
    if (LocationStatus == 1){
      var LocationIcon = document.getElementById("Location");
      LocationIcon.style.setProperty("visibility", "visible");
    }
    locked = false;
  }
}
