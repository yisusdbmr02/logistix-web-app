# Application Layer

This layer orchestrates the business logic that applies to specific use cases. Its role is to coordinate flows between different parts of the system, responding to external events (such as an HTTP request or a message from a queue) and delegating the execution to the appropriate components.
It’s important to note that this layer does not define pure business rules, as those live in the domain layer. Instead, it contains application logic — the coordination of how roles are created, updated, queried, or deleted, depending on the use case context.

In short, this layer serves as a mediator between the user interface (or any other adapter) and the domain. It receives and validates input, executes defined use cases, and returns output adapted to the consumer.

## Structure

- `dto/` – Defines the Data Transfer Objects, which represent the shape of input data received from the user (or other external sources). These objects may also perform validation and transformation of the input.
- `use-cases/` – Contains use cases, organized into folders. Each use case represents a specific unit of application logic. Within each folder:
  - `command.ts` – Defines the data required to execute the use case. Acts as an input container.
  - `command-handler.ts` – Contains the logic that executes the use case. This is where the interaction with the domain occurs — calling repositories, domain services, etc.
  - `response.ts` – Defines the structure of the output object, typically a serializable DTO to be returned to the client.

## Example
This command encapsulates the data needed to execute the CreatePermission use case. It is then processed by a CommandHandler, which performs the required actions and returns a structured response.
```ts
new CreateRoleCommand('Admin');