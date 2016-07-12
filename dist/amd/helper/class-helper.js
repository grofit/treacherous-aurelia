define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    

    var _class, _temp;

    var ClassHelper = exports.ClassHelper = (_temp = _class = function ClassHelper() {
        
    }, _class.hasClass = function (element, className) {
        if (element.classList) {
            return element.classList.contains(className);
        }

        return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }, _class.addClass = function (element, className) {
        if (element.classList) {
            element.classList.add(className);
        } else if (!ClassHelper.hasClass(element, className)) {
            element.className += " " + className;
        }
    }, _class.removeClass = function (element, className) {
        if (element.classList) {
            element.classList.remove(className);
        } else if (ClassHelper.hasClass(element, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            element.className = element.className.replace(reg, ' ');
        }
    }, _temp);
});