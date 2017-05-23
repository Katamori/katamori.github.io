var gameX = 2048;
var gameY = 2048;

var windowX = 1024;
var windowY = 720;

var mouse = {
    'X': -1,
    'Y': -1,
}

var texts = [];


//the matter itself
var game = new Phaser.Game(windowX, windowY, Phaser.CANVAS, '',
    { preload: preload, create: create, update: update, render: render });



function preload(){

    /*
    var folder = '../files/games/prototype-gamma/';
    var GFX = folder + 'gfx/';

    game.load.image('katamori', GFX + 'katamori.png');
    game.load.spritesheet('tileset', GFX + 'tileset.png', tilesize, tilesize);
    */

    game.renderer.renderSession.roundPixels = true
    game.time.advancedTiming = true;
    game.world.setBounds(0, 0, gameX, gameY);

    game.camera.z = 0;
}

var orbs = [];


function create(){

    colors = Phaser.Color.HSVColorWheel();



    //  Create a BitmapData just to plot Circle points to
    bmd = game.add.bitmapData(game.width, game.height);
    bmd.addToWorld();

    //  And display our circle on the top
    var graphics = game.add.graphics(0, 0);
    window.graphics = graphics;

    for(m=1;m<10;m++){
        orbs.push(new Orb(Math.random()*gameX, Math.random()*gameY, (Math.random()*200)-100, Math.random()*40, graphics));
    }
    //  Create a Circle
    a = new Orb(500,500,0, 100, graphics);
    



    drawable = game.add.group();

    //keyboard control
    addKeys();


    cursors = game.input.keyboard.createCursorKeys();

    drawable.sort();

    //game.camera.setSize(gameX*0.875, gameY*0.875);


}

function update(){

    mouse.X = game.input.mousePointer.x;
    mouse.Y = game.input.mousePointer.y;


    //game.physics.arcade.collide(player, layer);
    if(game.input.keyboard.isDown(Phaser.Keyboard["W"])){ game.camera.y-=10 };
    if(game.input.keyboard.isDown(Phaser.Keyboard["S"])){ game.camera.y+=10 };

    if(game.input.keyboard.isDown(Phaser.Keyboard["A"])){ game.camera.x-=10 };
    if(game.input.keyboard.isDown(Phaser.Keyboard["D"])){ game.camera.x+=10 }; 

    if(game.input.keyboard.isDown(Phaser.Keyboard["Y"])){ zoomIn(5) };
    if(game.input.keyboard.isDown(Phaser.Keyboard["X"])){ zoomOut(5) }; 
}

function render(){

    game.debug.text("FPS: "+game.time.fps, windowX - 80, 32);
    game.debug.text("mouse: "+mouse.X+","+mouse.Y, windowX - 216, 64);
    game.debug.text("camera: "+game.camera.x+","+game.camera.y+","+game.camera.z, windowX - 240, 96);

    //game.debug.body(player);

}
