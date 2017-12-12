// Javascript Document for Portfolio Page //

const $projectLink = $('.project-link');
const $projectBoxes = $('.section-box');



$projectLink.click(function(e){
 
  e.preventDefault();
 
  const theID = $(this).attr('href');
  
  const $projectBox = $(theID);
  
  console.log($projectBoxes);

  $projectBoxes.css('z-index', '-1');  

  $projectBox.css('z-index', '2');
   
});


//Javascript for free draw

var canvas = document.getElementById('c');
var context = canvas.getContext('2d');

//colors
window.color = '#fff';
function rainbows() {
    return hue = 'rgb('
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ')';
}

$('select').change(function() {
    if( $('select option:selected').attr('value') != 'rainbow') {
        window.color = $('select option:selected').attr('value');
    }else{window.color = rainbows();}
});


//Freehand Draw
var started = false;

$('#c').mousedown(function() {
    context.beginPath();
    started = true;
}).mousemove(function(f) {
    if(started == true){
        if( $('select option:selected').attr('value') == 'rainbow' ){
            window.color = rainbows();
        }
        var offSet = $('#c').offset();
        var endx = f.pageX - offSet.left;
        var endy = f.pageY - offSet.top;
        context.lineTo(endx,endy);
        context.strokeStyle = color;
        context.stroke();
    };
}).mouseup(function() {
    started = false; 
}).mouseleave(function() {
   started = false;
});

var clearBtn = document.getElementById('drawBtn');

clearBtn.addEventListener('click',function(){
  context.reset(0, 0, canvas.width, canvas.height);
});



