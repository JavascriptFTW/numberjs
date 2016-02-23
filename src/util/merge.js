var is = require("./is.js");

function merge(obj1, ...others) {
    for (let obj2 of others) {
        for (let key in obj2) {
            if (obj2.hasOwnProperty(key)) {
                if (!obj1.hasOwnProperty(key)) {
                    obj1[key] = obj2[key];
                } else if (is.obj(obj1[key]) && is.obj(obj2[key])) {
                    merge(obj1[key], obj2[key]);
                } else {
                    obj1[key] = obj2[key];
                }
            }
        }
    }
    
    return obj1;
}

module.exports = merge;
