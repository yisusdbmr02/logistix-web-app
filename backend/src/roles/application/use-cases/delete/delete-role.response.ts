/**
 * @fileoverview Response class for the delete role use case.
 * @module DeleteRoleResponse
 * @author [Jesús Díaz]
 * @description This class encapsulates the response data for the delete role operation.
 * It includes a success flag and a message indicating the result of the operation.
 */
export class DeleteRoleResponse {
/** 
 * @constructor
 * @param {boolean} success - Indicates whether the role deletion was successful.
 * @description This constructor initializes the response with a success flag.
 * It is used to indicate if the role was deleted successfully or if there was an error.
*/
  constructor(private readonly success: boolean) {}

  /**
   * Converts the response to a JSON object.
   * @returns {object} The JSON representation of the delete role response.
   * @description This method returns an object containing the success status and a message.
   */
  toJSON() {
    return {
      success: this.success,
      message: this.success ? 'Role deleted successfully.' : 'Failed to delete role.',
    };
  }
}
