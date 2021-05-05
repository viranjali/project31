class Umbrella{
    constructor(x,y){
        var options ={
            isStatic:true
        }

        this.image = loadImage("images/WalkingFrame/walking_1.png");
        this.body = Bodies.circle(x, y, 60, options);
        this.r = 290;
        World.add(world, this.body);
    }

    display(){

        var pos = this.body.position;
        imageMode(CENTER);
        fill("blue");
        image(this.image,pos.x, pos.y, this.r, this.r);


    }
    
}