/**
 * @fileoverview Resolver for finding all permissions.
 * @module FindAllPermissionsResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL query to retrieve all permissions.
 * It uses the FindAllPermissionsQueryHandler to execute the query and return the results.
 * 
 */
import { Resolver, Query } from '@nestjs/graphql';
import { FindAllPermissionsQueryHandler } from '../../../application/use-cases/find-all/find-all-permissions.query-handler'
import { FindAllPermissionsQuery } from '../../../application/use-cases/find-all/find-all-permissions.query';
import { PermissionEntity } from '../entities/permission.entity';

/**
 * Resolver for finding all permissions.
 * @class FindAllPermissionsResolver
 * @description This class handles the GraphQL query for retrieving all permissions.
 * It uses the FindAllPermissionsQueryHandler to execute the query and return the results.
 * @implements {Resolver}
 */
@Resolver(() => PermissionEntity)
export class FindAllPermissionsResolver {
  /**
   * Constructor for FindAllPermissionsResolver.
   * @param findAllHandler - The query handler used to execute the find all permissions query.
   * @constructor
   * @description This constructor injects the FindAllPermissionsQueryHandler to handle the retrieval of permissions.
   */
  constructor(private readonly findAllHandler: FindAllPermissionsQueryHandler) {}
  /**
   * Query for finding all permissions.
   * @method permissions
   * @returns {Promise<PermissionEntity[]>} - A promise that resolves to an array of PermissionEntity objects.
   * @description This method handles the GraphQL query for retrieving all permissions.
   * It executes the FindAllPermissionsQueryHandler and returns the list of permissions.
   * @throws {Error} If there is an error during the retrieval process.
   * @implements {Query}
   */
  @Query(() => [PermissionEntity])
  async findAllPermissions(): Promise<PermissionEntity[]> {
    const response = await this.findAllHandler.execute(new FindAllPermissionsQuery());
    return response.toJSON();
  }
}
