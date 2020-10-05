class Vehicle {
  constructor(x, y, r, img) {
    this.pos = createVector(random(width), random(height));
    this.img = img;
    this.target = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.r = r;
    this.maxspeed = 10;
    this.maxforce = 1;
    this.moved = false;
    this.mouse = createVector(mouseX, mouseY);
  }
  behaviors() {
    var arrive = this.arrive(this.target);
    arrive.mult(1);
    this.applyForce(arrive);

    if (this.moved) {
      var flee = this.flee(this.mouse);
      flee.mult(5);
      this.applyForce(flee);
    }
  }
  applyForce(f) {
    this.acc.add(f);
  }
  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
    if (mouseX !== this.mouse.x || mouseY != this.mouse.y) {
      this.moved = true;
      this.mouse = createVector(mouseX, mouseY);
    }
    else {
      this.moved = false;
    }
  }
  show() {
    stroke(255);
    strokeWeight(this.r);
    image(this.img, this.pos.x, this.pos.y, this.r * 2, this.r * 2);
  }
  arrive(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    var speed = this.maxspeed;
    if (d < 100) {
      speed = map(d, 0, 100, 0, this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxforce);
    return steer;
  }
  flee(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }
}
