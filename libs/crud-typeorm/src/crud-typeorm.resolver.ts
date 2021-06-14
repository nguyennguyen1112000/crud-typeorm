import { Type } from "@nestjs/common";
import {Resolver,Query, Mutation, Args} from '@nestjs/graphql'
import { BaseEntity } from "./entities/base.entity";
import { CrudTypeormService } from "./crud-typeorm.service";
export function CrudTypeormResolver<T extends Type<unknown>,H extends BaseEntity>(classRef: T): any {
  @Resolver({ isAbstract: true })
  abstract class BaseResolverHost {
    constructor(private readonly crudTypeormService: CrudTypeormService<H>) {}
    @Query((type) => [classRef])
    async findAll(): Promise<H[]> {
      return this.crudTypeormService.findAll();
    }
    @Mutation((type) => classRef)
    async delete(@Args('id') id: number): Promise<H> {
      return this.crudTypeormService.remove(id);
    }

  }
  return BaseResolverHost;
}


