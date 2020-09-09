class Beam {
  constructor(x, y) {
    this.x = x;
    this.y = y;  
    this.vel = 3; 
    this.radius = 10; 
    this.color = "#ffff89"; 
  }

  drawBeam(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );
    ctx.fill();
  }

  moveBeam() {
    let new_x = this.x + this.vel;
    this.x = new_x;
  }
}

export default Beam; 