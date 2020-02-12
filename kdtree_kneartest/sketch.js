count = 0;

function setup()
{
	var width = 700;
	var height = 500;

	createCanvas(width, height);
	background(0);  
	
	//let range = new Rectangle(mouseX,mouseY,50,50)

	for(var x=0; x<width; x+=width/10){
		for(var y=0;y<height;y+=height/5){

			stroke(125,125,125);
			strokeWeight(1);
			line(x,0,x,height);
			line(0,y, width, y);
		}
	}
	
	

	var data = [];
	for(let i=0;i<300;i++){
		var x=Math.floor(Math.random()*height);
		var y=Math.floor(Math.random()*height);
		data.push([x,y]);
		let c = color(255, 255, 255); 
		fill(c);
		circle(x, height-y, 7);
		textSize(8);
		text(x + ',' + y, x+5, height -y);
	}
	
	/*
	var data = [
	[40, 70],
	[70, 130],
	[90, 40],
	[110, 100],
	[140, 110],
	[160, 100],
	[150, 30]
	];

	for(let i=0;i<data.length;i++){
		
		let c = color(255, 255, 255); 
		fill(c);
		circle(data[i][0], height-data[i][1], 7);
		textSize(8);
		text(data[i][0] + ',' + data[i][1], data[i][0]+5, height -data[i][1]);
	}
	*/

	var x=Math.floor(Math.random()*height);
	var y=Math.floor(Math.random()*height);
	//var point = [140, 90];
	var point=[x,y]
	let c = color('magenta'); 
	fill(c);
	circle(point[0], height-point[1], 7);
	

	var root = build_kdtree(data);
	//console.log(getHeight(root));
	//console.log(root.point);
	//generate_dot(root);
	//console.log("\n");
	console.log(closest_point_brute_force(data, point));
	console.log("\n");
	
	//best = naive_closest_point(root, point);
	//console.log(best)

	//console.log(closest_point(root, point));
	knearest=[]
	knearestpoints(root, point, knearest);
	console.log(knearest)
	console.log(count);
	for(let i=0;i<knearest.length;i++){
		let c = color(255, 204, 0); 
		fill(c);
		circle(knearest[i][0], height-knearest[i][1], 7);
		textSize(8);
		text(knearest[i][0] + ',' + knearest[i][1], knearest[i][0]+5, height -knearest[i][1]);
	}
	
	//console.log(best);

}
