/**
 * @fileoverview MongoDB implementation of the RoleRepository interface.
 * @module MongoRoleRepository
 * @author [Jesús Díaz]
 * @description This class provides methods to interact with the MongoDB database for role management.
 * It implements the RoleRepository interface and uses various repository classes for CRUD operations.
 */
import { Injectable } from "@nestjs/common";
import { RolesRepository } from "src/roles/domain/interfaces/role-repository.interface";
import { CreateRoleRepository } from "./create-role.repository";
import { FindRoleRepository } from "./find-role.repository";
import { UpdateRoleRepository } from "./update-role.repository";
import { DeleteRoleRepository } from "./delete-role.repository";
import { FindAllRolesRepository } from "./find-all-roles.repository";
import { Role } from "src/roles/domain/entities/role.entity";

/**
 * Repository for managing roles in MongoDB.
 * @class MongoRoleRepository
 * @description This class implements the RoleRepository interface and provides methods
 * to create, find, update, and delete roles in the MongoDB database.
 */
@Injectable()
export class MongoRoleRepository implements RolesRepository {
  /**
   * @constructor
   * @param {CreateRoleRepository} createRepo - Repository for creating roles.
   * @param {FindRoleRepository} findRepo - Repository for finding roles by ID.
   * @param {UpdateRoleRepository} updateRepo - Repository for updating roles.
   * @param {DeleteRoleRepository} deleteRepo - Repository for deleting roles.
   * @param {FindAllRolesRepository} findAllRepo - Repository for finding all roles.
   * @description This constructor injects the necessary repositories to perform CRUD operations on roles.
   */
  constructor(
    private readonly createRepo: CreateRoleRepository,
    private readonly findRepo: FindRoleRepository,
    private readonly updateRepo: UpdateRoleRepository,
    private readonly deleteRepo: DeleteRoleRepository,
    private readonly findAllRepo: FindAllRolesRepository,
  ) {}
  /**
   * Creates a new role in the database.
   * @param {Role} role - The role entity to be created.
   * @returns {Promise<Role>} A promise that resolves to the created role entity.
   * @description This method uses the CreateRoleRepository to create a new role in the database.
   */
  create(role: Role) {
    return this.createRepo.create(role);
  }
  /**
   * Finds a role by its ID.
   * @param {string} id - The ID of the role to be found.
   * @returns {Promise<Role | null>} A promise that resolves to the found Role entity or null if not found.
   * @description This method uses the FindRoleRepository to retrieve a role by its ID from the database.
   */
  findById(id: string) {
    return this.findRepo.findById(id);
  }
  /**
   * Finds all roles in the database.
   * @returns {Promise<Role[]>} A promise that resolves to an array of Role entities.
   * @description This method uses the FindAllRolesRepository to retrieve all roles from the database.
   */
  findAll() {
    return this.findAllRepo.findAll();
  }
  /**
   * Updates an existing role in the database.
   * @param {string} id - The ID of the role to be updated.
   * @param {Role} role - The updated role entity.
   * @returns {Promise<Role>} A promise that resolves to the updated Role entity.
   * @description This method uses the UpdateRoleRepository to update a role in the database.
   */
  update(id: string, role: Role) {
    return this.updateRepo.update(id, role);
  }
  /**
   * Deletes a role by its ID.
   * @param {string} id - The ID of the role to be deleted.
   * @returns {Promise<void>} A promise that resolves when the role is deleted.
   * @description This method uses the DeleteRoleRepository to delete a role from the database by its ID.
   */
  delete(id: string) {
    return this.deleteRepo.delete(id);
  }
}
