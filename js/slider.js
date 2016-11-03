$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView:3,
    loop:true,
    spaceBetween:28,
    nextButton: '.arrow-right',
    prevButton: '.arrow-left',
  })
  $('.bakery-intro').children('h1').css({'position':'relative','left': '-400px',"opacity":"0"}).animate({
    "left":"0",
    "opacity":"1"
  },400);
  $('.bakery-intro').children('span').css({'display':'block','position':"relative",'right': '-400px',"opacity":"0"}).animate({
    "right":"0",
    "opacity":"1"
  },400);
  $('.bakery-intro').children('button').css({
    'visibility':'visible',
}).animate({
    opacity:1
  },800);

var isHide=false;
$('.nav-tab').click(function () {
  if(isHide===false){
    var width = $('.dish').width();
    $('.dish').animate({
      left:width+3
    },500);
    return isHide=true;
  }else{
    $('.dish').animate({
      left:0
    },500);
    return isHide=false;
  }


})
});
