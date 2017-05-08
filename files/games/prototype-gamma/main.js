var gameX = 1024;
var gameY = 720;

var tilesize = 32;

var mapsizeX = 64;
var mapsizeY = 64;

var mouse = {
    'X': -1,
    'Y': -1,
    'tileX': -1,
    'tileY': -1,
    'onTile': -1

}

var texts = [];

//key bindings
var customKeys = { "scrollUp": "a", "scrollDown": "b", "scrollLeft": "c", "scrollRight": "d" }

var keyTable = [
    ["scrollUp", "W"],
    ["scrollDown", "S"],   
    ["scrollLeft", "A"],
    ["scrollRight", "D"]

]





//the matter itself
var game = new Phaser.Game(gameX, gameY, Phaser.CANVAS, '',
    { preload: preload, create: create, update: update, render: render });



function preload(){

    game.renderer.renderSession.roundPixels = true

    var folder = '../files/games/prototype-gamma/';
    var GFX = folder + 'gfx/';

    game.load.image('katamori', GFX + 'katamori.png');

    game.load.spritesheet('tileset', GFX + 'tileset.png', tilesize, tilesize);

    game.time.advancedTiming = true;
}




function create(){

    //generalizations
    var graphics = game.add.graphics(0, 0);
    window.graphics = graphics;

    //titlepic.inputEnabled = true;
    //titlepic.input.useHandCursor = true;
    //titlepic.events.onInputDown.add(destroySprite, this);

    game.physics.startSystem(Phaser.Physics.ARCADE);
    drawable = game.add.group();




    //keyboard control
    addKeys();





    //the map
    map = game.add.tilemap();

    map.addTilesetImage('tileset');

    map.setCollision([1,3]);

    layer = map.create('level', mapsizeX, mapsizeY, tilesize, tilesize);
    drawable.add(layer);
    layer.resizeWorld();

    //performance improvement theoretically
    layer.renderSettings.enableScrollDelta = false;


    for(i=0;i<map.width;i++){
        for(j=0;j<map.height;j++){

          map.putTile(0, i, j, layer)

          if(j>25){
              if(i%10 == 0){ map.putTile(3, i, j, layer) }else{ map.putTile(1, i, j, layer) }

          }

        };
    };

    map.putTile(1, 5,5, layer);
    map.putTile(2, 1,2, layer);
    map.putTile(3, 3,4, layer);

    cursors = game.input.keyboard.createCursorKeys();

    drawable.sort();

    //game.camera.setSize(gameX*0.875, gameY*0.875);





}

function update(){

    mouse.X = game.input.mousePointer.x;
    mouse.Y = game.input.mousePointer.y;
    mouse.tileX = Math.floor(game.input.mousePointer.x/tilesize);
    mouse.tileY = Math.floor(game.input.mousePointer.y/tilesize);


    //game.physics.arcade.collide(player, layer);


}

function render(){

    game.debug.text("FPS: "+game.time.fps, gameX - 80, 64);
    game.debug.text("mouse: "+mouse.X+","+mouse.Y+"|"+mouse.tileX+","+mouse.tileY, gameX - 216, 96);
    game.debug.text("camera: "+game.camera.x+","+game.camera.y, gameX - 160, 128);

    //game.debug.body(player);

}
