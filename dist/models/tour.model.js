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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tour = void 0;
const typegoose_1 = require("@typegoose/typegoose");
let Tour = class Tour {
};
exports.Tour = Tour;
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Tour.prototype, "name", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Tour.prototype, "thumbnail", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Tour.prototype, "category", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Tour.prototype, "categoryId", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", String)
], Tour.prototype, "description", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        type: () => [String],
    }),
    __metadata("design:type", Array)
], Tour.prototype, "images", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
        type: () => [String],
    }),
    __metadata("design:type", Array)
], Tour.prototype, "activities", void 0);
__decorate([
    (0, typegoose_1.prop)({
        required: true,
    }),
    __metadata("design:type", Number)
], Tour.prototype, "price", void 0);
exports.Tour = Tour = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
        },
        options: {
            allowMixed: typegoose_1.Severity.ALLOW,
        },
    })
], Tour);
const TourModel = (0, typegoose_1.getModelForClass)(Tour);
exports.default = TourModel;
//# sourceMappingURL=tour.model.js.map