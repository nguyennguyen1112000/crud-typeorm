import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { CrudTypeormService } from './crud-typeorm.service';
import { BaseEntity } from './entities/base.entity';
@Controller()
export class CrudTypeormController<T extends BaseEntity> {
  constructor(private readonly crudTypeormService: CrudTypeormService<T>) {}
  @Get()
  findAll(): Promise<T[]> {
    return this.crudTypeormService.findAll();
  }
  @Get('/:id')
  findOne(@Param('id') id: number): Promise<T> {
    return this.crudTypeormService.findOne(+id);
  }
  @Post()
  createOne(@Body() dto: DeepPartial<T>) {
    return this.crudTypeormService.createOne(dto);
  }
  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.crudTypeormService.remove(id);
  }
  @Patch('/:id')
  updateOne(@Param('id') id: number, @Body() dto: DeepPartial<T>): Promise<T> {
    return this.crudTypeormService.update(id, dto);
  }
}
