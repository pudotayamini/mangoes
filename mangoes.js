class mango {
    constructor(x, y) {

        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }

        this.x = x;
        this.y = y;
        this.image = loadImage("mango.png");

        this.mango = Bodies.circle(x, y, 50, options);
        World.add(world, this.mango);

    }

    display() {

        var pos = this.mango.position;

        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, 50, 50);
        imageMode(CENTER);
        image(this.image, 0, 0, 50, 50);
        pop()

    }
}