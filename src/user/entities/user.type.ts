import { Field, ObjectType, ID } from '@nestjs/graphql';
@ObjectType('Task')
export class UserType {
  @Field((type) => ID)
  id: number;
  @Field()
  name:string
}
