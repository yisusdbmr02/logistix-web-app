/**
 * @fileoverview Query handler for finding all permissions.
 * @module FindAllPermissionsQueryHandler
 * @author [Jesús Díaz]
 * @description This file contains the query handler for retrieving all permissions from the repository.
 * It uses the `PermissionRepository` to fetch the permissions and returns them in a response object.
 */
import { Inject, Injectable } from '@nestjs/common';
import { FindAllPermissionsQuery } from './find-all-permissions.query';
import { FindAllPermissionsResponse } from './find-all-permissions.response';
import { PermissionRepository } from "src/permissions/domain/interfaces/permission-repository.interface";

/**
 * Query handler for finding all permissions.
 * @class FindAllPermissionsQueryHandler
 * @description This class handles the logic for retrieving all permissions
 * using the provided query.
 * It uses the PermissionRepository to interact with the persistence layer.
 */
@Injectable()
export class FindAllPermissionsQueryHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for permissions.
   * @description This constructor injects the PermissionRepository to handle the retrieval of permissions.
   */
constructor(@Inject('PermissionRepository') private repository: PermissionRepository) {}
  /**
   * Executes the query to find all permissions.
   * @param query - The query containing any parameters needed to find permissions.
   * @returns A promise that resolves to a FindAllPermissionsResponse containing the list of permissions.
   * @description This method executes the query to retrieve all permissions from the repository.
   */
  async execute(query: FindAllPermissionsQuery): Promise<FindAllPermissionsResponse> {
    const permissions = await this.repository.findAll();
    return new FindAllPermissionsResponse(permissions);
  }
}
