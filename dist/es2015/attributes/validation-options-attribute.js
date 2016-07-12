var _dec, _dec2, _class;

import { inject, customAttribute } from 'aurelia-framework';

export let ValidationOptionsAttribute = (_dec = customAttribute('validation-options'), _dec2 = inject(Element), _dec(_class = _dec2(_class = class ValidationOptionsAttribute {
    constructor(element) {
        this.element = element;
    }

    bind(binding, overrideContext) {
        overrideContext.validationOptions = this.value;
    }
}) || _class) || _class);