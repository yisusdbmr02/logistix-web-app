/**
 * @fileoverview Unit tests for CreateRoleResolver
 * @module CreateRoleResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the CreateRoleResolver class,
 * which handles the GraphQL mutation for creating a role.
 * It uses Jest for testing and mocks the CreateRoleCommandHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { CreateRoleResolver } from 'src/roles/presentation/graphql/resolvers/create-role.resolver';
import { CreateRoleCommandHandler } from 'src/roles/application/use-cases/create/create-role-command-handler';
/**
 * @description Unit tests for CreateRoleResolver
 * @class CreateRoleResolver
 */
describe('CreateRoleResolver', () => {
  let resolver: CreateRoleResolver;
  let commandHandler: CreateRoleCommandHandler;
    /**
     * Setup for the CreateRoleResolver tests
     * @function beforeEach
     * @async
     * @returns {Promise<void>}
     * @description This function initializes the testing module and provides a mock implementation of the CreateRoleCommandHandler.
     * It is called before each test to ensure a clean state.
     */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateRoleResolver,
        {
          provide: CreateRoleCommandHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<CreateRoleResolver>(CreateRoleResolver);
    commandHandler = module.get<CreateRoleCommandHandler>(CreateRoleCommandHandler);
  });
    /**
     * Test to check if the resolver is defined
     * @function it
     * @description This test verifies that the CreateRoleResolver instance is created successfully.
     */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the command handler's execute method is called with the correct arguments
     * @function it
     * @description This test verifies that the execute method of the CreateRoleCommandHandler is called with the correct role data
     * and that it returns the created role.
     */
  it('should call commandHandler.execute with correct arguments', async () => {
    const mockRole = { id: '123', name: 'Admin' };
    (commandHandler.execute as jest.Mock).mockResolvedValue({
      toJSON: () => mockRole,
    });

    const result = await resolver.createRole({ name: 'Admin' });

    expect(commandHandler.execute).toHaveBeenCalledWith({ name: 'Admin' });
    expect(result).toEqual(mockRole);
  });
});
