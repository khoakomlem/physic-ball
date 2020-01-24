function Terrain() {
	this.arr = [];
	this.debug = false;
	// this.debug = true;

	this.addRect = function(x, y, w, h) {
		this.arr.push({x:x, y:y, w:w, h:h, type:'rect'})
	}

	this.drawDebug = function(){
		if (this.debug){
			for (var i in this.arr){
				fill(i*100);
				if (this.arr[i].type == 'rect')
					rect(this.arr[i].x, this.arr[i].y, this.arr[i].w, this.arr[i].h);
			}
		}
	}
}