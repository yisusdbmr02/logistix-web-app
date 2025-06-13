/**
 * @file Command for creating a new permission.
 * @module CreatePermissionCommand
 * @author [Jesús Díaz]
 * @description This command is used to encapsulate the data required to create a new permission.
 * It includes the permission name.
 */
export class CreatePermissionCommand {
  constructor(
    public readonly name: string,
  ) {}
}