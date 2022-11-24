var sqs = document.getElementsByClassName('sq');
var body = document.getElementsByTagName('body')[0];
var mousePos = {x: window.innerWidth/2, y: window.innerHeight/2};
var delay = 0.5;

body.addEventListener('mousemove', function(e){
  mousePos.x = e.clientX;
  mousePos.y = e.clientY;
},false);

body.addEventListener('touchstart', function(e){
  mousePos.x = e.touches[0].clientX;
  mousePos.y = e.touches[0].clientY;
})

body.addEventListener('touchmove', function(e){
  mousePos.x = e.touches[0].clientX;
  mousePos.y = e.touches[0].clientY;
})


function render() {
  //console.log('render. mousePos.x=',mousePos.x)
   for (var i = 0; i < sqs.length; i++) {
     var elLeft = parseFloat(sqs[i].style.left||0);
     var elTop = parseFloat(sqs[i].style.top||0);
     var leftDist = elLeft + 460 - mousePos.x;
     var topDist = elTop + 460 - mousePos.y;
   //  console.log("leftDist: ", leftDist, 'mousePos.x',mousePos.x)
     sqs[i].style.left = elLeft - (leftDist / ( 1 + i * delay)) + "px";
     sqs[i].style.top = elTop - (topDist / (1 + i * delay)) + "px";
   }
  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render)

























//polyfills

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
//  http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
 
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
 
// MIT license
  
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());