/**
 * @file Command for creating a new role.
 * @module CreateRoleCommand
 * @author [Jesús Díaz]
 * @description This command is used to encapsulate the data required to create a new role.
 * It includes the role name.
 */
export class CreateRoleCommand {
  constructor(
    public readonly name: string,
  ) {}
}