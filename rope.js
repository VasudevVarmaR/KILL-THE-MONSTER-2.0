class Rope
{
    constructor(body1,pointB)
    {

        var options=
        {
            bodyA : body1,
            pointB : pointB,
            stiffness : 1.2,
            length : 150
        }

        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    attach(body)
    {
       this.rope.bodyA=body; 
    }

    fly()
    {
        this.rope.bodyA=null;
    }

    display()
    {  
     if(this.rope.bodyA)
     {
     var posA=this.rope.bodyA.position;
     var posB=this.pointB;
     push();
     strokeWeight(0);
     line(posA.x,posA.y,posB.x,posB.y);
     pop();   
     }
    }
}