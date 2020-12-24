class Drops{
    constructor(x){
        this.body=Bodies.circle(x,0,5,{friction:0.1,density:1});
        World.add(gameWorld,this.body)
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle);
        fill("blue")
        ellipseMode(RADIUS);
        ellipse(0,0,5,5)
        pop()

    }
}