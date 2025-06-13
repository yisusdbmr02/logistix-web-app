/**
 * @fileoverview Command for updating a permission.
 * @module UpdatePermissionCommand
 * @author [Jesús Díaz]
 * @description This command is used to encapsulate the data required to update an existing permission.
 * It includes the permission ID and an optional name.
 * If the name is not provided, it will not be updated.
 */
export class UpdatePermissionCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,
  ) {}
}