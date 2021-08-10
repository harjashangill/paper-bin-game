class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.Bodies = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    
    World.add(world,this.Bodies)
    
  }

  show() {
    console.log("hi")
    var pos = this.Bodies.position;
    console.log("hello")
    push();
    rectMode(CENTER);
    
    fill("yellow");
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}
