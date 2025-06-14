/**
 * @fileoverview UpdateRoleInput class for GraphQL input type.
 * @module UpdateRoleInput
 * @author [Jesús Díaz]
 * @description This class is used to define the input type for updating a role in GraphQL.
 * It extends the CreateRoleInput class to inherit its fields and makes them optional.
 * The `id` field is required to identify the role to be updated.
 */
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreateRoleInput } from './create-role.input';
/**
 * UpdateRoleInput class for GraphQL input type.
 * @class UpdateRoleInput 
 * @description This class is used to define the input type for updating a role in GraphQL.
 * It extends the CreateRoleInput class to inherit its fields and makes them optional.
 * @extends {PartialType(CreateRoleInput)}
 * @implements {InputType}
 */
@InputType()
export class UpdateRoleInput extends PartialType(CreateRoleInput) {
  @Field()
  id: string;
}