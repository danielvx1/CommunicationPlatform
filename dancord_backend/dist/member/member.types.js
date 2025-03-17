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
exports.MemberRole = exports.Member = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_type_1 = require("../profile/profile.type");
const types_1 = require("../server/types");
let Member = class Member {
    id;
    profile;
    profileId;
    server;
    role;
    imageUrl;
    email;
    name;
    createdAt;
    updatedAt;
};
exports.Member = Member;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Member.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_type_1.Profile, { nullable: true }),
    __metadata("design:type", profile_type_1.Profile)
], Member.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Member.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => types_1.Server, { nullable: true }),
    __metadata("design:type", types_1.Server)
], Member.prototype, "server", void 0);
__decorate([
    (0, graphql_1.Field)(() => MemberRole),
    __metadata("design:type", String)
], Member.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Member.prototype, "updatedAt", void 0);
exports.Member = Member = __decorate([
    (0, graphql_1.ObjectType)()
], Member);
var MemberRole;
(function (MemberRole) {
    MemberRole["MODERATOR"] = "MODERATOR";
    MemberRole["ADMIN"] = "ADMIN";
    MemberRole["GUEST"] = "GUEST";
})(MemberRole || (exports.MemberRole = MemberRole = {}));
(0, graphql_1.registerEnumType)(MemberRole, {
    name: 'MemberRole',
    description: 'Defines the role of a member on a server',
});
//# sourceMappingURL=member.types.js.map