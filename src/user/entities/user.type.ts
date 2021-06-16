import { Field, ObjectType, ID } from '@nestjs/graphql';
@ObjectType('User')
export class User {
  @Field((type) => ID)
  id: number;
  @Field()
  name:string
}
