function print(name, string, x, y) {

    var style = {font: "16px Arial", fill: "white", align: "left"};

    //texts[] should exist when and/or where it's called
    if (typeof texts[name] != 'object'){
      texts[name] = game.add.text(x, y, string, style);
    }


};

function zoomIn(units){
	game.camera.z-=units;
	for(i=0;i<orbs.length;i++){ orbs[i].adjustDistance(units)};
	a.adjustDistance(units);
}

function zoomOut(units){
	game.camera.z+=units;
	for(i=0;i<orbs.length;i++){ orbs[i].adjustDistance((-1)*units)};
	a.adjustDistance((-1)*units);
}