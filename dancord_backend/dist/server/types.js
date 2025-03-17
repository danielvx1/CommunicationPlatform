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
exports.Server = exports.ChannelType = exports.Channel = void 0;
const graphql_1 = require("@nestjs/graphql");
const member_types_1 = require("../member/member.types");
const profile_type_1 = require("../profile/profile.type");
let Channel = class Channel {
    id;
    name;
    type;
    createdAt;
    updatedAt;
    members;
};
exports.Channel = Channel;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Channel.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Channel.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => ChannelType),
    __metadata("design:type", String)
], Channel.prototype, "type", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Channel.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Channel.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => [member_types_1.Member], { nullable: true }),
    __metadata("design:type", Array)
], Channel.prototype, "members", void 0);
exports.Channel = Channel = __decorate([
    (0, graphql_1.ObjectType)()
], Channel);
var ChannelType;
(function (ChannelType) {
    ChannelType["TEXT"] = "TEXT";
    ChannelType["AUDIO"] = "AUDIO";
    ChannelType["VIDEO"] = "VIDEO";
})(ChannelType || (exports.ChannelType = ChannelType = {}));
(0, graphql_1.registerEnumType)(ChannelType, {
    name: 'ChannelType',
    description: 'Defines the type of channel',
});
let Server = class Server {
    id;
    name;
    imageUrl;
    inviteCode;
    profileId;
    profile;
    members;
    channels;
};
exports.Server = Server;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Server.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Server.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Server.prototype, "imageUrl", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], Server.prototype, "inviteCode", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], Server.prototype, "profileId", void 0);
__decorate([
    (0, graphql_1.Field)(() => profile_type_1.Profile, { nullable: true }),
    __metadata("design:type", profile_type_1.Profile)
], Server.prototype, "profile", void 0);
__decorate([
    (0, graphql_1.Field)(() => [member_types_1.Member], { nullable: true }),
    __metadata("design:type", Array)
], Server.prototype, "members", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Channel]),
    __metadata("design:type", Array)
], Server.prototype, "channels", void 0);
exports.Server = Server = __decorate([
    (0, graphql_1.ObjectType)()
], Server);
//# sourceMappingURL=types.js.map