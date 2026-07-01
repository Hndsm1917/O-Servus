# O-Servus

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.0.5.

## Requirements

- Node.js `22.23.1`+ (see `.nvmrc` — run `nvm use` before installing) or `24.15.0`+ / `26.0.0`+.
- [pnpm](https://pnpm.io/) as the package manager.

## Architecture notes

- **Styling**: SCSS with BEM (`block__element--modifier`). Enforced by Stylelint
  (`stylelint-selector-bem-pattern`, `.stylelintrc.json`) — run `pnpm run lint:styles`.
- **Resizer** (`src/app/core/resizer/`): wraps the whole app (see `app.html`) and computes a
  viewport-driven `font-size` in px on itself, so component styles can use `em` units and scale
  fluidly across breakpoints. It's a signals-based Angular port of a Vue `useResizer`
  composable — breakpoints live in `core/resizer/config/resizer-params.ts`.
- **Notion integration** (`src/app/core/notion/`): `NotionService` calls a backend proxy at
  `environment.notionApiBaseUrl` (`/api/notion` by default) using the same path shape as the
  real Notion API (`/databases/:id/query`, `/pages/:id`, `/blocks/:id/children`). No backend
  exists yet — the expected contract is:
  - The proxy forwards each request to `https://api.notion.com/v1/...` unchanged, adding the
    `Authorization: Bearer <secret>` and `Notion-Version` headers server-side.
  - The secret Notion token must never reach the browser bundle.
  - `notion-mapper.ts` flattens raw Notion pages/properties into plain `NotionRecord` objects
    for components to consume.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
