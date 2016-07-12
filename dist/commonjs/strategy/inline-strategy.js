"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InlineStrategy = undefined;

var _validationStrategy = require("./validation-strategy");

var _classHelper = require("../helper/class-helper");



function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InlineStrategy = exports.InlineStrategy = function (_ValidationStrategy) {
    _inherits(InlineStrategy, _ValidationStrategy);

    function InlineStrategy() {
        var _temp, _this, _ret;

        

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _ValidationStrategy.call.apply(_ValidationStrategy, [this].concat(args))), _this), _this._currentCount = 1, _this._getElementValidatorId = function (element) {
            if (!element.getAttribute("id")) {
                element.setAttribute("id", "unique-" + _this._currentCount++);
            }

            return element.getAttribute('id') + "-error-container";
        }, _this._createErrorElement = function (message, element) {
            var errorContainerName = _this._getElementValidatorId(element);
            var errorContainer = document.createElement("div");
            errorContainer.id = errorContainerName;
            errorContainer.className = "validation-error-container";
            errorContainer.textContent = message;
            element.parentElement.appendChild(errorContainer);
        }, _this._removeErrorElement = function (element) {
            var errorContainerName = this._getElementValidatorId(element);
            var errorElement = document.getElementById(errorContainerName);

            if (errorElement) {
                errorElement.remove();
            }
        }, _this._addElementError = function (message, element) {
            var errorContainerName = this._getElementValidatorId(element);
            var errorContainer = document.getElementById(errorContainerName);
            if (!errorContainer) {
                this._createErrorElement(message, element);
            } else {
                this._removeErrorElement(element);
                this._createErrorElement(message, element);
            }
        }, _this.actionValidProperty = function (element, property) {
            _classHelper.ClassHelper.removeClass(element, "invalid");
            _classHelper.ClassHelper.addClass(element, "valid");
            _this._removeErrorElement(element);
        }, _this.actionInvalidProperty = function (element, property, error) {
            _classHelper.ClassHelper.removeClass(element, "valid");
            _classHelper.ClassHelper.addClass(element, "invalid");
            _this._addElementError(error, element);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return InlineStrategy;
}(_validationStrategy.ValidationStrategy);