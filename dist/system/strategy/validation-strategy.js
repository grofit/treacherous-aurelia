"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var ValidationStrategy;

    

    return {
        setters: [],
        execute: function () {
            _export("ValidationStrategy", ValidationStrategy = function ValidationStrategy() {
                

                this.actionValidProperty = function (element, property) {
                    throw new Error("Must override method");
                };

                this.actionInvalidProperty = function (element, property, error) {
                    throw new Error("Must override method");
                };
            });

            _export("ValidationStrategy", ValidationStrategy);
        }
    };
});