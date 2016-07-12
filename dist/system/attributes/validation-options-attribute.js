'use strict';

System.register(['aurelia-framework'], function (_export, _context) {
    "use strict";

    var inject, customAttribute, _dec, _dec2, _class, ValidationOptionsAttribute;

    

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            customAttribute = _aureliaFramework.customAttribute;
        }],
        execute: function () {
            _export('ValidationOptionsAttribute', ValidationOptionsAttribute = (_dec = customAttribute('validation-options'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
                function ValidationOptionsAttribute(element) {
                    

                    this.element = element;
                }

                ValidationOptionsAttribute.prototype.bind = function bind(binding, overrideContext) {
                    overrideContext.validationOptions = this.value;
                };

                return ValidationOptionsAttribute;
            }()) || _class) || _class));

            _export('ValidationOptionsAttribute', ValidationOptionsAttribute);
        }
    };
});