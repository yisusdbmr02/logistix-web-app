/**
 * @file Command to delete a role.
 * @module DeleteRoleCommand
 * @author [Jesús Díaz]
 * @description This command is used to encapsulate the data required to delete a role.
 */
export class DeleteRoleCommand {
  constructor(public readonly id: string) {}
}
