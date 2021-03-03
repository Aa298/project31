class Raindrops {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
}  
    display(){
        var pos = this.body.postion;
        fill("blue");
        cricle(pos.x,pos.y,this.radius);
    }
}
  