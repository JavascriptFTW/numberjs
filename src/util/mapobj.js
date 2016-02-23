function mapobj(obj, cb) {
    let nObj = {};
    
    for (let key of obj) {
        nObj[key] = cb(key, obj[key], obj);
    }
    
    return nObj;
}

module.exports = mapobj;
