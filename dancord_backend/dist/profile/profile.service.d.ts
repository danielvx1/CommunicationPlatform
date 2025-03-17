import { PrismaService } from 'src/prisma.service';
import { CreateProfileDto } from './dto';
export declare class ProfileService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createProfile(createProfileDto: CreateProfileDto): Promise<{
        name: string;
        email: string;
        imageUrl: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
    }>;
    getProfileById(id: number): Promise<({
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
    getProfileByEmail(email: string): Promise<({
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
