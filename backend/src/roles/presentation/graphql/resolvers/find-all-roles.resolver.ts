/**
 * @fileoverview Resolver for finding all roles.
 * @module FindAllRolesResolver
 * @author [Jesús Díaz]
 * @description This resolver handles the GraphQL query to retrieve all roles.
 * It uses the FindAllRolesQueryHandler to execute the query and return the results.
 * 
 */
import { Resolver, Query } from '@nestjs/graphql';
import { FindAllRolesQueryHandler } from '../../../application/use-cases/find-all/find-all-roles.query-handler'
import { FindAllRolesQuery } from '../../../application/use-cases/find-all/find-all-roles.query';
import { RoleEntity } from '../entities/role.entity';

/**
 * Resolver for finding all roles.
 * @class FindAllRolesResolver
 * @description This class handles the GraphQL query for retrieving all roles.
 * It uses the FindAllRolesQueryHandler to execute the query and return the results.
 * @implements {Resolver}
 */
@Resolver(() => RoleEntity)
export class FindAllRolesResolver {
  /**
   * Constructor for FindAllRolesResolver.
   * @param findAllHandler - The query handler used to execute the find all roles query.
   * @constructor
   * @description This constructor injects the FindAllRolesQueryHandler to handle the retrieval of roles.
   */
  constructor(private readonly findAllHandler: FindAllRolesQueryHandler) {}
  /**
   * Query for finding all roles.
   * @method roles
   * @returns {Promise<RoleEntity[]>} - A promise that resolves to an array of RoleEntity objects.
   * @description This method handles the GraphQL query for retrieving all roles.
   * It executes the FindAllRolesQueryHandler and returns the list of roles.
   * @throws {Error} If there is an error during the retrieval process.
   * @implements {Query}
   */
  @Query(() => [RoleEntity])
  async findAllRoles(): Promise<RoleEntity[]> {
    const response = await this.findAllHandler.execute(new FindAllRolesQuery());
    return response.toJSON();
  }
}
