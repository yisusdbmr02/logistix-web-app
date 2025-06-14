/**
 * @fileoverview Query handler for finding all roles.
 * @module FindAllRolesQueryHandler
 * @author [Jesús Díaz]
 * @description This file contains the query handler for retrieving all roles from the repository.
 * It uses the `RoleRepository` to fetch the roles and returns them in a response object.
 */
import { Inject, Injectable } from '@nestjs/common';
import { FindAllRolesQuery } from './find-all-roles.query';
import { FindAllRolesResponse } from './find-all-roles.response';
import { RolesRepository } from "src/roles/domain/interfaces/role-repository.interface";

/**
 * Query handler for finding all roles.
 * @class FindAllRolesQueryHandler
 * @description This class handles the logic for retrieving all roles
 * using the provided query.
 * It uses the RoleRepository to interact with the persistence layer.
 */
@Injectable()
export class FindAllRolesQueryHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for roles.
   * @description This constructor injects the RoleRepository to handle the retrieval of roles.
   */
constructor(@Inject('RolesRepository') private repository: RolesRepository) {}
  /**
   * Executes the query to find all roles.
   * @param query - The query containing any parameters needed to find roles.
   * @returns A promise that resolves to a FindAllRolesResponse containing the list of roles.
   * @description This method executes the query to retrieve all roles from the repository.
   */
  async execute(query: FindAllRolesQuery): Promise<FindAllRolesResponse> {
    const roles = await this.repository.findAll();
    return new FindAllRolesResponse(roles);
  }
}
