# High School CI/QA Learning Project

## 🔗 GitHub Repository
**URL:** https://github.com/sheguey888/high-school-ci-qa-project

## Overview
This project demonstrates version control with Git, continuous integration with GitHub Actions, and quality assurance practices for high school students.

## Project Structure
```
├── src/
│   ├── calculator.js       # Main calculator functions
│   └── validator.js        # Input validation utilities
├── tests/
│   ├── calculator.test.js  # Unit tests for calculator
│   └── validator.test.js   # Unit tests for validator
├── .github/
│   └── workflows/
│       └── ci.yml          # CI pipeline configuration
├── .eslintrc.json          # Linter configuration
├── package.json            # Project dependencies
└── README.md               # This file
```

## Features
- **Calculator**: Basic arithmetic operations (add, subtract, multiply, divide)
- **Validator**: Input validation for calculator operations
- **Unit Tests**: Comprehensive test coverage using Jest
- **CI Pipeline**: Automated testing and linting with GitHub Actions
- **Code Quality**: ESLint for consistent code style

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- Git
- GitHub account

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd High-School-Students

# Install dependencies
npm install
```

## Usage

### Running Tests
```bash
npm test
```

### Running Linter
```bash
npm run lint
```

### Fixing Lint Issues
```bash
npm run lint:fix
```

## Git Workflow Demonstrated

### 1. Version Control
- Initial repository setup
- Staging and committing changes
- Pushing to remote repository
- Branching strategy

### 2. Collaboration
- Creating feature branches
- Merging branches
- Resolving merge conflicts
- Pull request workflow

### 3. Continuous Integration
- Automated testing on push
- Build verification
- Code quality checks

## Learning Objectives
✅ Understand version control with Git  
✅ Practice branching and merging  
✅ Set up automated CI pipelines  
✅ Write and run unit tests  
✅ Use linters for code quality  
✅ Conduct code reviews via pull requests  

## License
MIT License
