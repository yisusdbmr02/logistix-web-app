/**
 * @file Command to delete a permission.
 * @module DeletePermissionCommand
 * @author [Jesús Díaz]
 * @version 1.0.0
 * @description This command is used to encapsulate the data required to delete a permission.
 */
export class DeletePermissionCommand {
  constructor(public readonly id: string) {}
}
