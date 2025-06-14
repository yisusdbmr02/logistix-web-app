/**
 * @fileoverview Query for finding a role by its ID.
 * @module FindRoleByIdQuery
 * @author [Jesús Díaz]
 * @description This query is used to encapsulate the request for retrieving a role by its ID.
 */
export class FindRoleByIdQuery {
  constructor(public readonly id: string) {}
}
