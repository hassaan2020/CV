$(function () {
    
    'use strict';
    
//    $('.head').height($(window).height());
    $('.hfeat ').height($('.headFeaturs').height());
    $('.feat ').height($('.featurs').height());
    $('.num3 ').height($('.n3').height());
    $('.num4 ').height($('.n4').height());
    $('.num4 .feat').height($('.num4').height());
    $('.slider ').height($('.num3').height());
    $('.slider ').width($('.container').width());
    $('.cent .centRight ').height($('.cent').height());
    $('.cent img ').height($('.cent').height());
    $('.underNave ').height($('.fixed').height());
    $('.headFeaturs ').height($('.fixed').height());
    $('.head .nav ul a ').width($('.head .nav ul li').width());
    $('.head .nav ul a ').height($('.head .nav ul li').height());
    
    // LI
var tb = document.getElementById("tabs");
var li = tb.getElementsByClassName("l");

for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("hom");
    current[0].className = current[0].className.replace("hom");
    this.className += " hom";
  });
}
    
    
    //Slider1
function myFunction(x) {
  if (x.matches) { // If media query matches
    $('.num1').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.nex1'),
      prevArrow: $('.prev1'),
    });
    // slider 2
    $('.num2').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.nex2 '),
      prevArrow: $('.prev2 '),
    });
    
  } else {
    $('.num1').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.nex1'),
      prevArrow: $('.prev1'),
    });
    // slider 2
    $('.num2').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: $('.nex2 '),
      prevArrow: $('.prev2 '),
    });
  }
}

    var x = window.matchMedia("(max-width: 900px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
    

//    slider 3
    $('.num3').slick({
        centerMode: true,
      centerPadding: '10%',
      slidesToShow: 1,
      dots:true,
      autoplay:true,
      arrows:true,
      nextArrow: $('.nex3'),
      prevArrow: $('.prev3'),
    });
    
    function countdown(){
				var now = new Date();
				var eventDate = new Date(2019, 9, 30);

				var currentTiime = now.getTime();
				var eventTime = eventDate.getTime();

				var remTime = eventTime - currentTiime;

				var s = Math.floor(remTime / 1000);
				var m = Math.floor(s / 60);
				var h = Math.floor(m / 60);
				var d = Math.floor(h / 24);

				h %= 24;
				m %= 60;
				s %= 60;

				h = (h < 10) ? "0" + h : h;
				m = (m < 10) ? "0" + m : m;
				s = (s < 10) ? "0" + s : s;

				document.getElementById("days").textContent = d;
				document.getElementById("days").innerText = d;

				document.getElementById("hours").textContent = h;
				document.getElementById("minutes").textContent = m;
				document.getElementById("seconds").textContent = s;

				setTimeout(countdown, 1000);
			}

			countdown();
    
    
    $(' .vAl').click(function(){
       $('.hidd').css("display","block"); 
    });
});

 $('.menu').click(function(){
    $('.nav').toggle();
 });

 $('.ls').click(function(){
    $('.books2').show();
    $('.books').hide();
 });

 $('.gr').click(function(){
    $('.books').show();
    $('.books2').hide();
 });














