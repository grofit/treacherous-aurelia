define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    

    var ValidationStrategy = exports.ValidationStrategy = function ValidationStrategy() {
        

        this.actionValidProperty = function (element, property) {
            throw new Error("Must override method");
        };

        this.actionInvalidProperty = function (element, property, error) {
            throw new Error("Must override method");
        };
    };
});