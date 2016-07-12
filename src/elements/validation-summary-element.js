import {customElement, inlineView, inject, bindable, Element} from "aurelia-framework";

@customElement("validation-summary")
@inject(Element)
@inlineView('<template><p class="validation-summary-entry" repeat.for="error of propertyErrors">${error.property} - ${error.error}</p></template>')
export class ValidationSummary {

    @bindable validationGroup;

    constructor(element) {
        this.element = element;
        this.propertyErrors = [];
    }

    bind(binding, scope) {
        var validationGroup  = this.validationGroup || scope.validationGroup;

        if(!validationGroup) { throw new Error("No validation group in scope or explicitly provided"); }

        var refreshErrorSummary = () => {
            validationGroup.getModelErrors()
                .then((errors) => {
                    this.propertyErrors = [];
                    for(var propertyName in errors) {
                        this.propertyErrors.push({ property: propertyName, error: errors[propertyName] });
                    }
                });
        };

        this._activeSubscription = validationGroup.propertyStateChangedEvent.subscribe(refreshErrorSummary);
        refreshErrorSummary();
    }

    detached() {
        if(this._activeSubscription) {
            this._activeSubscription();
        }
    }
}
