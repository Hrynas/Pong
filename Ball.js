function Ball () {
	
	this.startupBall = function () {
		

		this.x = 400
		this.y = 200
		this.zOrder = 0
		this.xDirection = 1
		this.yDirection = 0

		this.speed = 200
		this.directionMultiplier = -1
		this.leftHit = false
		this.rightHit = false

		this.previousX = -100
		this.previousY = -100

		this.bounceVector = {}
		this.bounceVector.x = 1
		this.bounceVector.y = 0

		this.image = i_ball

		g_Manager.addGameObject(this)


	}
// Math.random()

	this.update = function () {
		
		
		
		// g_Manager.dt = 0.01
					
		this.x += g_Manager.dt * this.speed * this.xDirection
		this.y += g_Manager.dt * this.speed * this.yDirection


		// this.x += this.speed * this.xDirection
		// this.y += this.speed * this.yDirection


		//Player side update

	if (this.x < -30) {
			this.x = 200
			this.y = g_Manager.canvasHeight/2
			this.speed = 150
			this.xDirection = -1
			this.yDirection = 0
			this.leftHit = false
			this.rightHit = false
		}

		else if (this.x <= 10) {

			if (eventListener_yMouse - 25 <= this.y + 10 && eventListener_yMouse - 15 >= this.y + 5 && !this.leftHit) {
				this.xDirection = this.xDirection * -1
				this.yDirection = Math.random() + 2.5 * -1
				this.speed = this.speed + 50
				this.leftHit = true
				this.rightHit = false
				
			}

			else if (eventListener_yMouse - 15 < this.y + 5 && eventListener_yMouse + 15 >= this.y + 5 && !this.leftHit) {
				this.xDirection = this.xDirection * -1
				this.yDirection = Math.random() * 0.5 * -1
				this.speed = this.speed + 50
				this.leftHit = true
				this.rightHit = false
	
			}

			else if (eventListener_yMouse + 15 < this.y + 5 && eventListener_yMouse + 25 >= this.y && !this.leftHit) {
				this.xDirection = this.xDirection * -1
				this.yDirection = Math.random() + 2.5
				this.speed = this.speed + 50
				this.leftHit = true
				this.rightHit = false
			}
		}

		//AI side update

		if (this.x >= g_Manager.canvasWidth + 30) {
			this.x = 200
			this.y = g_Manager.canvasHeight/2
			this.speed = 150
			this.xDirection = -1
			this.yDirection = 0
			this.leftHit = false
			this.rightHit = false
		}

		else if (this.x >= g_Manager.canvasWidth - 20) {

			if (g_Manager.gameObjects[2].y <= this.y + 10 && g_Manager.gameObjects[2].y + 50 >= this.y && !this.rightHit) {
				this.xDirection = this.xDirection * -1
				this.yDirection = Math.random() * 0.5 * -1
				this.speed = this.speed + 50
				this.rightHit = true
				this.leftHit = false
			
			}

			// if (g_Manager.gameObjects[2].y <= this.y + 10 && eventListener_yMouse + 15 >= this.y + 5 && !this.rightHit) {
			// 	this.xDirection = this.xDirection * -1
			// 	this.yDirection = Math.random() + 2.5 * -1
			// 	this.speed = this.speed + 50
			// 	this.rightHit = true
			// 	this.leftHit = false
				
			// }

			// else if (g_Manager.gameObjects[2].y + 15 < this.y + 5 && g_Manager.gameObjects[2].y + 35 >= this.y + 5 && !this.rightHit) {
			// 	this.xDirection = this.xDirection * -1
			// 	this.yDirection = Math.random() * 0.5 * -1
			// 	this.speed = this.speed + 50
			// 	this.rightHit = true
			// 	this.leftHit = false
		
			// }

			// else if (eventListener_yMouse + 35 < this.y + 5 && eventListener_yMouse + 50 >= this.y && !this.rightHit) {
			// 	this.xDirection = this.xDirection * -1
			// 	this.yDirection = Math.random() + 2.5
			// 	this.speed = this.speed + 50
			// 	this.rightHit = true
			// 	this.leftHit = false
			// }
		}


		//Y bounce update

		if (this.y >= g_Manager.canvasHeight) {
			this.y = g_Manager.canvasHeight
			this.yDirection = this.yDirection * -1
		}

		else if (this.y <= 0) {
			this.y = 0
			this.yDirection = this.yDirection * -1
		}

		// g_Manager.deleteCache.push(this.x, this.y)
		

	}




	this.draw = function (context) {
		
		// 

		context.drawImage(this.image, this.x, this.y)
		


	}	





}