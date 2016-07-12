var _dec, _dec2, _class;

import { inject, noView } from "aurelia-framework";
import { ValidationStrategy } from "../strategy/validation-strategy";

export let ValidateBindingBehavior = (_dec = inject(ValidationStrategy), _dec2 = noView(), _dec(_class = _dec2(_class = class ValidateBindingBehavior {
    constructor(validationStrategy) {
        this.validationStrategy = validationStrategy;
    }

    bind(binding, overrideContext) {
        let element = binding.target;
        let propertyName = this.getTargetProperty(binding);

        let _validationStateHandler = args => {
            if (args.isValid) {
                this.validationStrategy.actionValidProperty(element, propertyName);
            } else {
                this.validationStrategy.actionInvalidProperty(element, propertyName, args.error);
            }
        };

        let _validationPredicate = x => {
            console.log("pred", x.property, propertyName);return x.property == propertyName;
        };

        let _setupValidation = () => {
            return this.validationGroup.propertyStateChangedEvent.subscribe(_validationStateHandler, _validationPredicate);
        };

        if (this._isWithinChildBinding(overrideContext)) {
            overrideContext = overrideContext.parentOverrideContext;
        }

        this.validationGroup = overrideContext.bindingContext.validationGroup;
        this.validationOptions = overrideContext.bindingContext.validationOptions || {};

        if (this.validationGroup) {
            binding.activeSubscription = _setupValidation();
            this.validationGroup.getPropertyError(propertyName).then(error => {
                if (error) {
                    this.validationStrategy.actionInvalidProperty(element, propertyName, error);
                }
            });
        }
    }

    unbind(binding, overrideContext) {
        if (binding.activeSubscription) {
            binding.activeSubscription();
            binding.activeSubscription = null;
        }
    }

    getTargetProperty(binding) {
        var targetProperty;
        if (binding.sourceExpression && binding.sourceExpression.expression) {

            if (binding.sourceExpression.expression.name) {
                targetProperty = binding.sourceExpression.expression.name;
            }
        }

        return targetProperty;
    }

    _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    }
}) || _class) || _class);