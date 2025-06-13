/**
 * @fileoverview Query handler for finding a permission by ID.
 * @module FindPermissionByIdQueryHandler
 * @author [Jesús Díaz]
 * @description This handler processes the query to find a permission by its ID and returns the corresponding response.
 * It uses the PermissionRepository to access the data layer.
 */
import { Inject, Injectable } from '@nestjs/common';
import { FindPermissionByIdQuery } from './find-permission-by-id.query';
import { FindPermissionByIdResponse } from './find-permission-by-id.response';
import { PermissionRepository } from "src/permissions/domain/interfaces/permission.repository.interface";
import { PermissionNotFoundException } from '../../../domain/exceptions/permission-not-found.exception';

/**
 * Query handler for finding a permission by ID.
 * @class FindPermissionByIdQueryHandler
 * @description This class handles the logic for retrieving a permission
 * using the provided query.
 * It uses the PermissionRepository to interact with the persistence layer.
 */
@Injectable()
export class FindPermissionByIdQueryHandler {
  /**
   * @constructor
   * @param repository - The repository used to interact with the persistence layer for permissions.
   * @description This constructor injects the PermissionRepository to handle the retrieval of a permission by ID.
   */
  constructor(@Inject('PermissionRepository') private repository: PermissionRepository) {}
  /**
   * Executes the query to find a permission by ID.
   * @param query 
   * @returns A promise that resolves to a FindPermissionByIdResponse containing the permission data.
   * @throws {PermissionNotFoundException} If the permission with the given ID does not exist.
   * @description This method executes the query to retrieve a permission by its ID from the repository.
   * It checks if the permission exists and throws an exception if it does not.
   */
  async execute(query: FindPermissionByIdQuery): Promise<FindPermissionByIdResponse> {
    const permission = await this.repository.findById(query.id);
    if (!permission) {
      throw new PermissionNotFoundException(query.id);
    }
    return new FindPermissionByIdResponse(permission);
  }
}
