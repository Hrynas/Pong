function Ball () {
	
	this.startupBall = function () {
		

		this.x = 400
		this.y = 200
		this.zOrder = 0
		this.height = 10
		this.width = 10
		this.xDirection = 1
		this.yDirection = 0

		this.speed = 300
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

						if (g_Manager.gameObjects[x].image === i_enemyBar) {
							this.xDirection = this.xDirection * -1
							this.directionTemp = (Math.random() * (0.5 - 0.1) + 0.1)
							if (this.yDirection > 0) {this.yDirection = this.directionTemp}
							else {this.yDirection = this.directionTemp * -1}
							this.lastHit = g_Manager.gameObjects[x]
							break
						}
						else {
							this.xDirection = this.xDirection * -1
							this.lastHit = g_Manager.gameObjects[x]
							break
						}
					}
				}

				else if (this.xDirection == -1) {
					
					if (this.x <= g_Manager.gameObjects[x].x + g_Manager.gameObjects[x].width && 
						this.x >= g_Manager.gameObjects[x].x - this.width / 2 &&
						this.y + this.height >= g_Manager.gameObjects[x].y &&
						this.y <= g_Manager.gameObjects[x].y + g_Manager.gameObjects[x].height &&
						this.lastHit !== g_Manager.gameObjects[x]
					) {

						if (g_Manager.gameObjects[x].image === i_playerBar) {
							this.xDirection = this.xDirection * -1
							this.ballCenterX = this.x + this.width / 2
							this.ballCenterY = this.y + this.height / 2
							this.barMeasure = g_Manager.gameObjects[x].height / 5

							if (this.ballCenterY >= g_Manager.gameObjects[x].y + this.barMeasure &&
								this.ballCenterY <= g_Manager.gameObjects[x].y + g_Manager.gameObjects[x].height - this.barMeasure
							) {
								this.directionTemp = (Math.random() * (0.5 - 0.1) + 0.1)
								if (this.yDirection > 0) {this.yDirection = this.directionTemp}
								else {this.yDirection = this.directionTemp * -1}
							}

							else {
								if (this.ballCenterY < g_Manager.gameObjects[x].y + this.barMeasure * 2) {
									this.yDirection = -(Math.random() * (1 - 0.5) + 0.5)}
								else {this.yDirection = (Math.random() * (1 - 0.5) + 0.5)}
							}

							this.lastHit = g_Manager.gameObjects[x]
							break
						}

						else {
							console.log('misc')
							this.xDirection = this.xDirection * -1
							this.lastHit = g_Manager.gameObjects[x]
							break
						}
					}
				}
			}
		}




			


		// Y bounce update

		if (this.y >= g_Manager.canvasHeight - 10 || this.y <= 0) {
			// this.y = g_Manager.canvasHeight
			this.yDirection = this.yDirection * -1
		}

		// else if (this.y <= 0) {
		// 	this.y = 0
		// 	this.yDirection = this.yDirection * -1
		// }

		else if (this.x < - 50 || this.x > g_Manager.canvasWidth + 50) {
			this.x = 400
			this.y = 200
			this.speed = 300
			this.xDirection = -1
			this.yDirection = 0
			
		}


		if (this.speed > 600) {
			
			this.speed = 600

		}
		

	}




	this.draw = function (context) {
		
		// 

		context.drawImage(this.image, this.x, this.y)
		


	}	





}