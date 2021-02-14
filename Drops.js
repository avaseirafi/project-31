class Drops{
    constructor(x,y){
        var options = {
            'resitution': 0.1,
            'fricton': 0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.body);
    }


display(){
    fill(0,0,255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
}
}