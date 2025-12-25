# Belibiz-web

This is the client of belibiz project.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started (run local)

First, make sure you use the correct node version

```bash
node version: v18.18.0
```

Then install the project

```bash
npm install
# or
yarn
# or
pnpm install
# or
bun install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3005](http://localhost:3005) with your browser to see the result.

## Conventional Commits

A specification for adding human and machine readable meaning to commit messages

### Commit message guide

```bash
<option1>(<option2>): <your commit message>
```

### Example for a valid commit message

```bash
feat(setup): add commitlint for commit message validation
```

### Conventional Commits Docs

```bash
Option1
  "feat", // New feature
  "fix", // Bug fix
  "docs", // Documentation changes
  "style", // Changes that do not affect the meaning of the code (white-space, formatting, etc.)
  "refactor", // Code changes that neither fix a bug nor add a feature
  "perf", // Performance improvement
  "test", // Adding missing tests or correcting existing tests
  "build", // Changes that affect the build system or external dependencies (example scopes: npm)
  "ci", // Changes to CI configuration files and scripts
  "chore", // Other changes that dont modify src or test files
  "revert", // Reverts a previous commit

Option2
  "setup", // Project setup
  "config", // Configuration files
  "deps", // Dependency updates
  "feature", // Feature-specific changes
  "bug", // Bug fixes
  "docs", // Documentation
  "style", // Code style/formatting
  "refactor", // Code refactoring
  "test", // Tests
  "build", // Build scripts or configuration
  "ci", // Continuous integration
  "release", // Release related changes
  "other", // Other changes
```

Please use the correct conventional commit format, otherwise the commit will be rejected.
