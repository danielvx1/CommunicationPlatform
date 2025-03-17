import { CreateProfileDto } from './dto';
import { ProfileService } from './profile.service';
export declare class ProfileResolver {
    private readonly profileService;
    constructor(profileService: ProfileService);
    createProfile(input: CreateProfileDto): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfileById(profileId: number): Promise<({
        servers: ({
            channels: {
                name: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                profileId: number;
                type: import(".prisma/client").$Enums.ChannelType;
                serverId: number;
            }[];
        } & {
            name: string;
            imageUrl: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            profileId: number;
            inviteCode: string;
        })[];
    } & {
        name: string;
        email: string;
        imageUrl: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }) | null>;
}
