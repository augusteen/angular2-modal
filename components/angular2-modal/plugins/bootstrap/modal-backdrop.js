"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var dialog_ref_1 = require('../../models/dialog-ref');
var modal_container_1 = require('./modal-container');
var dialogRefCount = 0;
/**
 * Represents the modal backdrop.
 */
var BSModalBackdrop = (function () {
    function BSModalBackdrop(dialog) {
        dialogRefCount++;
        document.body.classList.add('modal-open');
        if (!dialog.inElement) {
            this.position = this.size = this.point = null;
        }
        else {
            this.position = 'absolute';
            this.size = '100%';
            this.point = '0';
        }
    }
    BSModalBackdrop.prototype.ngOnDestroy = function () {
        if (--dialogRefCount === 0) {
            document.body.classList.remove('modal-open');
        }
    };
    BSModalBackdrop = __decorate([
        core_1.Component({
            selector: 'modal-backdrop',
            host: {
                '[style.position]': 'position',
                '[style.height]': 'size',
                '[style.width]': 'size',
                '[style.top]': 'point',
                '[style.left]': 'point',
                '[style.right]': 'point',
                '[style.bottom]': 'point'
            },
            directives: [modal_container_1.BSModalContainer],
            encapsulation: core_1.ViewEncapsulation.None,
            template: "<div [style.position]=\"position\" class=\"modal-backdrop fade in\"></div>\n<modal-container></modal-container>"
        }), 
        __metadata('design:paramtypes', [dialog_ref_1.DialogRef])
    ], BSModalBackdrop);
    return BSModalBackdrop;
}());
exports.BSModalBackdrop = BSModalBackdrop;
//# sourceMappingURL=modal-backdrop.js.map