function EnemyBar () {
	
	this.startupEnemyBar = function () {
		
		this.x = g_Manager.canvas.width - 10
		this.y = g_Manager.canvas.height / 2
		this.zOrder = 0
		this.height = 50
		this.width = 10

		this.image = i_enemyBar

		this.bounceEnable = true

		// g_Manager.canvas.addEventListener('mousemove', this.update, false);

		g_Manager.addGameObject(this)

	}

	this.update = function () {
		
		
		this.y = g_Manager.gameObjects[3].y - 20

	}


	this.draw = function (context) {
		
		context.drawImage(this.image, this.x, this.y)

	}	

}