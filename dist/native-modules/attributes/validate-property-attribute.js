var _dec, _dec2, _class;



import { inject, customAttribute } from "aurelia-framework";
import { ValidationStrategy } from "../strategy/validation-strategy";

export var ValidateProperty = (_dec = customAttribute('validate-property'), _dec2 = inject(Element, ValidationStrategy), _dec(_class = _dec2(_class = function () {
    function ValidateProperty(element, validationStrategy) {
        var _this = this;

        

        this._validationStateHandler = function (args) {
            if (args.isValid) {
                _this.validationStrategy.actionValidProperty(_this.element, _this.value);
            } else {
                _this.validationStrategy.actionInvalidProperty(_this.element, _this.value, args.error);
            }
        };

        this._validationPredicate = function (x) {
            return x.property == _this.value;
        };

        this.setupValidation = function () {
            _this._activeSubscription = _this.validationGroup.propertyStateChangedEvent.subscribe(_this._validationStateHandler, _this._validationPredicate);
        };

        this.element = element;
        this.validationStrategy = validationStrategy;
    }

    ValidateProperty.prototype._isWithinChildBinding = function _isWithinChildBinding(overrideContext) {
        return overrideContext["$index"] || overrideContext["$even"] || overrideContext["$odd"];
    };

    ValidateProperty.prototype.bind = function bind(binding, overrideContext) {
        var _this2 = this;

        if (this._isWithinChildBinding(overrideContext)) {
            overrideContext = overrideContext.parentOverrideContext;
        }

        this.validationGroup = overrideContext.validationGroup;
        this.validationOptions = overrideContext.validationOptions || {};

        if (this.validationGroup) {
            this.setupValidation();
            this.validationGroup.getPropertyError(this.value).then(function (error) {
                if (error) {
                    _this2.validationStrategy.actionInvalidProperty(_this2.element, _this2.value, error);
                }
            });
        }
    };

    ValidateProperty.prototype.detached = function detached() {
        if (this._activeSubscription) {
            this._activeSubscription();
        }
    };

    return ValidateProperty;
}()) || _class) || _class);