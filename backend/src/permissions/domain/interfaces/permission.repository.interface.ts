/**
 * @fileoverview Interface for the Permission Repository.
 * @module PermissionRepository
 * @author [Jesús Díaz]
 * @description This interface defines the methods for managing permissions in the repository.
 * It includes methods for creating, finding, updating, and deleting permissions.
 * Each method returns a Promise that resolves to the appropriate type.
 */
import { Permission } from "../entities/permission.entity";

/**
 * Interface for the Permission Repository.
 * @interface PermissionRepository
 * @description This interface defines the methods for managing permissions in the repository.
 * It includes methods for creating, finding, updating, and deleting permissions.
 */
export interface PermissionRepository {
  /**
   * Creates a new permission.
   * @param {Permission} permission - The permission entity to be created.
   * @returns {Promise<Permission>} A promise that resolves to the created permission.
   */
  create(permission: Permission): Promise<Permission>;
  /**
   * Finds a permission by its ID.
   * @param {string} id - The ID of the permission to be found.
   * @returns {Promise<Permission | null>} A promise that resolves to the found permission or null if not found.
   */
  findById(id: string): Promise<Permission | null>;
  /**
   * Finds all permissions.
   * @returns {Promise<Permission[]>} A promise that resolves to an array of all permissions.
   */
  findAll(): Promise<Permission[]>;
  /**
   * Updates a permission by its ID.
   * @param {string} id - The ID of the permission to be updated.
   * @param {Permission} permission - The updated permission entity.
   * @returns {Promise<Permission>} A promise that resolves to the updated permission.
   */
  update(id: string, permission: Permission): Promise<Permission>;
  /**
   * Deletes a permission by its ID.
   * @param {string} id - The ID of the permission to be deleted.
   * @returns {Promise<void>} A promise that resolves when the permission is deleted.
   */
  delete(id: string): Promise<void>;
}