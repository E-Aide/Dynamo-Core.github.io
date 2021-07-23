 Parse.initialize(
    "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
    "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
  ); 
  Parse.serverURL = "https://parseapi.back4app.com/";
  
  var user = Parse.Object.extend("User");
  var Ucurrent =Parse.User.current();
  if(Ucurrent!=null){
  (async () => {

      document.querySelector('.SemGuest').classList.add("disableMenu");
      document.querySelector('.SemLinkbtn').classList.add("enabledMenu");
     
  })();
}
else{
  document.querySelector('.SemGuest').classList.remove("disableMenu");
  document.querySelector('.SemGuest').classList.add("enabledMenu");
  document.querySelector('.SemLinkbtn').classList.remove("enabledMenu");
  document.querySelector('.SemLinkbtn').classList.add("disableMenu");
}
