import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import {
    CreateServerDto
} from './dto';
import { v4 as uuidv4 } from 'uuid';
import { Member, MemberRole } from 'src/member/member.types';
import { GraphQLError } from 'graphql';

@Injectable()
export class ServerService {
    constructor(private readonly prisma: PrismaService) { }

    async createServer(input: CreateServerDto, imageUrl: string) {
        const profile = await this.prisma.profile.findUnique({
            where: {
                id: input.profileId,
            },
        });
        if (!profile) throw new BadRequestException('Profile not found');

        return this.prisma.server.create({
            data: {
                ...input,
                imageUrl,
                inviteCode: uuidv4(),

                channels: {
                    create: [
                        {
                            name: 'general',
                            profileId: profile.id,
                        },
                    ],
                },
                members: {
                    create: [
                        {
                            profileId: profile.id,
                            role: MemberRole.ADMIN,
                        },
                    ],
                },
            },

            include: {
                members: true,
            },
        });
    }

    async getServer(id: number, email: string) {
        const profile = await this.prisma.profile.findUnique({
            where: { email },
        });

        if (!profile)
            return new GraphQLError('Profile not found', {
                extensions: { code: 'PROFILE_NOT_FOUND' }
            });

        const server = await this.prisma.server.findUnique({
            where: {
                id,
                members: {
                    some: {
                        profileId: profile.id,
                    },
                },
            },
            include: {
                channels: true,
                members: {
                    include: {
                        profile: true,
                        server: true,
                    },
                },
            },
        });
        if (!server) {
            throw new GraphQLError('Server not found', {
                extensions: { code: 'SERVER_NOT_FOUND' }
            });
        }
        return server;
    }

    async getServersByProfileEmailOfMember(email: string) {
        console.log(
            email,
            await this.prisma.server.findMany({
                where: {
                    members: {
                        some: {
                            profile: {
                                email,
                            },
                        },
                    },
                },
            }),
        );
    }
}