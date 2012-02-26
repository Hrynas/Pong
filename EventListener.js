function EventListener () {
	
	this.startupEventListener = function () {
		

		eventListener_xMouse = 0
		eventListener_yMouse = 0
		g_Manager.canvas.addEventListener('mousemove', this.updateListener, false);

		// g_Manager.addGameObject(this)

	}

	this.updateListener = function (event) {
		
		if (event.layerX || event.layerX == 0) { // Firefox
			// eventListener_xMouse = event.layerX
			eventListener_yMouse = event.layerY
		} 

		else if (event.offsetX || event.offsetX == 0) { // Opera
			// eventListener_xMouse = event.offsetX
			eventListener_yMouse = event.offsetY
		}

	}


}