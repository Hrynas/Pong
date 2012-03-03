

function Manager () {
	

	// alert('PASSED THROUGH')



	this.startupManager = function(){
		
		g_Manager = this
		this.gameObjects = new Array(2)


		this.canvas = document.getElementById('canvas')
		this.context = this.canvas.getContext('2d')
		this.canvasWidth = 800
		this.canvasHeight = 400
		this.canvas.width = this.canvasWidth
		this.canvas.height = this.canvasHeight

		//FPS monitoring
		this.currentFrameTime = 0; 
		this.lastFrameTime = new Date().getTime()
		this.iMaxFramesPerSecond = 60; 
		this.iTotalFramesLapsed = 0
		this.iFramesLapsed = 0; 
		this.iPreviousTickCount = 0; 
		this.iFramesPerSecond = 0; 
		this.fTotalSecondsLapsed = 0; 





		
		this.deleteCache = new Array()
		
		new EventListener().startupEventListener()
		new MiddleBar().startupMiddleBar()
		new PlayerBar().startupPlayerBar()
		new EnemyBar().startupEnemyBar()
		new Ball().startupBall()



		setInterval('g_Manager.updateLoop()', 1000/this.iMaxFramesPerSecond)



		



	}



	this.addGameObject = function (gameObject) {
		
		this.gameObjects.push(gameObject)
		this.gameObjects.sort(function(a,b){return a.zOrder - b.zOrder;})
		// this.gameObjects.sort()

	}




}

Manager.prototype = new Update;




