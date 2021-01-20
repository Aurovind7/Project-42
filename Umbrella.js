class Umbrella  {
    constructor(x, y){
      var options={
        restitution:0.8,
        friction:1.0,
        density:0.04,
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,400,400,options)
      this.width=400;
      this.height=400;
      World.add(world,this.body)
      this.image=loadImage("images/Walking Frame/walking_1.png")
    }
    display(){
      var pos=this.body.position
      var angle=this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      strokeWeight(4)
      stroke("white")
      fill("lightblue")
      //rect(0,0,this.width,this.height)
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  
  };
  