/**
 * @fileoverview Command for updating a role.
 * @module UpdateRoleCommand
 * @author [Jesús Díaz]
 * @description This command is used to encapsulate the data required to update an existing role.
 * It includes the role ID and an optional name.
 * If the name is not provided, it will not be updated.
 */
export class UpdateRoleCommand {
  constructor(
    public readonly id: string,
    public readonly name?: string,

  ) {}
}