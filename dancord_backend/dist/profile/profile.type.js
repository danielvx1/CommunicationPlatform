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
exports.Profile = void 0;
const graphql_1 = require("@nestjs/graphql");
const types_1 = require("../server/types");
let Profile = class Profile {
    id;
    email;
    name;
    servers;
    imageUrl;
    channels;
};
exports.Profile = Profile;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => [types_1.Server], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], Profile.prototype, "servers", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Profile.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)(() => [types_1.Channel], { nullable: 'itemsAndList' }),
    __metadata("design:type", Array)
], Profile.prototype, "channels", void 0);
exports.Profile = Profile = __decorate([
    (0, graphql_1.ObjectType)()
], Profile);
//# sourceMappingURL=profile.type.js.map