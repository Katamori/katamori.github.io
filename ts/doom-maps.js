"use strict";
var DoomMaps = /** @class */ (function () {
    function DoomMaps() {
        this.maps = [];
    }
    DoomMaps.prototype.add = function (project) {
        this.maps.push(project);
    };
    DoomMaps.prototype.generate = function () {
        var div = document.createElement("div");
        this.maps.forEach(function (value) {
            div.appendChild(value.generate());
        });
        return div;
    };
    return DoomMaps;
}());

var handler = new XMLHttpReqHandler("doom-maps", makeProjects);

function makeProjects(str) {
    var maps = JSON.parse(str);
    var dom = document.getElementById("doom-maps-timeline");
    var aux = new DoomMaps();
    maps.forEach(function (value) {
        aux.add(new Project(value));
    });
    dom.appendChild(aux.generate());
    slideDOM();
}