/**
 * @fileoverview UpdatePermissionInput class for GraphQL input type.
 * @module UpdatePermissionInput
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This class is used to define the input type for updating a permission in GraphQL.
 * It extends the CreatePermissionInput class to inherit its fields and makes them optional.
 * The `id` field is required to identify the permission to be updated.
 */
import { InputType, Field, PartialType } from '@nestjs/graphql';
import { CreatePermissionInput } from './create-permission.input';
/**
 * UpdatePermissionInput class for GraphQL input type.
 * @class UpdatePermissionInput 
 * @description This class is used to define the input type for updating a permission in GraphQL.
 * It extends the CreatePermissionInput class to inherit its fields and makes them optional.
 * @extends {PartialType(CreatePermissionInput)}
 * @implements {InputType}
 */
@InputType()
export class UpdatePermissionInput extends PartialType(CreatePermissionInput) {
  @Field()
  id: string;
}