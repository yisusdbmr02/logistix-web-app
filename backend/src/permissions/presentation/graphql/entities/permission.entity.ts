/**
 * @fileoverview PermissionEntity class for GraphQL entity.
 * @module PermissionEntity
 * @author [Jesús Díaz]
 * @version 1.1.0
 * @description This class defines the structure of the Permission entity for GraphQL.
 * It includes fields for the permission ID and name, which are used in GraphQL queries and mutations.
 * The ID field is of type ID, which is a special scalar type in GraphQL that represents a unique identifier.
 */
import { ObjectType, Field, ID } from '@nestjs/graphql';

/**
 * PermissionEntity class for GraphQL entity.
 * @class PermissionEntity
 * @description This class defines the structure of the Permission entity for GraphQL.
 * It includes fields for the permission ID, name createdAt and lastModifiedAt, which are used in GraphQL queries and mutations.
 * @implements {ObjectType}
 */
@ObjectType('Permission')
export class PermissionEntity {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  createdAt: Date;

  @Field()
  lastModifiedAt: Date;
}