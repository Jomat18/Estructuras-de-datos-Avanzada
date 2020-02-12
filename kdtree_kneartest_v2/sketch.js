count = 0;
data= []
var root;

function setup()
{
	var width = 700;
	var height = 500;		

	createCanvas(width, height);
	
	
	//let range = new Rectangle(mouseX,mouseY,50,50)

	for(let i=0;i<300;i++){
		var xx=Math.floor(Math.random()*width);
		var yy=Math.floor(Math.random()*height);
		data.push([xx,yy]);
	
	}

	/*
	data = [
	[40, 70],
	[70, 130],
	[90, 40],
	[110, 100],
	[140, 110],
	[160, 100],
	[150, 30]
	];
*/
/*
	for(let i=0;i<data.length;i++){
		
		let c = color(255, 255, 255); 
		fill(c);
		circle(data[i][0], height-data[i][1], 7);
		textSize(8);
		text(data[i][0] + ',' + data[i][1], data[i][0]+5, height -data[i][1]);
	}
	*/

	//var x=Math.floor(Math.random()*height);
	//var y=Math.floor(Math.random()*height);
	//var point = [140, 90];
	//point=[x,y]

	root = build_kdtree(data);
	//console.log(getHeight(root));
	//console.log(root.point);
	//generate_dot(root);
	//console.log("\n");
	//console.log(closest_point_brute_force(data, point));
	//console.log("\n");
	
	//best = naive_closest_point(root, point);
	//console.log(best)

	
	//knearest=[]
	//knearestpoints(root, point , knearest);
	
	//console.log(count);
	
	
	//console.log(best);

}

function draw() {  
    
    //background(220); 
    background(0);  
    show();
    // Use color() function 
    stroke(0,255,0);
    noFill(); 
    //let c = color('green'); 
    // Draw a circle 
    radio = 100;
    var x = mouseX;
    var y = mouseY;
	

    //circle(x, y, radio*2);  

    rectMode(CENTER);
	let range = new Rectangle(mouseX,mouseY,50,50)
	rect(range.x, range.y, range.w*2, range.h*2);
	
	let knearest = [];
	//point=[x, y]
	point=[range.x, range.y]

	//console.log("point: "+point);
	//query(range, points);
	//range_query_circle(root, point , knearest, radio);
	range_query_rectangle(root, point , knearest, range);

	//console.log(knearest);

   for(let i=0;i<knearest.length;i++){
		let c = color(255, 204, 0); 
		fill(c);
		
		circle(knearest[i][0], height-knearest[i][1], 7);
		textSize(8);
		text(knearest[i][0] + ',' + knearest[i][1], knearest[i][0]+5, height -knearest[i][1]);
	}
   
} 