/**
 * @fileoverview Unit tests for DeletePermissionResolver
 * @module DeletePermissionResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the DeletePermissionResolver class,
 * which handles the GraphQL mutation for deleting a permission.
 * It uses Jest for testing and mocks the DeletePermissionCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { DeletePermissionResolver } from '../../../../../../src/permissions/presentation/graphql/resolvers/delete-permission.resolver';
import { DeletePermissionCommandHandler } from '../../../../../../src/permissions/application/use-cases/delete/delete-permission.command-handler';
/**
 * @description Unit tests for DeletePermissionResolver
 * @class DeletePermissionResolver
 */
describe('DeletePermissionResolver', () => {
  let resolver: DeletePermissionResolver;
  let commandHandler: DeletePermissionCommandHandler;
  /**
   * Setup for the DeletePermissionResolver tests
   * @function beforeEach
   * @async
   * @returns {Promise<void>}
   * @description This function initializes the testing module and provides a mock implementation of the DeletePermissionCommandHandler.
   * It is called before each test to ensure a clean state.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeletePermissionResolver,
        {
          provide: DeletePermissionCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<DeletePermissionResolver>(DeletePermissionResolver);
    commandHandler = module.get<DeletePermissionCommandHandler>(DeletePermissionCommandHandler);
  });
/**
 * Test to check if the resolver is defined
 * @function it
 * @description This test verifies that the DeletePermissionResolver instance is created successfully.
 */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
/**
 * Test to check if the command handler's execute method is called with the correct id
 * @function it
 * @description This test verifies that the execute method of the DeletePermissionCommandHandler is called with the correct permission id
 * and that it returns a success status.
 * It mocks the execute method to return true, simulating a successful deletion.
 */

  it('should call commandHandler.execute with id and return success status', async () => {
    const mockResponse = {
      toJSON: jest.fn().mockReturnValue({ success: true }),
    };

    (commandHandler.execute as jest.Mock).mockResolvedValue(mockResponse);

    const result = await resolver.deletePermission('123');

    expect(commandHandler.execute).toHaveBeenCalledWith(expect.objectContaining({ id: '123' }));
    expect(result).toBe(true);
  });
});
