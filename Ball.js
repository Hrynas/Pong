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
		this.speedIncrease = 25
		this.lastHit = null

		this.dtMax = 0.03
		this.image = i_ball

		this.bounceEnable = false

		g_Manager.addGameObject(this)

	}


	this.update = function () {
		
		this.dtBall = g_Manager.dt

		if (this.dtBall < this.dtMax) {
			this.x += this.dtBall * this.speed * this.xDirection
			this.y += this.dtBall * this.speed * this.yDirection
			this.callBallUpdate()
		}
		else {
			while (this.dtBall > this.dtMax) {
				this.x += this.dtMax * this.speed * this.xDirection
				this.y += this.dtMax * this.speed * this.yDirection
				this.callBallUpdate()
				this.dtBall -= this.dtMax
			}
		}
	}

	this.callBallUpdate = function () {

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
							this.directionTemp = (Math.random() * (0.5 - 0.1) + 0.1)
							if (this.yDirection > 0) {this.yDirection = this.directionTemp}
							else {this.yDirection = this.directionTemp * -1}
							this.speed = this.speed + this.speedIncrease
						}
						else {}

						this.lastHit = g_Manager.gameObjects[x]
						this.xDirection = this.xDirection * -1
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

						if (g_Manager.gameObjects[x].image === i_playerBar) {
							this.ballCenterX = this.x + this.width / 2
							this.ballCenterY = this.y + this.height / 2
							this.barMeasure = g_Manager.gameObjects[x].height / 5
							this.speed = this.speed + this.speedIncrease

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
						}
						else {}

						this.xDirection = this.xDirection * -1
						this.lastHit = g_Manager.gameObjects[x]
						break
					}
				}
			}
		}

		if (this.y >= g_Manager.canvasHeight - 10 || this.y <= 0) {
			if (this.y < 0) {this.y = 0}
			else {this.y = g_Manager.canvasHeight - 10}
			this.yDirection = this.yDirection * -1
		}

		else if (this.x < - 50 || this.x > g_Manager.canvasWidth + 50) {
			this.x = 400
			this.y = 200
			this.speed = 300
			this.xDirection = -1
			this.yDirection = 0
			this.lastHit = null
		}

		if (this.speed > 500) {
			this.speed = 500
		}
	}


	this.draw = function (context) {
		
		context.drawImage(this.image, this.x, this.y)
		
	}	


}