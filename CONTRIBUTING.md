# Project Maintenance

These packages are maintained and updated by **exanic AG** and **jNetwork GmbH**.

The packages may be used freely. Any licence conditions regarding dependencies must be observed in each case.

# How to contribute

Errors may be reported at any time by creating an issue or corrected directly with a pull request.
We reserve the right to reject pull requests if they do not fit in with the concept and idea of the library.

Before starting larger changes, please consider opening an issue first to discuss the proposed improvement.

## Angular Version Strategy

This repository supports multiple Angular major versions.

- For **each Angular major version**, there is a dedicated `main` branch.
- These branches follow the naming convention:

`angular/<major>.x.x`

Examples:

- `angular/16.x.x`
- `angular/17.x.x`
- `angular/18.x.x`

All **changes must always be implemented in the newest available Angular version branch first**.

If necessary, maintainers may later port the changes to older supported versions.

## Testing

All changes must be properly tested before submitting a pull request.

The following rules apply:

- For **every use case**, a corresponding **Cypress test must be created or updated**.
- All existing tests must run successfully.
- The project must build successfully without errors.

Pull requests without proper test coverage may be rejected.

## Submitting changes

When submitting a pull request, please follow these guidelines:

1. Fork the repository and create your branch from the **latest Angular version branch**.
2. Use a clear and descriptive branch name.
3. Make focused commits that address a single issue or feature.
4. Write clear commit messages describing the purpose of the change.
5. Ensure all tests, linting, and formatting checks pass before submitting the pull request.

Pull requests should include:

- A clear description of the changes
- The motivation for the change
- References to related issues (if applicable)

## Coding conventions

To keep the project consistent and maintainable, please follow these conventions:

- Use **TypeScript** and follow Angular best practices.
- Code must pass the configured **linting rules** without errors.
- All files must be formatted using **Prettier**.
- Imports and TypeScript structure should be organized using **TypeScript Code Organizer**.
- Follow the existing project structure and naming conventions.
- Use meaningful and consistent naming for variables, components, and services.
- Keep components focused on a single responsibility.

## Branch naming conventions

Branches for **features, improvements, or fixes** must include the **Angular version prefix**.

Prefix format:

`ng<AngularMajorVersion>/`

Examples:

- `ng16/feature-new-control`
- `ng17/fix-button-alignment`
- `ng20/improve-form-validation`

This prefix ensures that changes can be clearly associated with the corresponding Angular version.

## Code of conduct

Please be respectful and constructive when contributing.
Feedback and discussions should remain professional and focused on improving the project.
