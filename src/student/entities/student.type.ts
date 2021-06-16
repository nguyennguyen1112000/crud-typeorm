import { ObjectType, Field,  ID } from '@nestjs/graphql';

@ObjectType()
export class Student {
  @Field(() => ID)
  id: number;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  age: number;
  @Field()
  class: string;
}
