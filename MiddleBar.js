function MiddleBar () {
	
	this.startupMiddleBar = function () {
		

		this.x = g_Manager.canvas.width / 2
		this.y = 0
		this.zOrder = 0

		this.image = i_middleBar


		g_Manager.addGameObject(this)

	}

	this.update = function () {
		


	}


	this.draw = function (context) {
		
		context.drawImage(this.image, this.x, this.y)

	}	

}