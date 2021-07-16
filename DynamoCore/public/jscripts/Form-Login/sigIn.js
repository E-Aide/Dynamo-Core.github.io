var flag=1;
Parse.initialize(
    "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
    "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
  ); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
  Parse.serverURL = "https://parseapi.back4app.com/";
  

function passDisplay(){
    if(flag)
    {
        const passField=document.querySelector('#password');
        passField.setAttribute('type','text');
        document.querySelector('#iconeye').style.color= "green";
        flag=0;
    }
    else
    {
        const passField=document.querySelector('#password');
        passField.setAttribute('type','password');
        document.querySelector('#iconeye').style.color= "black";
        flag=1;
    }

}
document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });

  $(function(){
    var main = $('.cont');    
    $('.cont').css({ top: (($(window).height() / 2) - (main.height() / 2)) + 50 + "px" });
  });

function passwordVerify()
{
    if(document.getElementById('pass').value==document.getElementById('conPassw').value)
    {
        document.querySelector('.chekPass').textContent=" *Confirmed";
    }
    else
    {
        document.querySelector('.chekPass').textContent=" *Doesn't Match!";
    }
}

var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        return true; 
    }
});

modal.setContent('<h3>To Reset password, enter the Email Address Below, </h3> <span height="40px"></span><input type="email" id="Useremail" placeholder=" Enter Your Email Address ">');

modal.addFooterBtn('Go Back', 'tingle-btn tingle-btn--primary', function() {
    modal.close();
});
modal.addFooterBtn('Submit', 'tingle-btn tingle-btn--pull-right', function() {
    var email=$('#Username').value;
    resetPassword(email);
});

function resetPassword(email) {
    Parse.User.requestPasswordReset(""+email+"").then(function() {
      console.log("Password reset request was sent successfully");
      modal.setFooterContent('<h4> The Email Has been Sent! </h4>');
      modal.close();
    }).catch(function(error) {
      console.log("The login failed with error: " + error.code + " " + error.message);
      modal.setFooterContent('<h4> Email not Registered! </h4>');
      modal.close();
    });
}