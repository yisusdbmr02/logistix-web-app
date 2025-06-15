# Permissions Module

This module handles roles management following Clean Architecture principles using NestJS, MongoDB, and GraphQL.

## Features

- Create, update, delete, and fetch roles.
- Uses UUIDs for roles IDs.
- Implements domain entities, value objects, repositories, use cases, and GraphQL resolvers.
- Clear separation of concerns for maintainability and scalability.

## Project Structure

```
roles/
├── application/
│   ├── dto/
│   └── use-cases/
├── domain/
│   ├── entities/
│   ├── exceptions/
│   ├── interfaces/
│   └── value-objects/
├── infrastructure/
│   ├── persistence/
│   │   ├── mappers/
│   │   ├── repositories/
│   │   └── schemas/
├── presentation/
│   └── graphql/
│       └── dtos/
│       └── entities/
│       └── resolvers/
```

## GraphQL API Endpoints

- `createRole(name: String!): Role`
- `updateRole(id: String!, name: String): Role`
- `deleteRole(id: String!): DeleteRole`
- `findRoleById(id: String!): Role`
- `findAllRoles: [Role!]`

## Notes

- DTOs are used for input validation and output formatting.
- Domain entities encapsulate business logic.
- Repositories handle database persistence.
- Use cases contain application business rules.
- Resolvers expose GraphQL operations.

## License

MIT
