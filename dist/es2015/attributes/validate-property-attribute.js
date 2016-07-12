var _dec, _dec2, _class;

import { inject, customAttribute } from "aurelia-framework";
import { ValidationStrategy } from "../strategy/validation-strategy";

export let ValidateProperty = (_dec = customAttribute('validate-property'), _dec2 = inject(Element, ValidationStrategy), _dec(_class = _dec2(_class = class ValidateProperty {

    constructor(element, validationStrategy) {
        this._validationStateHandler = args => {
            if (args.isValid) {
                this.validationStrategy.actionValidProperty(this.element, this.value);
            } else {
                this.validationStrategy.actionInvalidProperty(this.element, this.value, args.error);
            }
        };

        this._validationPredicate = x => {
            return x.property == this.value;
        };

        this.setupValidation = () => {
            this._activeSubscription = this.validationGroup.propertyStateChangedEvent.subscribe(this._validationStateHandler, this._validationPredicate);
        };

        this.element = element;
        this.validationStrategy = validationStrategy;
    }

    _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }

    bind(binding, overrideContext) {
        if (this._isWithinChildBinding(overrideContext)) {
            overrideContext = overrideContext.parentOverrideContext;
        }

        this.validationGroup = overrideContext.validationGroup;
        this.validationOptions = overrideContext.validationOptions || {};

        if (this.validationGroup) {
            this.setupValidation();
            this.validationGroup.getPropertyError(this.value).then(error => {
                if (error) {
                    this.validationStrategy.actionInvalidProperty(this.element, this.value, error);
                }
            });
        }
    }

    detached() {
        if (this._activeSubscription) {
            this._activeSubscription();
        }
    }

}) || _class) || _class);