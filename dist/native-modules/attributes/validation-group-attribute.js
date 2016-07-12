var _dec, _dec2, _class;



import { inject, customAttribute } from 'aurelia-framework';

export var ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
    function ValidationGroupAttribute(element) {
        

        this.element = element;
    }

    ValidationGroupAttribute.prototype.bind = function bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    };

    return ValidationGroupAttribute;
}()) || _class) || _class);