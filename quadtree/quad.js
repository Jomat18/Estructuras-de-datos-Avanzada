

class Point{

	constructor(x,y)
	{
		this.x=x;
		this.y=y;
	}
}

class Rectangle{

	constructor(x,y,w,h)
	{
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
	}

	pertenece(point)
	{
		return point.x>(this.x-this.w) && point.x<(this.x+this.w) && point.y>(this.y-this.h) && point.y<(this.y+this.h)
	}
	
	intersectar(range)
	{	
		return !(range.x-range.w > this.x+this.w || 
			range.x+range.w < this.x-this.w ||
			range.y-range.h > this.y+this.h ||
			range.y+range.h < this.y-this.h);
		
	}


}

class Quadtree{

	constructor(frontera,n)
	{
		this.frontera=frontera
		this.capacidad=n
		this.points=[]
		this.dividido=false

	}

	divide()
	{
		let no = new Rectangle(this.frontera.x-this.frontera.w/2,this.frontera.y-this.frontera.h/2,this.frontera.w/2,this.frontera.h/2);
		let ne = new Rectangle(this.frontera.x+this.frontera.w/2,this.frontera.y-this.frontera.h/2,this.frontera.w/2,this.frontera.h/2);
		let so = new Rectangle(this.frontera.x-this.frontera.w/2,this.frontera.y+this.frontera.h/2,this.frontera.w/2,this.frontera.h/2);
		let se = new Rectangle(this.frontera.x+this.frontera.w/2,this.frontera.y+this.frontera.h/2,this.frontera.w/2,this.frontera.h/2);

		this.hijoNO = new Quadtree(no,this.capacidad);
		this.hijoNE = new Quadtree(ne,this.capacidad);
		this.hijoSO = new Quadtree(so,this.capacidad);
		this.hijoSE = new Quadtree(se,this.capacidad);	
		this.dividido=true;

	}



	insertar(point)
	{
		if(!this.frontera.pertenece(point))
			return

		if(this.points.length<this.capacidad)
		{	this.points.push(point)
			return	
		}

		if(!this.dividido)
		{
			this.divide()
			this.dividido=true;
		}

		this.hijoNO.insertar(point);
		this.hijoNE.insertar(point);
		this.hijoSO.insertar(point);
		this.hijoSE.insertar(point);

	}

	query(range, found)
	{
		if(!range.intersectar(this.frontera))
		{	
			return found;
		}
		for(let i=0;i<this.points.length;i++){
			if(range.pertenece(this.points[i]))
			{	found.push(this.points[i]);
				count=count+1;
			}
		}

		if(this.dividido)
		{
			this.hijoNO.query(range,found)
			this.hijoNE.query(range,found)
			this.hijoSO.query(range,found)
			this.hijoSE.query(range,found)
		}	

		return found;
	}



	show(){
		stroke(255);
		strokeWeight(1);	
		noFill();
		rectMode(CENTER);
		rect(this.frontera.x, this.frontera.y, this.frontera.w*2, this.frontera.h*2);
		//console.log(rect)
		if(this.dividido){
			this.hijoNO.show();
			this.hijoNE.show();
			this.hijoSO.show();
			this.hijoSE.show();
		}

		for(let p of this.points){
			strokeWeight(4);
			point(p.x, p.y);
		}
	}

}




