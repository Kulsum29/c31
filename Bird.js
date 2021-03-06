class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
   
    this.trajectory = []
    this.smokeimage = loadImage("sprites/smoke.png")
  }

  display() {
    super.display();
    if(this.body.velocity.x >5 ){
      console.log(this.body.velocity.x)
      var pos= [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos)
    }
    for(var i=0; i<this.trajectory.length; i++){
      image( this.smokeimage,this.trajectory[i][0],this.trajectory[i][1]);
    }
    
  }
}
