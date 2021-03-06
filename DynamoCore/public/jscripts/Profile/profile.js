Parse.initialize(
    "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
    "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
  ); 
  Parse.serverURL = "https://parseapi.back4app.com/";

  var user = Parse.Object.extend("User");
  var Uid =Parse.User.current().id;

  (async () => {
    const User = new Parse.User();
    const query = new Parse.Query(User);
  
    try {
      let user = await query.get(Uid);
      const username = user.get('username');
      const email = user.get('email');
      const contact = user.get('ContactNo');
      const profilepic = user.get('profilepic')._url;
      document.querySelector('.first-name').innerHTML=username;
      document.querySelector('.Contact').append(contact);
      if(email==undefined){
        document.querySelector('.Email').append("Please Verify your email!");
      }
      else{
        document.querySelector('.Email').append(email);
      }
      console.log(profilepic);
      const imgurl="url("+profilepic+")"
      document.querySelector('.profile-image').style.backgroundImage= imgurl;

    } catch (error) {
      console.error('Error while fetching user', error);
    }
  })();
  
  (async () => {
    const SeminarList = Parse.Object.extend('SeminarList');
    const query = new Parse.Query(SeminarList);
    query.equalTo('HostObjID', Parse.User.current());
    const results = await query.find();
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const name = object.get('name');
        const ID = object.get('ID');

        var Section = document.getElementsByClassName("semDrop")[0];
        var liE = document.createElement("li");
        liE.classList.add("liE");
        liE.innerHTML = name+"-"+ID;
        Section.appendChild(liE);
      }
    } catch (error) {
      console.error('Error while fetching SeminarList', error);
    }
  })();
  