'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, _dec, _dec2, _class, ValidationGroupAttribute;

    

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('ValidationGroupAttribute', ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
                function ValidationGroupAttribute(element) {
                    

                    this.element = element;
                }

                ValidationGroupAttribute.prototype.bind = function bind(binding, overrideContext) {
                    overrideContext.validationGroup = this.value;
                };

                return ValidationGroupAttribute;
            }()) || _class) || _class));

            _export('ValidationGroupAttribute', ValidationGroupAttribute);
        }
    };
});