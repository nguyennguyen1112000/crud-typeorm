import { Type } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BaseEntity } from './entities/base.entity';
import { CrudTypeormService } from './crud-typeorm.service';
import { InputDto } from './dto';
export function CrudTypeormResolver<
  T extends Type<unknown>,
  H extends BaseEntity
>(classRef: T): any {
  const BaseInput = InputDto(classRef);
  type BaseInput = InstanceType<typeof BaseInput>;
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
    @Mutation((type) => classRef)
    async create(@Args('dto') dto: BaseInput) {
      return this.crudTypeormService.createOne(dto);
    }
    @Mutation(type => classRef)
    async update(@Args('id') id:number,@Args('dto') dto:BaseInput){
      return this.crudTypeormService.update(id,dto);
    }
  }
  return BaseResolverHost;
}
