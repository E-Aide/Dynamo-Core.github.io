Parse.initialize(
  "aC742iFhVWVr82DREWfariSl6puXp01vAsluN4mH",
  "huVOduZAMwxcOTOPVu16tXMeLQ1Aj9L6ItfuQjfY"
); 
Parse.serverURL = "https://parseapi.back4app.com/";

$(document).ready(function(){
    var docEl = $(document),
        headerEl = $('header'),
        headerWrapEl = $('.wrapHead'),
        navEl = $('nav'),
        linkScroll = $('.scroll');
    
    docEl.on('scroll', function(){
      if ( docEl.scrollTop() > 60 ){
        headerEl.addClass('fixed-to-top');
        headerWrapEl.addClass('fixed-to-top');
        navEl.addClass('fixed-to-top');
        
      }
      else {
        headerEl.removeClass('fixed-to-top');
        headerWrapEl.removeClass('fixed-to-top');
        navEl.removeClass('fixed-to-top');
      }
    });
    
    linkScroll.click(function(e){
        e.preventDefault();
        $('body, html').animate({
           scrollTop: $(this.hash).offset().top
        }, 500);
     });
  });

  var user = Parse.Object.extend("User");
  var Ucurrent =Parse.User.current();
if(Ucurrent!=null){
  (async () => {
    var Uid=Ucurrent.id;
    const User = new Parse.User();
    const query = new Parse.Query(User);
    try {
      let user = await query.get(Uid);
      const username = user.get('username');
      const profilepic = user.get('profilepic')._url;
      document.querySelector('#auraButtontext.LoGup').classList.add("disableMenu");
      document.querySelector('.logged').classList.add("enabledMenu");
      document.querySelector('#loggedInDis').innerHTML=username;
    } catch (error) {
      console.error('Error while fetching user', error);
    }
  })();
}
else{
  document.querySelector('#auraButtontext.LoGup').classList.remove("disableMenu");
  document.querySelector('.logged').classList.remove("enabledMenu");
}

