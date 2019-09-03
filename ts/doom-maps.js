"use strict";
var DoomMaps = /** @class */ (function() {
	function DoomMaps() {
		this.maps = [];
		this.introduction = "";
	}

	DoomMaps.prototype.add = function(item) {
		this.maps.push(item);
	};
	DoomMaps.prototype.generateList = function() {
		var listDiv = document.createElement("div");

		this.maps.forEach(function(value) {
			listDiv.appendChild(value.generate());
		});

		return listDiv;
	};

	DoomMaps.prototype.generateIntroduction = function() {
		var introDiv = document.createElement("div");

		introDiv.innerHTML = this.introduction;

		return introDiv;
	};

	DoomMaps.prototype.setIntroduction = function(str) {
		this.introduction = str;
	};

	return DoomMaps;
})();

var handler = new XMLHttpReqHandler("doom-maps", makeMapList);

function makeMapList(response) {
	// initialize
	var doomMaps = new DoomMaps();
	var jsonData = JSON.parse(response);

	doomMaps.setIntroduction(jsonData.introduction);

	jsonData.items.forEach(function(value) {
		doomMaps.add(new Project(value));
	});

	// header
	var introDOM = document.getElementById("doom-maps-introduction");

	introDOM.appendChild(doomMaps.generateIntroduction());

	// list
	var mapsDOM = document.getElementById("doom-maps-timeline");

	mapsDOM.appendChild(doomMaps.generateList());

	// misc
	slideDOM();
}
