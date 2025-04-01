import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsString } from 'class-validator';
import { ChannelType } from './types';

@InputType()
export class CreateServerDto {
  @IsString()
  @Field()
  name: string;

  @IsString()
  @Field()
  profileId: number;
}