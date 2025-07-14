# Contributing to Night Moves

Thank you for your interest in contributing to Night Moves! We welcome contributions from the community and are excited to work with you.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Process](#development-process)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and constructive in all interactions.

## Getting Started

### Prerequisites

- Node.js (version 18.0 or higher)
- npm or bun package manager
- Git
- A GitHub account

### Setting Up Your Development Environment

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/night-moves.git
   cd night-moves
   ```
3. **Add the upstream remote**:
   ```bash
   git remote add upstream https://github.com/DevGruGold/night-moves.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```
5. **Start the development server**:
   ```bash
   npm run dev
   # or
   bun dev
   ```

## Development Process

### Branching Strategy

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/feature-name` - New features
- `bugfix/bug-description` - Bug fixes
- `hotfix/critical-fix` - Critical production fixes

### Workflow

1. **Create a new branch** from `main`:
   ```bash
   git checkout main
   git pull upstream main
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following our code style guidelines

3. **Test your changes** thoroughly

4. **Commit your changes** with clear, descriptive messages:
   ```bash
   git add .
   git commit -m "feat: add new mobile mining optimization"
   ```

5. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** on GitHub

## Pull Request Process

### Before Submitting

- [ ] Ensure your code follows our style guidelines
- [ ] Add or update tests as needed
- [ ] Update documentation if necessary
- [ ] Verify all tests pass
- [ ] Check that your changes don't break existing functionality

### Pull Request Template

When creating a pull request, please include:

- **Description**: Clear description of what changes you made
- **Motivation**: Why these changes are needed
- **Testing**: How you tested your changes
- **Screenshots**: If applicable, especially for UI changes
- **Breaking Changes**: Any breaking changes and migration notes

### Review Process

1. At least one maintainer will review your PR
2. Address any feedback or requested changes
3. Once approved, a maintainer will merge your PR
4. Your branch will be deleted after merging

## Issue Guidelines

### Reporting Bugs

When reporting bugs, please include:

- **Environment**: OS, browser, Node.js version
- **Steps to reproduce**: Clear, step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Additional context**: Any other relevant information

### Requesting Features

For feature requests, please include:

- **Problem description**: What problem does this solve?
- **Proposed solution**: How should this work?
- **Alternatives considered**: Other approaches you've thought about
- **Additional context**: Mockups, examples, etc.

## Code Style

### TypeScript/JavaScript

- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Prefer functional components and hooks

### React Components

- Use functional components with hooks
- Keep components small and focused
- Use proper prop types with TypeScript
- Follow the existing component structure

### CSS/Styling

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistency with the design system
- Use semantic class names when custom CSS is needed

### File Organization

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript type definitions
└── styles/             # Global styles and Tailwind config
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests

- Write unit tests for utility functions
- Write component tests for React components
- Include integration tests for critical user flows
- Aim for good test coverage, especially for new features

### Test Guidelines

- Use descriptive test names
- Test both happy path and edge cases
- Mock external dependencies
- Keep tests focused and isolated

## Documentation

### Code Documentation

- Add JSDoc comments for public APIs
- Include examples in documentation
- Keep README.md up to date
- Document any breaking changes

### Commit Messages

Follow conventional commit format:

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks

Examples:
```
feat: add mobile device detection for Termux download
fix: resolve button overflow on small screens
docs: update installation instructions
```

## Getting Help

If you need help or have questions:

1. Check existing issues and documentation
2. Create a new issue with the "question" label
3. Join community discussions
4. Reach out to maintainers

## Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Special mentions for outstanding contributions

Thank you for contributing to Night Moves and the XMRT DAO ecosystem!

