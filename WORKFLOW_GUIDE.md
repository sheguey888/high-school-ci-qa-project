# Git, CI, and QA Workflow Guide

## Complete Demonstration of Best Practices

This guide documents all the version control, continuous integration, and quality assurance practices demonstrated in this project.

---

## Part 1: Version Control with Git

### 1.1 Repository Initialization

**Commands Used:**

```bash
git init
git remote add origin https://github.com/sheguey888/high-school-ci-qa-project.git
```

**Purpose:** Initialize a local Git repository and connect it to GitHub remote repository.

### 1.2 Staging and Committing Changes

**Commands Used:**

```bash
git add .
git commit -m "Initial commit: Project setup with calculator app, tests, CI, and QA documentation"
```

**Purpose:** Stage all files and create a snapshot of the project state with a descriptive commit message.

### 1.3 Pushing to Remote Repository

**Command Used:**

```bash
git push -u origin main
```

**Purpose:** Upload local commits to GitHub, making code accessible to collaborators.

### 1.4 Branch Management

#### Creating a Feature Branch

**Command Used:**

```bash
git checkout -b feature/add-modulo-operation
```

**Purpose:** Create an isolated environment for developing new features without affecting the main codebase.

#### Branches Created in This Project:

- `main` - Production-ready code
- `develop` - Integration branch for features
- `feature/add-modulo-operation` - Feature branch for modulo functionality

### 1.5 Pull Request Workflow

**Steps Demonstrated:**

1. Create feature branch from main
2. Implement new feature (modulo operation)
3. Write unit tests for the feature
4. Commit changes to feature branch
5. Push feature branch to GitHub
6. Create pull request from feature branch to main
7. Wait for CI checks to pass
8. Request code review
9. Merge after approval

**Pull Request Created:**

- PR #1: "feat: Add modulo operation to calculator"
- URL: https://github.com/sheguey888/high-school-ci-qa-project/pull/1

### 1.6 Collaboration Practices

**Demonstrated Workflows:**

- Feature branch isolation
- Descriptive commit messages using conventional commits format
- Pull request templates with detailed descriptions
- Code review checklist

---

## Part 2: Continuous Integration (CI)

### 2.1 CI Pipeline Configuration

**File:** `.github/workflows/ci.yml`

**Pipeline Triggers:**

- Push to `main`, `develop`, or `feature/*` branches
- Pull requests to `main` or `develop` branches

### 2.2 CI Pipeline Stages

#### Stage 1: Test and Lint

**Purpose:** Run automated tests and code quality checks

**Steps:**

1. Checkout code from repository
2. Setup Node.js (versions 16.x and 18.x)
3. Install dependencies with `npm ci`
4. Run ESLint to check code style
5. Execute Jest unit tests
6. Generate test coverage report

**Matrix Testing:**

- Tests run on multiple Node.js versions simultaneously
- Ensures compatibility across different environments

#### Stage 2: Build Check

**Purpose:** Verify project integrity

**Steps:**

1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Verify project structure (src/, tests/, package.json)

#### Stage 3: Notification

**Purpose:** Report build status

**Steps:**

1. Check results from previous stages
2. Display success or failure message
3. Fail pipeline if any stage fails

### 2.3 Benefits of CI

**Observed Advantages:**

- ✅ Immediate feedback on code changes
- ✅ Prevents broken code from being merged
- ✅ Automates repetitive testing tasks
- ✅ Ensures cross-version compatibility
- ✅ Documents build history
- ✅ Reduces manual testing burden

### 2.4 CI Status Badges

The repository shows build status in real-time, providing instant visibility into code quality.

---

## Part 3: Quality Assurance (QA)

### 3.1 Unit Testing Strategy

**Framework:** Jest

**Test Files:**

- `tests/calculator.test.js` - 30 tests for calculator functions
- `tests/validator.test.js` - 18 tests for validation utilities

**Total Test Count:** 48 unit tests

**Coverage Target:** 100% (achieved)

### 3.2 Test Organization

**Structure:**

```javascript
describe('Module Name', () => {
  describe('functionName()', () => {
    test('should handle normal case', () => { ... });
    test('should handle edge case', () => { ... });
    test('should throw error for invalid input', () => { ... });
  });
});
```

**Test Categories:**

1. **Normal Cases:** Standard inputs and expected outputs
2. **Edge Cases:** Zero, negative numbers, decimals
3. **Error Cases:** Invalid inputs, exceptions
4. **Boundary Cases:** Maximum/minimum values

### 3.3 Code Coverage Report

**Metrics Achieved:**

- Statements: 100%
- Branches: 100%
- Functions: 100%
- Lines: 100%

**How to Generate:**

```bash
npm test -- --coverage
```

### 3.4 Linting Configuration

**Tool:** ESLint

**Configuration File:** `.eslintrc.json`

**Enforced Rules:**

- 2-space indentation
- Single quotes for strings
- Semicolons required
- Strict equality (===)
- No trailing whitespace
- Consistent spacing
- Unix line endings

**How to Run:**

```bash
npm run lint          # Check for issues
npm run lint:fix      # Auto-fix issues
```

### 3.5 Code Review Process

**Review Checklist:**

- [ ] Code is clear and readable
- [ ] All tests pass
- [ ] New tests added for new features
- [ ] Code follows style guidelines
- [ ] No security vulnerabilities
- [ ] Documentation updated
- [ ] Error handling is appropriate
- [ ] Edge cases considered

**Review Guidelines:**

1. Be constructive and respectful
2. Focus on code, not the person
3. Explain the "why" behind suggestions
4. Acknowledge good practices
5. Ask questions if unclear

---

## Part 4: Project Structure

```
high-school-ci-qa-project/
├── .github/
│   └── workflows/
│       └── ci.yml              # CI pipeline configuration
├── src/
│   ├── calculator.js           # Calculator functions
│   └── validator.js            # Input validation
├── tests/
│   ├── calculator.test.js      # Calculator tests
│   └── validator.test.js       # Validator tests
├── .eslintrc.json              # Linting rules
├── .gitignore                  # Git ignore patterns
├── jest.config.js              # Jest configuration
├── package.json                # Project dependencies
├── QA_REPORT.md                # Quality assurance report
├── REFLECTION.md               # Learning reflection
├── README.md                   # Project overview
└── WORKFLOW_GUIDE.md           # This file
```

---

## Part 5: Common Git Commands Reference

### Basic Commands

```bash
# Check status
git status

# View commit history
git log --oneline --graph

# View differences
git diff

# Discard changes
git restore <file>
```

### Branching Commands

```bash
# List branches
git branch

# Create new branch
git branch <branch-name>

# Switch branches
git checkout <branch-name>

# Create and switch
git checkout -b <branch-name>

# Delete branch
git branch -d <branch-name>
```

### Collaboration Commands

```bash
# Fetch changes
git fetch origin

# Pull changes
git pull origin main

# Push branch
git push origin <branch-name>

# View remotes
git remote -v
```

### Merge Commands

```bash
# Merge branch into current
git merge <branch-name>

# Abort merge
git merge --abort
```

---

## Part 6: Testing Commands

### Run All Tests

```bash
npm test
```

### Run Specific Test File

```bash
npm test calculator.test.js
```

### Run Tests in Watch Mode

```bash
npm test -- --watch
```

### Generate Coverage Report

```bash
npm test -- --coverage
```

### Run Tests with Verbose Output

```bash
npm test -- --verbose
```

---

## Part 7: Best Practices Demonstrated

### Git Best Practices

✅ Descriptive commit messages  
✅ Atomic commits (one logical change per commit)  
✅ Feature branches for new development  
✅ Regular pushes to remote  
✅ Pull requests for code review  
✅ Never commit directly to main

### CI Best Practices

✅ Automated testing on every push  
✅ Multiple environment testing (matrix)  
✅ Fast feedback loops  
✅ Clear pipeline stages  
✅ Meaningful job names  
✅ Status notifications

### QA Best Practices

✅ Write tests before merging  
✅ Test edge cases and error conditions  
✅ Maintain high code coverage  
✅ Consistent code style  
✅ Regular code reviews  
✅ Document all functions

---

## Part 8: Learning Outcomes

### Skills Developed

1. **Version Control:** Managing code with Git and GitHub
2. **Collaboration:** Working with branches and pull requests
3. **Automation:** Setting up CI pipelines
4. **Testing:** Writing comprehensive unit tests
5. **Code Quality:** Using linters and maintaining standards
6. **Documentation:** Creating clear project documentation

### Real-World Applications

- Working in software development teams
- Contributing to open-source projects
- Managing personal projects professionally
- Preparing for software engineering internships
- Building portfolio projects

---

## Part 9: Troubleshooting Guide

### Common Issues and Solutions

**Problem:** Tests failing locally  
**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
npm test
```

**Problem:** Merge conflicts  
**Solution:**

```bash
git status  # See conflicted files
# Edit files to resolve conflicts
git add .
git commit -m "Resolve merge conflicts"
```

**Problem:** Forgot to create branch  
**Solution:**

```bash
git stash
git checkout -b feature/my-feature
git stash pop
```

**Problem:** Need to undo last commit  
**Solution:**

```bash
git reset --soft HEAD~1  # Keep changes
# or
git reset --hard HEAD~1  # Discard changes
```

---

## Part 10: Next Steps

### Recommended Improvements

1. Add integration tests
2. Implement code coverage badges
3. Set up automated releases
4. Add security scanning
5. Create contributing guidelines
6. Add issue templates
7. Implement semantic versioning
8. Add performance benchmarks

### Further Learning Resources

- Git Documentation: https://git-scm.com/doc
- GitHub Actions: https://docs.github.com/actions
- Jest Testing: https://jestjs.io/docs/getting-started
- ESLint: https://eslint.org/docs/latest/
- Conventional Commits: https://www.conventionalcommits.org/

---

## Conclusion

This project successfully demonstrates all three major components of modern software development:

1. **Version Control:** Complete Git workflow with branching, merging, and collaboration
2. **Continuous Integration:** Automated testing and building with GitHub Actions
3. **Quality Assurance:** Comprehensive testing, linting, and code review practices

These practices form the foundation of professional software development and are essential skills for any software engineer.

---

**Project Repository:** https://github.com/sheguey888/high-school-ci-qa-project  
**Documentation Date:** December 1, 2025  
**Status:** ✅ Complete - All objectives achieved
