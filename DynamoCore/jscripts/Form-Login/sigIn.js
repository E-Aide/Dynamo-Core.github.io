
 var flag=1;

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
    if(document.getElementById('password').value==document.getElementById('conPassword').value)
    {
        localStorage.setItem("passCheck",1);
        document.querySelector('.chekPass').textContent=" *Confirmed";
    }
    else
    {
        document.querySelector('.chekPass').textContent=" *Doesn't Match!";
    }
}