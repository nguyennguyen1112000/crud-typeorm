import { Field, ObjectType, ID} from '@nestjs/graphql';
@ObjectType('Task')
export class BaseType {
  @Field((type) => ID)
  id: number;
 
}
