Parse.initialize(
    "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
    "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
  ); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";
  
function signUp() {
    // Create a new instance of the user class
    var user = new Parse.User();
    var name=document.querySelector('#username').value;
    var email=document.querySelector('#email').value;
    var pass=document.querySelector('#pass').value;
    var contactNo=document.querySelector('#contactNo').value;
    var profilepic=document.querySelector('#profilePic').file;

    user.set('username',name);
    user.set('email', email);
    user.set('password', pass);
    user.set('ContactNo', contactNo);
    user.set('profilepic', profilepic);

    user.signUp().then(function(user) {
        alert('User created successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
        window.open('../../views/Profile/profile.html',"_self");
    }).catch(function(error){
        alert("Error: " + error.code + " " + error.message);
    });
}
function logIn() {
  var name=document.querySelector('#UserName').value;
  var pass=document.querySelector('#password').value;
  var user = Parse.User
      .logIn(name, pass).then(function(user) {
          alert('User Logged in successful with name: ' + user.get("username") + ' and email: ' + user.get("email"));
          window.open('../../views/Profile/profile.html',"_self");
  }).catch(function(error){
      alert("Error: " + error.code + " " + error.message);
  });
}





  