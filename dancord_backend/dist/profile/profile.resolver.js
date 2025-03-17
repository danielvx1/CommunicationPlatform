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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const profile_type_1 = require("./profile.type");
const dto_1 = require("./dto");
const profile_service_1 = require("./profile.service");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../auth/auth.guard");
let ProfileResolver = class ProfileResolver {
    profileService;
    constructor(profileService) {
        this.profileService = profileService;
    }
    async createProfile(input) {
        return this.profileService.createProfile(input);
    }
    async getProfileById(profileId) {
        return this.profileService.getProfileById(profileId);
    }
};
exports.ProfileResolver = ProfileResolver;
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.GraphqlAuthGuard),
    (0, graphql_1.Mutation)(() => profile_type_1.Profile),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateProfileDto]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "createProfile", null);
__decorate([
    (0, graphql_1.Query)(() => profile_type_1.Profile),
    __param(0, (0, graphql_1.Args)('profileId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProfileResolver.prototype, "getProfileById", null);
exports.ProfileResolver = ProfileResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __metadata("design:paramtypes", [profile_service_1.ProfileService])
], ProfileResolver);
//# sourceMappingURL=profile.resolver.js.map