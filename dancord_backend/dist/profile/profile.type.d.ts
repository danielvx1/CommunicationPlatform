import { Channel, Server } from 'src/server/types';
export declare class Profile {
    id: number;
    email: string;
    name: string;
    servers: Server[];
    imageUrl: string;
    channels: Channel[];
}
