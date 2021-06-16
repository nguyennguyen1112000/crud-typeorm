import { InputType, PartialType } from '@nestjs/graphql';
import { BaseType } from './entities/base.type';
import { Type } from '@nestjs/common';
export function InputDto<T extends Type<unknown>>(classRef: T): any {
  @InputType()
  class InputDto extends PartialType(classRef, InputType) {}
  return InputDto;
}
