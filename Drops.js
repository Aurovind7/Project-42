class Drops {
    constructor(x, y, angle){
      var options={
        density:1,
        friction:0.01,
        restitution:0.5
      }
      this.body=Bodies.rectangle(x,y,30,50,options)
      this.width=30;
      this.height=50;
      this.x=x;
      this.y=y;
      World.add(world,this.body)
    }
    display(){
      var angle=this.body.angle
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle)
      strokeWeight(4)
      stroke("blue")
      fill("blue")
      ellipse(0,0,this.width,this.height)
      pop();
      
    }
  
  };
  