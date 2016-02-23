var mapobj = require("./util/mapobj.js");
var NumberPlus = require("./NumberPlus.js");

function number() {
    return new NumberPlus();
}

mapobj(NumberPlus.prototype, (key, method) => {
    return (v, ...args) => {
        return method.apply(new NumberPlus(v), args);
    };
});

global.number = number;
module.exports = number;
