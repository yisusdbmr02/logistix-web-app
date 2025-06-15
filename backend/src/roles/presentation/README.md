# Presentation Layer

This layer is responsible for managing the communication interface of the application—specifically through **GraphQL**. It connects GraphQL operations (queries and mutations) with application-level use cases, translating inputs/outputs accordingly.

## Structure

- `graphql/entities/` – GraphQL representations of domain models (used in output).
- `graphql/dtos/` – Input and output DTOs for GraphQL operations.
- `graphql/resolvers/` – GraphQL resolvers mapped one-to-one with use cases.

## Responsibilities

- Handle GraphQL queries and mutations.
- Map data from client input to application command/query objects.
- Format use case results into GraphQL-compatible responses.
- Remain free of business logic—only coordinates and delegates.

## Principles

- Maintain strict separation of concerns.
- No direct logic or validation here—just delegation to use cases.
- Match GraphQL schema closely but decouple from the domain model.

## Summary
The presentation layer adapts external GraphQL requests into internal actions and wraps the domain output into API-friendly structures. It is the boundary between the outside world and your clean architecture.
