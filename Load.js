// function Load () {

// 	this.loadResources = function () {
		


// 	}
	
// }

var i_middleBar = new Image();
i_middleBar.src = "img/middle_bar.jpg"

var i_playerBar = new Image()
i_playerBar.src = "img/player_bar.jpg"


var i_enemyBar = new Image()
i_enemyBar.src = "img/middle_bar.jpg"

var i_ball = new Image()
i_ball.src = "img/ball.jpg"

requestAnimFrame = (function() {
  return window.requestAnimationFrame ||
     window.webkitRequestAnimationFrame ||
     window.mozRequestAnimationFrame ||
     window.oRequestAnimationFrame ||
     window.msRequestAnimationFrame ||
     function(/* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
       window.setTimeout(callback, 1000/60);
     };
})();