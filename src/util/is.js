var is = {
    string(v) {
        return typeof v === "string";
    },
    number(v) {
        return typeof v === "number";
    },
    undef(v) {
        return typeof v === "undefined";
    },
    nil(v) {
        return v == null;
    },
    json(v) {
        return !is.nil(v) && typeof v === "object";
    },
    obj(v) {
        return is.json(v) && !is.array(v);
    },
    array(v) {
        return is.json(v) && v.constructor === Array;
    }
};

module.exports = is;
