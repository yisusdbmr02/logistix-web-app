/**
 * @fileoverview Unit tests for UpdateRoleResolver
 * @module UpdateRoleResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the UpdateRoleResolver class,   
 * which handles the GraphQL mutation for updating a role.
 * It uses Jest for testing and mocks the UpdateRoleCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { UpdateRoleResolver } from 'src/roles/presentation/graphql/resolvers/update-role.resolver';
import { UpdateRoleCommandHandler } from 'src/roles/application/use-cases/update/update-role.command-handler';
/**
 * @description Unit tests for UpdateRoleResolver
 * @class UpdateRoleResolver
 */
describe('UpdateRoleResolver', () => {
  let resolver: UpdateRoleResolver;
  let commandHandler: UpdateRoleCommandHandler;
/**
 * Setup for the UpdateRoleResolver tests
 * @function beforeEach
 * @async
 * @returns {Promise<void>}
 * @description This function initializes the testing module and provides a mock implementation of the UpdateRoleCommandHandler.
 * It is called before each test to ensure a clean state.
 * 
 */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateRoleResolver,
        {
          provide: UpdateRoleCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<UpdateRoleResolver>(UpdateRoleResolver);
    commandHandler = module.get<UpdateRoleCommandHandler>(UpdateRoleCommandHandler);
  });
    /**
     * Test to check if the resolver is defined
     * @function it
     * @description This test verifies that the UpdateRoleResolver instance is created successfully.
     */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the command handler's execute method is called with the correct arguments
     * @function it
     * @description This test verifies that the execute method of the UpdateRoleCommandHandler is called with the correct role data
     * and that it returns the updated role.
     */
  it('should call commandHandler.execute with correct arguments', async () => {
    const mockRole = { id: '123', name: 'Admin' };
    (commandHandler.execute as jest.Mock).mockResolvedValue({
      toJSON: () => mockRole,
    });

    const result = await resolver.updateRole({ id: '123', name: 'Admin' });

    expect(commandHandler.execute).toHaveBeenCalledWith({ id: '123', name: 'Admin' });
    expect(result).toEqual(mockRole);
  });
});
