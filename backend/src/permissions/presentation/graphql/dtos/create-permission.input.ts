/**
 * @fileoverview Input DTO for creating a permission.
 * @module CreatePermissionInput
 * @author [Jesús Díaz]
 * @description This input DTO is used to transfer data when creating a new permission via GraphQL.
 * It includes validation rules to ensure the name is not empty and has a minimum length.
 */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * Input DTO for creating a permission.
 * @class CreatePermissionInput
 * @description This class defines the structure of the input data required to create a new permission.
 * It includes validation rules to ensure the name is not empty and has a minimum length.
 * @implements {InputType}
 */
@InputType()
export class CreatePermissionInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}