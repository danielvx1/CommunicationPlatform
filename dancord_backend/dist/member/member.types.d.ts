import { Profile } from 'src/profile/profile.type';
import { Server } from 'src/server/types';
export declare class Member {
    id: number;
    profile: Profile;
    profileId: number;
    server: Server;
    role: MemberRole;
    imageUrl: string;
    email: string;
    name: string;
    createdAt: string;
    updatedAt: string;
}
export declare enum MemberRole {
    MODERATOR = "MODERATOR",
    ADMIN = "ADMIN",
    GUEST = "GUEST"
}
