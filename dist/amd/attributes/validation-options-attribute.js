define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ValidationOptionsAttribute = undefined;

    

    var _dec, _dec2, _class;

    var ValidationOptionsAttribute = exports.ValidationOptionsAttribute = (_dec = (0, _aureliaFramework.customAttribute)('validation-options'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
        function ValidationOptionsAttribute(element) {
            

            this.element = element;
        }

        ValidationOptionsAttribute.prototype.bind = function bind(binding, overrideContext) {
            overrideContext.validationOptions = this.value;
        };

        return ValidationOptionsAttribute;
    }()) || _class) || _class);
});