

export var ValidationStrategy = function ValidationStrategy() {
    

    this.actionValidProperty = function (element, property) {
        throw new Error("Must override method");
    };

    this.actionInvalidProperty = function (element, property, error) {
        throw new Error("Must override method");
    };
};