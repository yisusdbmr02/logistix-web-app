/**
 * @fileoverview Input DTO for creating a role.
 * @module CreateRoleInput
 * @author [Jesús Díaz]
 * @description This input DTO is used to transfer data when creating a new role via GraphQL.
 * It includes validation rules to ensure the name is not empty and has a minimum length.
 */
import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

/**
 * Input DTO for creating a role.
 * @class CreateRoleInput
 * @description This class defines the structure of the input data required to create a new role.
 * It includes validation rules to ensure the name is not empty and has a minimum length.
 * @implements {InputType}
 */
@InputType()
export class CreateRoleInput {
  @Field()
  @IsNotEmpty()
  @MinLength(3)
  name: string;
}