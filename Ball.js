function Ball () {
	
	this.startupBall = function () {
		

		this.x = 400
		this.y = 200
		this.zOrder = 0
		this.height = 10
		this.width = 10
		this.xDirection = -1
		this.yDirection = 0

		this.speed = 200
		this.lastHit = null

		this.previousX = -100
		this.previousY = -100

		this.image = i_ball

		this.bounceEnable = false

		g_Manager.addGameObject(this)


	}


	this.update = function () {
		
		
		
		// g_Manager.dt = 0.01
					
		this.x += g_Manager.dt * this.speed * this.xDirection
		this.y += g_Manager.dt * this.speed * this.yDirection






		for (x in g_Manager.gameObjects) {

			if (g_Manager.gameObjects[x].bounceEnable) {

				if (this.xDirection === 1) {
					
					if (this.x + this.width >= g_Manager.gameObjects[x].x && 
						this.x + this.width / 2 <= g_Manager.gameObjects[x].x + g_Manager.gameObjects[x].width &&
						this.y + this.height >= g_Manager.gameObjects[x].y &&
						this.y <= g_Manager.gameObjects[x].y + g_Manager.gameObjects[x].height &&
						this.lastHit !== g_Manager.gameObjects[x]
					) {
						
						this.xDirection = this.xDirection * -1
						this.lastHit = g_Manager.gameObjects[x]
						break
						
					}
				}

				else if (this.xDirection == -1) {
					
					if (this.x <= g_Manager.gameObjects[x].x + g_Manager.gameObjects[x].width && 
						this.x >= g_Manager.gameObjects[x].x - this.width / 2 &&
						this.y + this.height >= g_Manager.gameObjects[x].y &&
						this.y <= g_Manager.gameObjects[x].y + g_Manager.gameObjects[x].height &&
						this.lastHit !== g_Manager.gameObjects[x]
					) {
						
						this.xDirection = this.xDirection * -1
						this.lastHit = g_Manager.gameObjects[x]
						break
						
					}
				}
			}
		}




			


		// Y bounce update

		if (this.y >= g_Manager.canvasHeight) {
			this.y = g_Manager.canvasHeight
			this.yDirection = this.yDirection * -1
		}

		else if (this.y <= 0) {
			this.y = 0
			this.yDirection = this.yDirection * -1
		}

		else if (this.x < - 30) {
			this.x = 350
			this.y = g_Manager.canvasHeight/2
			this.speed = 150
			this.xDirection = -1
			this.yDirection = 0
			this.leftHit = false
			this.rightHit = false
			
		}

		else if (this.x > g_Manager.canvasWidth + 30) {
			this.x = 350
			this.y = g_Manager.canvasHeight/2
			this.speed = 150
			this.xDirection = -1
			this.yDirection = 0
			this.leftHit = false
			this.rightHit = false
			

		}

		// g_Manager.deleteCache.push(this.x, this.y)
		

	}




	this.draw = function (context) {
		
		// 

		context.drawImage(this.image, this.x, this.y)
		


	}	





}