/**
 * @fileoverview MongoDB implementation of the PermissionRepository interface.
 * @module MongoPermissionRepository
 * @author [Jesús Díaz]
 * @description This class provides methods to interact with the MongoDB database for permission management.
 * It implements the PermissionRepository interface and uses various repository classes for CRUD operations.
 */
import { Injectable } from "@nestjs/common";
import { PermissionRepository } from "src/permissions/domain/interfaces/permission.repository.interface";
import { CreatePermissionRepository } from "./create-permission.repository";
import { FindPermissionRepository } from "./find-permission.repository";
import { UpdatePermissionRepository } from "./update-permission.repository";
import { DeletePermissionRepository } from "./delete-permission.repository";
import { FindAllPermissionsRepository } from "./find-all-permissions.repository";
import { Permission } from "src/permissions/domain/entities/permission.entity";

/**
 * Repository for managing permissions in MongoDB.
 * @class MongoPermissionRepository
 * @description This class implements the PermissionRepository interface and provides methods
 * to create, find, update, and delete permissions in the MongoDB database.
 */
@Injectable()
export class MongoPermissionRepository implements PermissionRepository {
  /**
   * @constructor
   * @param {CreatePermissionRepository} createRepo - Repository for creating permissions.
   * @param {FindPermissionRepository} findRepo - Repository for finding permissions by ID.
   * @param {UpdatePermissionRepository} updateRepo - Repository for updating permissions.
   * @param {DeletePermissionRepository} deleteRepo - Repository for deleting permissions.
   * @param {FindAllPermissionsRepository} findAllRepo - Repository for finding all permissions.
   * @description This constructor injects the necessary repositories to perform CRUD operations on permissions.
   */
  constructor(
    private readonly createRepo: CreatePermissionRepository,
    private readonly findRepo: FindPermissionRepository,
    private readonly updateRepo: UpdatePermissionRepository,
    private readonly deleteRepo: DeletePermissionRepository,
    private readonly findAllRepo: FindAllPermissionsRepository,
  ) {}
  /**
   * Creates a new permission in the database.
   * @param {Permission} permission - The permission entity to be created.
   * @returns {Promise<Permission>} A promise that resolves to the created permission entity.
   * @description This method uses the CreatePermissionRepository to create a new permission in the database.
   */
  create(permission: Permission) {
    return this.createRepo.create(permission);
  }
  /**
   * Finds a permission by its ID.
   * @param {string} id - The ID of the permission to be found.
   * @returns {Promise<Permission | null>} A promise that resolves to the found Permission entity or null if not found.
   * @description This method uses the FindPermissionRepository to retrieve a permission by its ID from the database.
   */
  findById(id: string) {
    return this.findRepo.findById(id);
  }
  /**
   * Finds all permissions in the database.
   * @returns {Promise<Permission[]>} A promise that resolves to an array of Permission entities.
   * @description This method uses the FindAllPermissionsRepository to retrieve all permissions from the database.
   */
  findAll() {
    return this.findAllRepo.findAll();
  }
  /**
   * Updates an existing permission in the database.
   * @param {string} id - The ID of the permission to be updated.
   * @param {Permission} permission - The updated permission entity.
   * @returns {Promise<Permission>} A promise that resolves to the updated Permission entity.
   * @description This method uses the UpdatePermissionRepository to update a permission in the database.
   */
  update(id: string, permission: Permission) {
    return this.updateRepo.update(id, permission);
  }
  /**
   * Deletes a permission by its ID.
   * @param {string} id - The ID of the permission to be deleted.
   * @returns {Promise<void>} A promise that resolves when the permission is deleted.
   * @description This method uses the DeletePermissionRepository to delete a permission from the database by its ID.
   */
  delete(id: string) {
    return this.deleteRepo.delete(id);
  }
}
