"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _validationStrategy = require("./strategy/validation-strategy");

Object.keys(_validationStrategy).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _validationStrategy[key];
        }
    });
});

var _inlineStrategy = require("./strategy/inline-strategy");

Object.keys(_inlineStrategy).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _inlineStrategy[key];
        }
    });
});

var _validateBindingBehaviour = require("./binding-behaviours/validate-binding-behaviour");

Object.keys(_validateBindingBehaviour).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
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