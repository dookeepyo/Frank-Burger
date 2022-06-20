$(document).ready(function(){
  console.log($(window).scrollTop()); //콘솔창으로 스크롤 상단px값을 확인하려고 썻음
 
  var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
      delay: 2500
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $('#trigger').click(function(){

    $('.menu-serve').toggleClass('active')
    $('.menu-serve').toggleClass('active1')

  });

  
  
  $(window).scroll(function(){
    const sct = $(window).scrollTop();
    if(sct >= 100){
      $('nav').addClass('active');
    }
    if(sct >= 300){
      $('.sec1-acv').addClass('active');
    }
    if(sct >= 1448){
      $('.animation').addClass('active');
    }
    if(sct >= 1448){
      $('.first').addClass('active');
    }
    if(sct >= 1448){
      $('.second').addClass('active');
    }
    if(sct >= 2188){
      $('.sec2').addClass('active');
    }
    if(sct >= 2188){
      $('.animation').addClass('active1');
    }
        if(sct >= 2188){
      $('.sec-3').addClass('active');
    }
    if(sct >= 2188){
      $('.sec3-title').addClass('active');
    }
    if(sct >= 2188){
      $('.sec3-hover').addClass('active');
    }
    if(sct >= 2188){
      $('.sec3-items').addClass('active');
    }
    if(sct >= 2188){
      $('.wrap').addClass('active');
    }
    if(sct >= 2978){
      $('.sec5-acv').addClass('active');
    }
    if(sct >= 3282){
      $('.sec5-acv').addClass('active1');
    }
    if(sct >= 4028){
      $('.sec6-title1').addClass('active');
    }
  }); // 스크롤이벤트부분
});// END