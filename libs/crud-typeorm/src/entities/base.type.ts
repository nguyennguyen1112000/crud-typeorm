import { Field, ObjectType, ID} from '@nestjs/graphql';
@ObjectType('Base')
export class BaseType {
  @Field((type) => ID)
  id: number;
}
