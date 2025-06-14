/**
 * @fileoverview Query handler for finding a role by ID.
 * @module FindRoleByIdQueryHandler
 * @author [Jesús Díaz]
 * @description This handler processes the query to find a role by its ID and returns the corresponding response.
 * It uses the RoleRepository to access the data layer.
 */
import { Inject, Injectable } from '@nestjs/common';
import { FindRoleByIdQuery } from './find-role-by-id.query';
import { FindRoleByIdResponse } from './find-role-by-id.response';
import { RolesRepository } from "src/roles/domain/interfaces/role-repository.interface";
import { RoleNotFoundException } from '../../../domain/exceptions/role-not-found.exception';

/**
 * Query handler for finding a role by ID.
 * @class FindRoleByIdQueryHandler
 * @description This class handles the logic for retrieving a role
 * using the provided query.
 * It uses the RoleRepository to interact with the persistence layer.
 */
@Injectable()
export class FindRoleByIdQueryHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for roles.
   * @description This constructor injects the RoleRepository to handle the retrieval of a role by ID.
   */
  constructor(@Inject('RolesRepository') private repository: RolesRepository) {}
  /**
   * Executes the query to find a role by ID.
   * @param query 
   * @returns A promise that resolves to a FindRoleByIdResponse containing the role data.
   * @throws {RoleNotFoundException} If the role with the given ID does not exist.
   * @description This method executes the query to retrieve a role by its ID from the repository.
   * It checks if the role exists and throws an exception if it does not.
   */
  async execute(query: FindRoleByIdQuery): Promise<FindRoleByIdResponse> {
    const role = await this.repository.findById(query.id);
    if (!role) {
      throw new RoleNotFoundException(query.id);
    }
    return new FindRoleByIdResponse(role);
  }
}
