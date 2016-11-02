module.exports = function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["templates/browser/example.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<h1>Browser template example</h1>";
},"useData":true});

return this["JST"];

};