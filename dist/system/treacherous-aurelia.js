"use strict";

System.register(["./strategy/validation-strategy", "./strategy/inline-strategy", "./binding-behaviours/validate-binding-behaviour"], function (_export, _context) {
    "use strict";

    var ValidationStrategy, InlineStrategy;
    return {
        setters: [function (_strategyValidationStrategy) {
            ValidationStrategy = _strategyValidationStrategy.ValidationStrategy;
            var _exportObj = {};

            for (var _key in _strategyValidationStrategy) {
                if (_key !== "default") _exportObj[_key] = _strategyValidationStrategy[_key];
            }

            _export(_exportObj);
        }, function (_strategyInlineStrategy) {
            InlineStrategy = _strategyInlineStrategy.InlineStrategy;
            var _exportObj2 = {};

            for (var _key2 in _strategyInlineStrategy) {
                if (_key2 !== "default") _exportObj2[_key2] = _strategyInlineStrategy[_key2];
            }

            _export(_exportObj2);
        }, function (_bindingBehavioursValidateBindingBehaviour) {
            var _exportObj3 = {};

            for (var _key3 in _bindingBehavioursValidateBindingBehaviour) {
                if (_key3 !== "default") _exportObj3[_key3] = _bindingBehavioursValidateBindingBehaviour[_key3];
            }

            _export(_exportObj3);
        }],
        execute: function () {
            function configure(aurelia) {
                aurelia.globalResources("./binding-behaviours/validate-binding-behaviour");
                aurelia.globalResources("./attributes/validation-group-attribute");
                aurelia.globalResources("./attributes/validation-options-attribute");
                aurelia.globalResources("./attributes/validate-property-attribute");
                aurelia.globalResources("./elements/validation-summary-element");

                aurelia.container.registerInstance(ValidationStrategy, new InlineStrategy());
            }

            _export("configure", configure);
        }
    };
});