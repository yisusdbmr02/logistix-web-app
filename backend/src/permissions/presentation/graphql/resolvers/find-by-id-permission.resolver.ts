/**
 * @fileoverview Resolver for finding a permission by ID.
 * @module FindPermissionByIdResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL query to find a permission by its ID.
 * It uses the FindPermissionByIdQueryHandler to execute the query and return the permission entity.
 */
import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { FindPermissionByIdQueryHandler } from '../../../application/use-cases/find-by-id/find-permission-by-id.query-handler';
import { FindPermissionByIdQuery } from '../../../application/use-cases/find-by-id/find-permission-by-id.query';
import { PermissionEntity } from '../entities/permission.entity';
/**
 * Resolver for finding a permission by ID.
 * @class FindPermissionByIdResolver
 * @description This class handles the GraphQL query for finding a permission by its ID.
 * It uses the FindPermissionByIdQueryHandler to execute the query and return the permission entity.
 * @implements {Resolver}
 *
 */
@Resolver(() => PermissionEntity)
export class FindPermissionByIdResolver {
  /**
   * Constructor for FindPermissionByIdResolver.
   * @param findByIdHandler - The query handler used to execute the find permission by ID query.
   * @constructor
   * @description This constructor injects the FindPermissionByIdQueryHandler to handle the retrieval of a permission by its ID.
   */
  constructor(private readonly findByIdHandler: FindPermissionByIdQueryHandler) {}
  /**
   * Query for finding a permission by ID.
   * @method permission
   * @param {string} id - The ID of the permission to be retrieved.
   * @returns {Promise<PermissionEntity>} - A promise that resolves to the PermissionEntity object.
   * @description This method handles the GraphQL query for retrieving a permission by its ID.
   * It executes the FindPermissionByIdQueryHandler and returns the permission entity.
   * @throws {Error} If there is an error during the retrieval process.
   * @implements {Query}
   */
  @Query(() => PermissionEntity)
  async findPermissionById(@Args('id', { type: () => ID }) id: string): Promise<PermissionEntity> {
    const response = await this.findByIdHandler.execute(new FindPermissionByIdQuery(id));
    return response.toJSON();
  }
}
