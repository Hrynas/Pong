function MiddleBar () {
	
	this.startupMiddleBar = function () {
		

		this.x = g_Manager.canvas.width / 2
		this.y = 0
		this.zOrder = 0
		this.height = 400
		this.width = 10

		this.drawEnable = false
		this.startAlphaPhase = false
		this.endAlphaPhase = false
		this.noAlphaPhase = false


		this.image = i_middleBar
		this.currentTimeMiddleBar = new Date().getTime()

		this.bounceEnable = false
		this.sineWave = 0
		g_Manager.addGameObject(this)



	}

	this.update = function () {



		if (this.startAlphaPhase) {

			// this.sineWave = (Math.sin(this.currentTime) + 1) / 2

			this.sineWave += 1/300

			if (this.sineWave > 1) {
				this.bounceEnable = true
				this.startAlphaPhase = false
				this.noAlphaPhase = true
				this.currentTimeMiddleBar = new Date().getTime()
			}
		}

		else if (this.noAlphaPhase) {

			if ((g_Manager.currentFrameTime - this.currentTimeMiddleBar) > 10000) {
				this.noAlphaPhase = false
				this.endAlphaPhase = true
				this.bounceEnable = false
			}
		}

		else if (this.endAlphaPhase) {

			this.sineWave -= 1/300

			if (this.sineWave < 0.1) {
				this.drawEnable = false
				this.endAlphaPhase = false
				this.currentTimeMiddleBar = new Date().getTime()
			}
		}

		else if (!this.noAlphaPhase) {
			
			if ((g_Manager.currentFrameTime - this.currentTimeMiddleBar) > 10000) {
				this.drawEnable = true
				this.startAlphaPhase = true
			}
		}
		
	}


	this.draw = function (context) {

		if (this.startAlphaPhase || this.endAlphaPhase) {
			context.save()
			context.translate(this.x, this.y)
			context.globalAlpha = this.sineWave
			context.drawImage(this.image, 0, 0)
			context.restore()
		}

		else if (this.drawEnable) {
			context.drawImage(this.image, this.x, this.y)
		}
	}	
}