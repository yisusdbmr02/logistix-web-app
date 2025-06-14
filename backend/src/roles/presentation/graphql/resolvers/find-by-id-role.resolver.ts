/**
 * @fileoverview Resolver for finding a role by ID.
 * @module FindRoleByIdResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL query to find a role by its ID.
 * It uses the FindRoleByIdQueryHandler to execute the query and return the role entity.
 */
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { FindRoleByIdQueryHandler } from '../../../application/use-cases/find-by-id/find-role-by-id.query-handler';
import { FindRoleByIdQuery } from '../../../application/use-cases/find-by-id/find-role-by-id.query';
import { RoleEntity } from '../entities/role.entity';
/**
 * Resolver for finding a role by ID.
 * @class FindRoleByIdResolver
 * @description This class handles the GraphQL query for finding a role by its ID.
 * It uses the FindRoleByIdQueryHandler to execute the query and return the role entity.
 * @implements {Resolver}
 *
 */
@Resolver(() => RoleEntity)
export class FindRoleByIdResolver {
  /**
   * Constructor for FindRoleByIdResolver.
   * @param findByIdHandler - The query handler used to execute the find role by ID query.
   * @constructor
   * @description This constructor injects the FindRoleByIdQueryHandler to handle the retrieval of a role by its ID.
   */
  constructor(private readonly findByIdHandler: FindRoleByIdQueryHandler) {}
  /**
   * Query for finding a role by ID.
   * @method role
   * @param {string} id - The ID of the role to be retrieved.
   * @returns {Promise<RoleEntity>} - A promise that resolves to the RoleEntity object.
   * @description This method handles the GraphQL query for retrieving a role by its ID.
   * It executes the FindRoleByIdQueryHandler and returns the role entity.
   * @throws {Error} If there is an error during the retrieval process.
   * @implements {Query}
   */
  @Query(() => RoleEntity)
  async findRoleById(@Args('id', { type: () => ID }) id: string): Promise<RoleEntity> {
    const response = await this.findByIdHandler.execute(new FindRoleByIdQuery(id));
    return response.toJSON();
  }
}
