// alert('PASSED THROUGH')

function Update() {
	

	this.startupUpdate = function() {
		

	}


	this.updateLoop = function () {




		//clear canvas
		// this.context.clearRect(0,0, g_Manager.canvas.width, g_Manager.canvas.height)
		g_Manager.context.fillRect(0,0, g_Manager.canvas.width, g_Manager.canvas.height)


		//show FPS and find dt (elapsed time between frames)
		// this.context.fillText('FPS: ' + this.iFramesPerSecond, 0, 20)



		this.currentFrameTime = new Date().getTime()
		if( (this.currentFrameTime - this.iPreviousTickCount) >= 1000 ) { 
		    this.iPreviousTickCount = this.currentFrameTime; 
		    this.iFramesPerSecond = this.iFramesLapsed; 
		    this.iFramesLapsed = 0; 
		    this.fTotalSecondsLapsed+=1; 
		} 
		this.iFramesLapsed++; 
		this.iTotalFramesLapsed++; 
		
		this.dt = (this.currentFrameTime - this.lastFrameTime) / 1000
		this.lastFrameTime = this.currentFrameTime





		//Update and draw

		// for (var i = 0; i < this.deleteCache.length; i=i+2) {
		// 	// console.log(this.deleteCache[i])
		// 	this.context.clearRect(this.deleteCache[i],this.deleteCache[i+1], 10, 10)

		// }
		// this.deleteCache = new Array()
		



		for (x in this.gameObjects) {

			if (this.gameObjects[x].update) {
				this.gameObjects[x].update()
			}
			
			if (this.gameObjects[x].draw) {
				this.gameObjects[x].draw(g_Manager.context)
			}

		}


		
	}





}