function Orb(x,y,z,d,g){

    var self = this;

    //definition of inherited values
    this.x = x;
    this.y = y;
    this.diameter = d;

    //newly defined values
    this.physical_x = x;
    this.physical_y = y;
    this.physical_z = z;
    this.colorHex = 0x00af00;

    //methods
    this.displaySelf = function(g){
        g.beginFill(self.colorHex);
        g.drawCircle(self.x, self.y, self.diameter); 
        g.endFill();   
        g.graphicsData[0].shape = self;     
    }

    this.adjustDistance = function(i){

        if(game.camera.z < 0){
            self.diameter += i;
        }else if(game.camera.z > 1){
            self.diameter *= 0.9;
        }


    }

    //the constructor
    self.diameter += game.camera.z;
    console.log("I live again!");
    self.displaySelf(g);
}


Orb.prototype = new Phaser.Circle();
