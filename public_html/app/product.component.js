/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MarketAPI_service_1 = require("./services/MarketAPI.service");
var ng2_file_upload_1 = require("ng2-file-upload");
var URL = window.SITE_URL + 'FileUploadServlet';
var ProductComponent = (function () {
    function ProductComponent(marketAPI, router) {
        this.marketAPI = marketAPI;
        this.router = router;
        this.uploader = new ng2_file_upload_1.FileUploader({ url: URL });
        this.uploader.onCompleteItem = function (item, response, status, headers) {
        };
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/html/product.component.html'
    }),
    __metadata("design:paramtypes", [MarketAPI_service_1.MarketAPI, router_1.Router])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map