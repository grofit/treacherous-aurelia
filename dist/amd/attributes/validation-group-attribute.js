define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ValidationGroupAttribute = undefined;

    

    var _dec, _dec2, _class;

    var ValidationGroupAttribute = exports.ValidationGroupAttribute = (_dec = (0, _aureliaFramework.customAttribute)('validation-group'), _dec2 = (0, _aureliaFramework.inject)(Element), _dec(_class = _dec2(_class = function () {
        function ValidationGroupAttribute(element) {
            

            this.element = element;
        }

        ValidationGroupAttribute.prototype.bind = function bind(binding, overrideContext) {
            overrideContext.validationGroup = this.value;
        };

        return ValidationGroupAttribute;
    }()) || _class) || _class);
});