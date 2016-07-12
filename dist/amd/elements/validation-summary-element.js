define(["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ValidationSummary = undefined;

    function _initDefineProp(target, property, descriptor, context) {
        if (!descriptor) return;
        Object.defineProperty(target, property, {
            enumerable: descriptor.enumerable,
            configurable: descriptor.configurable,
            writable: descriptor.writable,
            value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
        });
    }

    

    function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
            desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
            desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
            return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
            desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
            desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
            Object['define' + 'Property'](target, property, desc);
            desc = null;
        }

        return desc;
    }

    function _initializerWarningHelper(descriptor, context) {
        throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
    }

    var _dec, _dec2, _dec3, _class, _desc, _value, _class2, _descriptor;

    var ValidationSummary = exports.ValidationSummary = (_dec = (0, _aureliaFramework.customElement)("validation-summary"), _dec2 = (0, _aureliaFramework.inject)(_aureliaFramework.Element), _dec3 = (0, _aureliaFramework.inlineView)('<template><p class="validation-summary-entry" repeat.for="error of propertyErrors">${error.property} - ${error.error}</p></template>'), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = function () {
        function ValidationSummary(element) {
            

            _initDefineProp(this, "validationGroup", _descriptor, this);

            this.element = element;
            this.propertyErrors = [];
        }

        ValidationSummary.prototype.bind = function bind(binding, scope) {
            var _this = this;

            var validationGroup = this.validationGroup || scope.validationGroup;

            if (!validationGroup) {
                throw new Error("No validation group in scope or explicitly provided");
            }

            var refreshErrorSummary = function refreshErrorSummary() {
                validationGroup.getModelErrors().then(function (errors) {
                    _this.propertyErrors = [];
                    for (var propertyName in errors) {
                        _this.propertyErrors.push({ property: propertyName, error: errors[propertyName] });
                    }
                });
            };

            this._activeSubscription = validationGroup.propertyStateChangedEvent.subscribe(refreshErrorSummary);
            refreshErrorSummary();
        };

        ValidationSummary.prototype.detached = function detached() {
            if (this._activeSubscription) {
                this._activeSubscription();
            }
        };

        return ValidationSummary;
    }(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "validationGroup", [_aureliaFramework.bindable], {
        enumerable: true,
        initializer: null
    })), _class2)) || _class) || _class) || _class);
});