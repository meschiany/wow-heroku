function createCanvas(divName) {
	
	var div = document.getElementById(divName);
	var canvas = document.createElement('canvas');
	
	div.appendChild(canvas);
	if (typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}	
	var ctx = canvas.getContext("2d");
	return ctx;
}

function initGraph(){
	var ctx = createCanvas("graphDiv1");
	
	var graph = new BarGraph(ctx);
	
	graph.maxValue = 100;
	graph.margin = 2;
	graph.colors = ["#ff0035", "#ff0035", "#ff0035", "#ff0035"];
	graph.xAxisLabelArr = ["North", "East", "West", "South"];
	graph.update([0,0,0,0]);
	document.querySelector("canvas").style="100%";
	setTimeout(function () {
		graph.update([Math.random() * 100, Math.random() * 100, Math.random() * 100, Math.random() * 100]);
	}, 1500);
}