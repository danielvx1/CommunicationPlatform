import { Member } from '../member/member.types';
import { Profile } from '../profile/profile.type';
export declare class Channel {
    id: number;
    name: string;
    type: ChannelType;
    createdAt: string;
    updatedAt: string;
    members: Member[];
}
export declare enum ChannelType {
    TEXT = "TEXT",
    AUDIO = "AUDIO",
    VIDEO = "VIDEO"
}
export declare class Server {
    id: number;
    name: string;
    imageUrl: string;
    inviteCode: string;
    profileId: number;
    profile: Profile;
    members: Member[];
    channels: Channel[];
}
