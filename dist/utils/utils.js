"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderByClause = function (field, order) {
    var value;
    if (field.latitude && field.longitude) {
        value = "geo.distance(" + field.fieldName + ", geography'POINT(" + field.longitude + " " + field.latitude + ")')";
    }
    else {
        value = field.fieldName ? field.fieldName + " " + order : "";
    }
    return value;
};
//# sourceMappingURL=utils.js.map