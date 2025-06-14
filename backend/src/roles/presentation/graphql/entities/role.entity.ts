/**
 * @fileoverview RoleEntity class for GraphQL entity.
 * @module RoleEntity
 * @author [Jesús Díaz]
 * @description This class defines the structure of the Role entity for GraphQL.
 * It includes fields for the role ID and name, which are used in GraphQL queries and mutations.
 * The ID field is of type ID, which is a special scalar type in GraphQL that represents a unique identifier.
 */
import { ObjectType, Field, ID } from '@nestjs/graphql';

/**
 * RoleEntity class for GraphQL entity.
 * @class RoleEntity
 * @description This class defines the structure of the Role entity for GraphQL.
 * It includes fields for the role ID and name, which are used in GraphQL queries and mutations.
 * @implements {ObjectType}
 */
@ObjectType('Roles')
export class RoleEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  lastModifiedAt: Date;
}