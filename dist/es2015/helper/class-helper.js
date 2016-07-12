var _class, _temp;

export let ClassHelper = (_temp = _class = class ClassHelper {}, _class.hasClass = (element, className) => {
    if (element.classList) {
        return element.classList.contains(className);
    }

    return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}, _class.addClass = (element, className) => {
    if (element.classList) {
        element.classList.add(className);
    } else if (!ClassHelper.hasClass(element, className)) {
        element.className += " " + className;
    }
}, _class.removeClass = (element, className) => {
    if (element.classList) {
        element.classList.remove(className);
    } else if (ClassHelper.hasClass(element, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        element.className = element.className.replace(reg, ' ');
    }
}, _temp);