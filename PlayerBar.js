function PlayerBar () {
	
	this.startupPlayerBar = function () {
		
		this.x = 0
		this.y = 0
		this.zOrder = 0

		this.image = i_playerBar

		g_Manager.canvas.addEventListener('mousemove', this.update, false);

		g_Manager.addGameObject(this)

	}


	this.update = function () {
		
		this.y = eventListener_yMouse - 25

	}




	this.draw = function (context) {
		
		context.drawImage(this.image, this.x, this.y)

	}	





}