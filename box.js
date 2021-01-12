class Box
{
    constructor(x,y,width,height,angle)
    {
       var options = 
       {
           restitution : 1,
           friction : 1,
           density : 0.05
       }

       this.width=width;
       this.height=height
       this.body=Bodies.rectangle(x,y,width,height,options);
       World.add(world,this.body);
    }

    display()
    {
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("black");
      fill("red");
      rect(0,0,this.width,this.height);
      pop();
    }
}