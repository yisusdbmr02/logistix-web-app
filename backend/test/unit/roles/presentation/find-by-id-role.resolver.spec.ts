/**
 * @fileoverview Unit tests for FindRoleByIdResolver
 * @module FindRoleByIdResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the FindRoleByIdResolver class,
 * which handles the GraphQL query for finding a role by its ID.
 * It uses Jest for testing and mocks the FindRoleByIdQueryHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { FindRoleByIdResolver } from 'src/roles/presentation/graphql/resolvers/find-by-id-role.resolver';
import { FindRoleByIdQueryHandler } from 'src/roles/application/use-cases/find-by-id/find-role-by-id.query-handler';
import { FindRoleByIdQuery } from 'src/roles/application/use-cases/find-by-id/find-role-by-id.query';
/**
 * @description Unit tests for FindRoleByIdResolver
 * @class FindRoleByIdResolver
 */
describe('FindRoleByIdResolver', () => {
  let resolver: FindRoleByIdResolver;
  let queryHandler: FindRoleByIdQueryHandler;
    /**
     * Setup for the FindRoleByIdResolver tests
     * @function beforeEach
     * @async
     * @returns {Promise<void>}
     * @description This function initializes the testing module and provides a mock implementation of the FindRoleByIdQueryHandler.
     * It is called before each test to ensure a clean state.
     */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindRoleByIdResolver,
        {
          provide: FindRoleByIdQueryHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<FindRoleByIdResolver>(FindRoleByIdResolver);
    queryHandler = module.get<FindRoleByIdQueryHandler>(FindRoleByIdQueryHandler);
  });


  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
    /**
     * Test to check if the query handler's execute method is called with the correct id
     * @function it
     * @description This test verifies that the execute method of the FindRoleByIdQueryHandler is called with the correct role id
     * and that it returns the role object.
     */
  it('should call queryHandler.execute with id and return role', async () => {
    const mockRole = {
      toJSON: jest.fn().mockReturnValue({ id: '123', name: 'Admin' }),
    };
    (queryHandler.execute as jest.Mock).mockResolvedValue(mockRole);

    const result = await resolver.findRoleById('123');

    expect(queryHandler.execute).toHaveBeenCalledWith(new FindRoleByIdQuery('123'));
    expect(result).toEqual({ id: '123', name: 'Admin' });
  });
});
