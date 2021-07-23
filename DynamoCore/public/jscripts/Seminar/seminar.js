document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

  $(function(){
    var main = $('.cont');    
    $('.cont').css({ top: (($(window).height() / 2) - (main.height() / 2)) + 50 + "px" });
  });

  function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random()*charactersLength));
   }
   return result;
}

  Parse.initialize(
    "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
    "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
  ); 
  Parse.serverURL = "https://parseapi.back4app.com/";
  
  async function hostSeminar() {

    const newSeminar = new Parse.Object('SeminarList');
    
    var Host=document.querySelector('#speaker').value;
    var name=document.querySelector('#topic').value;
    var hostEmail=document.querySelector('#HostEmail').value;
    var ID=""+makeid(5);

  newSeminar.set('name', name);
  newSeminar.set('ID', ID);
  newSeminar.set('N_Attends', 1);
  newSeminar.set('hostEmail', hostEmail);
  newSeminar.set('HostObjID', Parse.User.current());
  newSeminar.set('Speaker', Host);

    try{
      
        let result = await newSeminar.save()
        alert('New object created with SeminarId: ' + ID);
        window.open('../../views/seminar/semMain.html',"_self");
    }catch(error){
        alert('Failed to create new object, with error code: ' + error.message);
    }
} 


async function joinSeminar() {

   const myNewObject = new Parse.Object('SemJoined');
    
    var Name=document.querySelector('#aName').value;
    var SeminarID=document.querySelector('#semID').value;
    var HostEmail=document.querySelector('#Hostemail').value;
    
    myNewObject.set('Name', Name);
    myNewObject.set('UserPointer', Parse.User.current());
    myNewObject.set('SeminarID',SeminarID);
    myNewObject.set('HostEmail',HostEmail);

    try {
      (async () => {
        const query = new Parse.Query(SeminarList);
        query.equalTo('ID',SeminarID);
        const object = await query.find();
        try {
          const object = await query.find();
          var n=object.get('N_Attends');
          object.set('N_Attends', n+1);
          try {
            
            const response = await object.save();
            console.log('SeminarList updated', response);
          } catch (error) {
            console.error('Error while updating SeminarList', error);
            }
          } catch (error) {
            console.error('Error while retrieving object SeminarList', error);
          }
      })();
    const result = await myNewObject.save();

   
    alert('Successfully joined!');
    window.open('../../views/seminar/semMain.html',"_self");
  } catch (error) {
    alert('Error while Joining!: ' + error);
  }
} 

