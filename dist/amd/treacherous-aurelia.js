define(["exports", "./strategy/validation-strategy", "./strategy/inline-strategy", "./binding-behaviours/validate-binding-behaviour"], function (exports, _validationStrategy, _inlineStrategy, _validateBindingBehaviour) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.keys(_validationStrategy).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validationStrategy[key];
            }
        });
    });
    Object.keys(_inlineStrategy).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _inlineStrategy[key];
            }
        });
    });
    Object.keys(_validateBindingBehaviour).forEach(function (key) {
        if (key === "default") return;
        Object.defineProperty(exports, key, {
            enumerable: true,
            get: function () {
                return _validateBindingBehaviour[key];
            }
        });
    });
    exports.configure = configure;
    function configure(aurelia) {
        aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
        aurelia.globalResources("./attributes/validation-group-attribute");
        aurelia.globalResources("./attributes/validation-options-attribute");
        aurelia.globalResources("./attributes/validate-property-attribute");
        aurelia.globalResources("./elements/validation-summary-element");

        aurelia.container.registerInstance(_validationStrategy.ValidationStrategy, new _inlineStrategy.InlineStrategy());
    }
});