/**
 * @fileoverview Interface for the Role Repository.
 * @module RoleRepository
 * @author [Jesús Díaz]
 * @description This interface defines the methods for managing roles in the repository.
 * It includes methods for creating, finding, updating, and deleting roles.
 * Each method returns a Promise that resolves to the appropriate type.
 */
import { Role } from "../entities/role.entity";

/**
 * Interface for the Roles Repository.
 * @interface RolesRepository
 * @description This interface defines the methods for managing roles in the repository.
 * It includes methods for creating, finding, updating, and deleting roles.
 */
export interface RolesRepository {
  /**
   * Creates a new role.
   * @param {Role} role - The role entity to be created.
   * @returns {Promise<Role>} A promise that resolves to the created role.
   */
  create(permission: Role): Promise<Role>;
  /**
   * Finds a role by its ID.
   * @param {string} id - The ID of the role to be found.
   * @returns {Promise<Role | null>} A promise that resolves to the found role or null if not found.
   */
  findById(id: string): Promise<Role | null>;
  /**
   * Finds all roles.
   * @returns {Promise<Role[]>} A promise that resolves to an array of all roles.
   */
  findAll(): Promise<Role[]>;
  /**
   * Updates a role by its ID.
   * @param {string} id - The ID of the role to be updated.
   * @param {Role} role - The updated role entity.
   * @returns {Promise<Role>} A promise that resolves to the updated role.
   */
  update(id: string, role: Role): Promise<Role>;
  /**
   * Deletes a role by its ID.
   * @param {string} id - The ID of the role to be deleted.
   * @returns {Promise<void>} A promise that resolves when the role is deleted.
   */
  delete(id: string): Promise<void>;
}