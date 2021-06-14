
import { DeepPartial } from 'typeorm';
import { CrudTypeormService } from './crud-typeorm.service';
import { Resolver,Query } from '@nestjs/graphql';
import { BaseType } from './entities/base.type';
@Resolver((of) => BaseType)
export class CrudTypeormResolver<T extends BaseType> {
  constructor(private readonly crudTypeormService: CrudTypeormService<T>) {}
  @Query((returns) => [BaseType])
  tasks() {
    return this.crudTypeormService.findAll();
  }
}
