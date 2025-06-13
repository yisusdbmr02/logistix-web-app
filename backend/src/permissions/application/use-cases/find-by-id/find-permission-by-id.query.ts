/**
 * @fileoverview Query for finding a permission by its ID.
 * @module FindPermissionByIdQuery
 * @author [Jesús Díaz]
 * @description This query is used to encapsulate the request for retrieving a permission by its ID.
 */
export class FindPermissionByIdQuery {
  constructor(public readonly id: string) {}
}
