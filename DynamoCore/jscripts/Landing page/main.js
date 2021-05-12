function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function loadIt() {
  await sleep(3000);
  $('.preload').css({display: 'none'});
  $('maincontent').css({display: 'block'});
  BGanim();
}

loadIt();

$(function(){
  var main = $('.preload');    
  $('.preload').css({ top: (($(window).height() / 2) - (main.height() / 2)) + "px",
                        left:(($(window).width() / 2) - (main.width() / 2)) + "px" });
});

function BGanim() {
  Particles.init({
    _selector: '.header__background',
    get selector() {
      return this._selector;
    },
    set selector(value) {
      this._selector = value;
    },
    color: '#C2CAD0',
    speed: .125,
    maxParticles: 110,
    connectParticles: true,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 60
        }
      }, {
        breakpoint: 375,
        options: {
          maxParticles: 40
        }
      }
    ]
  });
};
