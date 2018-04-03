// Disappearing nav bar on scroll up and down //

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
   
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
   
    if (st > lastScrollTop && st > navbarHeight){
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;

    // console.log("scrolling");
}

// mobile menu //

const $nav = document.querySelector('nav');
const $btn = document.querySelector('.mobile-menu');

$btn.addEventListener('click', function(){

    $nav.classList.toggle('show');

});

// intro box effect 

window.onscroll = function() {myFunction()};

var introBox = document.getElementById('hero-section');
var changePoint = 200;

//introBox.addEventListener('transitionend', hideEl);

function myFunction() {
  if (window.pageYOffset >= changePoint) {
    introBox.classList.add("not-sticky");
  } else {
    introBox.style.display = 'block';
    introBox.classList.remove("not-sticky");

  }
}

function hideEl(){
    introBox.style.display = 'none';
}


// highlighting active item in menu

// $(document).ready(function() { 
//     $("#nav li .nav").click(function ( e ) {
//         e.preventDefault();
//         $("#nav li a.active").removeClass("active"); //Remove any "active" class  
//         $(this).addClass("active"); //Add "active" class to selected tab  
//         $(activeTab).show(); //Fade in the active content  
//     });

// console.log ('helloooo im ninoooo');

// });



$(document).ready(function(){
    $("a[href*='" + location.pathname + "']").addClass("active");
});

$('.nav li a').on('click', function(){
    $('li a.active').removeClass('active');
    $(this).addClass('active');
    $('li a.active').show(); //Fade in the active content  

console.log ('what the fuhREAK');

});

// $(function(){
//     var current = location.pathname;
//     $('#nav li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.addClass('active');
//         }
//     })
// })







