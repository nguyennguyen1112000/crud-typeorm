import { ObjectType, Field,  ID } from '@nestjs/graphql';

@ObjectType()
export class Admin{
  @Field(() => ID)
  id: number;
  @Field()
  username: string;
  @Field()
  password: string;
  @Field()
  description: string;
}
