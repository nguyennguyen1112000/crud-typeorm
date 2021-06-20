import { Field, ObjectType, ID } from '@nestjs/graphql';
@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;
  @Field()
  username: string;
  @Field()
  password: string
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}
