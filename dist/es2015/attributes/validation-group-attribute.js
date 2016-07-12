var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let ValidationGroupAttribute = (_dec = customAttribute('validation-group'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class ValidationGroupAttribute {
    constructor(element) {
        this.element = element;
    }

    bind(binding, overrideContext) {
        overrideContext.validationGroup = this.value;
    }

}) || _class) || _class);