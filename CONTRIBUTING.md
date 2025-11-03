# Contributing to Employee Management System

First off, thank you for considering contributing to this project! 🎉

The following is a set of guidelines for contributing to Employee Management System. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting Enhancements](#suggesting-enhancements)
  - [Pull Requests](#pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
  - [Git Commit Messages](#git-commit-messages)
  - [JavaScript Style Guide](#javascript-style-guide)
  - [React Component Guidelines](#react-component-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible.
* **Provide specific examples to demonstrate the steps**.
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** if possible.
* **Include your environment details** (OS, browser version, Node.js version, etc.).

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps** or provide mockups/wireframes.
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Explain why this enhancement would be useful** to most users.

### Pull Requests

* Fill in the required template
* Follow the [JavaScript style guide](#javascript-style-guide)
* Include screenshots and animated GIFs in your pull request whenever possible
* End all files with a newline
* Avoid platform-dependent code

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/React.git
   cd React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make your changes and test them**
   ```bash
   npm start  # Run development server
   npm test   # Run tests
   npm run build  # Test production build
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "Add your descriptive commit message"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**
   
   Go to the original repository and create a pull request from your fork.

## Style Guidelines

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* Consider starting the commit message with an applicable emoji:
  * 🎨 `:art:` when improving the format/structure of the code
  * 🐛 `:bug:` when fixing a bug
  * ✨ `:sparkles:` when adding a new feature
  * 📝 `:memo:` when writing docs
  * 🚀 `:rocket:` when improving performance
  * ✅ `:white_check_mark:` when adding tests
  * 🔒 `:lock:` when dealing with security

### JavaScript Style Guide

* Use ES6+ features when possible
* Use `const` and `let` instead of `var`
* Use arrow functions for anonymous functions
* Use template literals for string interpolation
* Use destructuring when appropriate
* Follow ESLint rules configured in the project

Example:
```javascript
// Good
const greeting = (name) => {
  return `Hello, ${name}!`;
};

// Avoid
var greeting = function(name) {
  return "Hello, " + name + "!";
};
```

### React Component Guidelines

* Use functional components with hooks
* Keep components small and focused on a single responsibility
* Use meaningful component and prop names
* Add PropTypes or TypeScript types for props
* Document components with JSDoc comments
* Follow the existing folder structure

Example:
```javascript
/**
 * Button component for user actions
 * @param {Object} props - Component props
 * @param {string} props.label - Button label text
 * @param {Function} props.onClick - Click handler
 * @returns {JSX.Element} Button component
 */
const Button = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="btn">
      {label}
    </button>
  );
};
```

## Questions?

Feel free to open an issue with the "question" label if you have any questions!

Thank you for your contributions! 🙏
