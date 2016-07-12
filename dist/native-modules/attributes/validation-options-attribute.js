var _dec, _dec2, _class;



import { inject, customAttribute } from 'aurelia-framework';

export var ValidationOptionsAttribute = (_dec = customAttribute('validation-options'), _dec2 = inject(Element), _dec(_class = _dec2(_class = function () {
    function ValidationOptionsAttribute(element) {
        

        this.element = element;
    }

    ValidationOptionsAttribute.prototype.bind = function bind(binding, overrideContext) {
        overrideContext.validationOptions = this.value;
    };

    return ValidationOptionsAttribute;
}()) || _class) || _class);