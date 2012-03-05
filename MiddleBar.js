function MiddleBar () {
	
	this.startupMiddleBar = function () {
		

		this.x = g_Manager.canvas.width / 2
		this.y = 0
		this.zOrder = 0
		this.height = 400
		this.width = 10
		this.drawEnable = false
		this.startCountdownDraw = true

		this.image = i_middleBar
		this.currentTimeMiddleBar = new Date().getTime()

		this.bounceEnable = false

		g_Manager.addGameObject(this)



	}

	this.update = function () {

		// this.drawEnable = true

		if (this.startCountdownDraw) {

			if ((g_Manager.currentFrameTime - this.currentTimeMiddleBar) > 10000) {
				// console.log(g_Manager.currentFrameTime - this.currentTimeMiddleBar)
				this.currentTimeMiddleBar = new Date().getTime()
				this.startCountdownDraw = false
				this.drawEnable = true
				this.bounceEnable = true
			}

		}

		else if (!this.startCountdownDraw) {

			if ((g_Manager.currentFrameTime - this.currentTimeMiddleBar) > 10000) {
				// console.log(g_Manager.currentFrameTime - this.currentTimeMiddleBar)
				this.currentTimeMiddleBar = new Date().getTime()
				this.startCountdownDraw = true
				this.drawEnable = false
				this.bounceEnable = false
			}		
			

		}
		
		

		


	}


	this.draw = function (context) {

		if (this.drawEnable) {
			context.drawImage(this.image, this.x, this.y)	
			// this.drawEnable = false
		}
		
		

	}	

}