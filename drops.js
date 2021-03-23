class Drops {
    constructor(x, y) {
        this.bodies = Bodies.circle(x, y, 5);
        World.add(world, this.bodies);
    }

    display() {
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(this.bodies.position.x, this.bodies.position.y, 5);
    }
}