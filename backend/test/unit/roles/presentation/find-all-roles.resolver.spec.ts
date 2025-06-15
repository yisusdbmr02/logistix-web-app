/**
 * @fileoverview Unit tests for FindAllRolesResolver
 * @module FindAllRolesResolver
 * @author [Jesús Díaz]
 * @description This file contains unit tests for the FindAllRolesResolver class,
 * which handles the GraphQL query for finding all roles.
 * It uses Jest for testing and mocks the FindAllRolesQueryHandler.
 */
import { Test, TestingModule } from '@nestjs/testing';
import { FindAllRolesResolver } from 'src/roles/presentation/graphql/resolvers/find-all-roles.resolver';
import { FindAllRolesQueryHandler } from 'src/roles/application/use-cases/find-all/find-all-roles.query-handler';
/**
 * @description Unit tests for FindAllRolesResolver
 * @class FindAllRolesResolver
 */
describe('FindAllRolesResolver', () => {
  let resolver: FindAllRolesResolver;
  let queryHandler: FindAllRolesQueryHandler;
  /**
   * Setup for the FindAllRolesResolver tests
   * @function beforeEach
   * @async
   * @returns {Promise<void>}
   * @description This function initializes the testing module and provides a mock implementation of the FindAllRolesQueryHandler.
   * It is called before each test to ensure a clean state.
   */
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FindAllRolesResolver,
        {
          provide: FindAllRolesQueryHandler,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    resolver = module.get<FindAllRolesResolver>(FindAllRolesResolver);
    queryHandler = module.get<FindAllRolesQueryHandler>(FindAllRolesQueryHandler);
  });
  /**
   * Test to check if the resolver is defined
   * @function it
   * @description This test verifies that the FindAllRolesResolver instance is created successfully.
   */
  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
  /**
   * Test to check if the query handler's execute method is called and returns roles
   * @function it
   * @description This test verifies that the execute method of the FindAllRolesQueryHandler is called
   * and that it returns an array of roles.
   */
  it('should call queryHandler.execute and return roles array', async () => {
   const mockRoles = {
      toJSON: jest.fn().mockReturnValue([
        { id: '1', name: 'READ_USERS' },
        { id: '2', name: 'WRITE_USERS' },
      ]),
    };
    (queryHandler.execute as jest.Mock).mockResolvedValue(mockRoles);

    const result = await resolver.findAllRoles();

    expect(queryHandler.execute).toHaveBeenCalled();
    expect(result).toEqual(mockRoles.toJSON());

  });
});
