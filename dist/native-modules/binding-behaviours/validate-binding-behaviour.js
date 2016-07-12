var _dec, _dec2, _class;



import { inject, noView } from "aurelia-framework";
import { ValidationStrategy } from "../strategy/validation-strategy";

export var ValidateBindingBehavior = (_dec = inject(ValidationStrategy), _dec2 = noView(), _dec(_class = _dec2(_class = function () {
    function ValidateBindingBehavior(validationStrategy) {
        

        this.validationStrategy = validationStrategy;
    }

    ValidateBindingBehavior.prototype.bind = function bind(binding, overrideContext) {
        var _this = this;

        var element = binding.target;
        var propertyName = this.getTargetProperty(binding);

        var _validationStateHandler = function _validationStateHandler(args) {
            if (args.isValid) {
                _this.validationStrategy.actionValidProperty(element, propertyName);
            } else {
                _this.validationStrategy.actionInvalidProperty(element, propertyName, args.error);
            }
        };

        var _validationPredicate = function _validationPredicate(x) {
            console.log("pred", x.property, propertyName);return x.property == propertyName;
        };

        var _setupValidation = function _setupValidation() {
            return _this.validationGroup.propertyStateChangedEvent.subscribe(_validationStateHandler, _validationPredicate);
        };

        if (this._isWithinChildBinding(overrideContext)) {
            overrideContext = overrideContext.parentOverrideContext;
        }

        this.validationGroup = overrideContext.bindingContext.validationGroup;
        this.validationOptions = overrideContext.bindingContext.validationOptions || {};

        if (this.validationGroup) {
            binding.activeSubscription = _setupValidation();
            this.validationGroup.getPropertyError(propertyName).then(function (error) {
                if (error) {
                    _this.validationStrategy.actionInvalidProperty(element, propertyName, error);
                }
            });
        }
    };

    ValidateBindingBehavior.prototype.unbind = function unbind(binding, overrideContext) {
        if (binding.activeSubscription) {
            binding.activeSubscription();
            binding.activeSubscription = null;
        }
    };

    ValidateBindingBehavior.prototype.getTargetProperty = function getTargetProperty(binding) {
        var targetProperty;
        if (binding.sourceExpression && binding.sourceExpression.expression) {

            if (binding.sourceExpression.expression.name) {
                targetProperty = binding.sourceExpression.expression.name;
            }
        }

        return targetProperty;
    };

    ValidateBindingBehavior.prototype._isWithinChildBinding = function _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    };

    return ValidateBindingBehavior;
}()) || _class) || _class);