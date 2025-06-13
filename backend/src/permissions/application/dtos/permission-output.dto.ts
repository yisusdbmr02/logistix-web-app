/**
 * @file PermissionOutputDto Data Transfer Object
 * @module PermissionOutputDto
 * @author [Jesús Díaz]
 * @description This DTO is used to transfer permission data in the output format.
 * It includes the permission ID and name.
 */
export class PermissionOutputDto {
  readonly id: string;
  readonly name: string;
  /**
   * Creates a new PermissionOutputDto instance.
   * @param {Partial<PermissionOutputDto>} partial - Partial object to initialize the DTO.
   */
  constructor(partial: Partial<PermissionOutputDto>) {
    Object.assign(this, partial);
  }
}