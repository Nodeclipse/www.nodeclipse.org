var canvas = new fabric.Canvas('canvas');

var rect = new fabric.Rect({
	top : 100,
	left : 100,
	width : 60,
	height : 70,
	fill : 'red'
});

var key = function(pos_x,pos_y){
	return new fabric.Rect({
	left : pos_x,
	top : pos_y,
	width : 20,
	height : 20,
	fill : 'grey'
});
}

var ar = [];
ar.push(key(100,100));
ar.push(key(150,100));

canvas.add(ar[0],ar[1]);
