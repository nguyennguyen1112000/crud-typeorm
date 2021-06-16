import { InputType, PartialType } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
export function InputDto<T extends Type<unknown>>(classRef: T): any {
  @InputType(`${classRef.name}InputDto`)
  class InputDto extends PartialType(classRef, InputType) {}
  return InputDto;
}
