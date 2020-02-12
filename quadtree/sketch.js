/*

function setup(){
	createCanvas(400,400);

	let boundary = new Rectangle(200,200,200,200);
	let qt = new Quadtree(boundary, 10);

	console.log(qt);
	
	for(let i=0; i<100;i++){
		let p = new Point(Math.random()*400, Math.random()*400);
		qt.insertar(p);
	}
	
	background(0);
	qt.show();
}*/



let qt;
let count=0;

function setup(){
	createCanvas(400,400);

	let boundary = new Rectangle(200,200,200,200);
	qt = new Quadtree(boundary, 4);
	
	for(let i=0; i<300;i++){
		let p = new Point(Math.random()*400, Math.random()*400);
		qt.insertar(p);
	}

}

function draw()
{
	background(0);
	qt.show();

	stroke(0,255,0);
	rectMode(CENTER);
	let range = new Rectangle(mouseX,mouseY,50,50)
	rect(range.x, range.y, range.w*2, range.h*2);

	let points = [];
	qt.query(range, points);

	for(let p of points){
		strokeWeight(4);
		point(p.x,p.y);
	}

	console.log(count + " ")
	
}

/*
function setup(){
	createCanvas(400,400);

	let boundary = new Rectangle(200,200,200,200);
	qt = new Quadtree(boundary, 4);
	
	for(let i=0; i<100;i++){
		let p = new Point(Math.random()*400, Math.random()*400);
		qt.insertar(p);
	}

	background(0);
	qt.show();

	stroke(0,255,0);
	rectMode(CENTER);
	let range = new Rectangle(random(200),random(200),random(50),random(50));
	rect(range.x,range.y,range.w*2,range.h*2);
	let points =[]
	qt.query(range,points,count);

	for(let p of points){
		strokeWeight(4);
		point(p.x,p.y);
	}

	console.log(points);
	
	console.log(count);
}


function setup()
{
	createCanvas(400,400);

	let boundary = new Rectangle(200,200,200,200);
	let qt = new Quadtree(boundary, 4);
	function​ draw(){

	background(0);
	if(mouseIsPressed)
	{
		for(let i=0;i<300;i++){
			let m = new Point(mouseX, mouseY);
			qt.insertar(m);
		}

	}
	background(0);
	qt.show();

}
*/

