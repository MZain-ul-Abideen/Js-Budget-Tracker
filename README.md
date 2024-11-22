# Budget Tracker Web App

A simple and intuitive budget tracker application built with Vue.js. This app allows users to manage their finances by tracking income and expenses, and calculating the remaining balance.

## Features

- Income Tracking: Add and manage multiple income sources.
- Expense Tracking: Keep a record of all your expenses.
- Balance Calculation: Automatically calculates and displays your current balance.
- Real-Time Updates: Any changes to income or expenses immediately reflect in the balance.

## Technologies Used

**Frontend Framework:** Vue.js

**Build Tool:** Vite

**Package Manager:** npm

**Development Environment:** Visual Studio Code (VS Code)

## Installation

1. Installation

```bash
git clone https://github.com/MZain-ul-Abideen/Js-Budget-Tracker.git
cd Js-Budget-Tracker
```

2. Install Dependencies

```bash
npm install
```

3. Start the Development Server

```bash
npm run dev
```

## Static Code Analysis with ESLint

This project uses ESLint for static code analysis to ensure code quality and maintainability.

#### Installation

1. Install ESLint and dependencies (if not already done):

```bash
npm install eslint --save-dev
```

2. Check the configuration file (eslint.config.js) at the root of the project. This file includes predefined rules and settings for Vue.js and JavaScript.

#### Usage

1. Run the following command to analyze your code:

```bash
npm run lint
```

This command will check all JavaScript and Vue files in the src directory for issues.

2. ESLint Output Example:

It would show something like this if your code has some errors.

```bash
/src/App.vue
  10:5   warning  Unexpected console statement  no-console
  12:13  error    'unusedVar' is defined but never used  no-unused-vars
✖ 2 problems (1 error, 1 warning)
```

3. Fix any reported issues to ensure your code meets the project's quality standards.

## Automating Static Code Analysis with Pre-commit Hooks

This project uses Husky and lint-staged to automate static code analysis during commits, ensuring that only clean, linted code is committed to the repository.

#### Setup Instructions

1. **Install Dependencies**  
   Install Husky and lint-staged as development dependencies:

```bash
npm install husky lint-staged --save-dev
```

2. Initialize Husky
   Enable Husky in the project:

```bash
npx husky install
```

3. Add a Pre-commit Hook
   Set up a pre-commit hook that runs lint-staged:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

4. Configure lint-staged
   Add the following configuration to your package.json:

```bash
"lint-staged": {
  "src/**/*.{js,vue}": "eslint"
}
```

This tells lint-staged to run ESLint on all staged JavaScript and Vue files in the src directory.

##### Usage

Once set up, every time you try to commit changes, the pre-commit hook will automatically run ESLint on the staged files. If linting issues are detected, the commit will be blocked until the issues are resolved.

1. Stage your changes:

```bash
git add .
```

2. Attempt to commit:

```bash
git commit -m "Your commit message"
```

3. If issues are found, the hook will prevent the commit and display the errors in the terminal. Fix the errors and try committing again.

Example Workflow:

- After making changes to a Vue component (src/components/BudgetTracker.vue), run:
  ```bash
  git add src/components/BudgetTracker.vue
  git commit -m "Fix layout issues"
  ```
- The hook will check the staged file for linting errors and either allow or block the commit based on the results.

Benefits

- Ensures code quality is maintained without manual intervention.
- Prevents linting errors from entering the repository.

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.
