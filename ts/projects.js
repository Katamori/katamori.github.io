"use strict";
var Projects = /** @class */ (function () {
    function Projects() {
        this.projects = [];
    }
    Projects.prototype.add = function (project) {
        this.projects.push(project);
    };
    Projects.prototype.generate = function () {
        var div = document.createElement("div");
        this.projects.forEach(function (value) {
            div.appendChild(value.generate());
        });
        return div;
    };
    return Projects;
}());

var handler = new XMLHttpReqHandler("projects", makeProjects);

function makeProjects(str) {
    var projects = JSON.parse(str);
    var dom = document.getElementById("projects-timeline");
    var aux = new Projects();
    projects.forEach(function (value) {
        aux.add(new Project(value));
    });
    dom.appendChild(aux.generate());
    slideDOM();
}
