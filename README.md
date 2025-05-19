# Automation Exercise 🚀

End-to-end testing framework for [Automation Exercise](https://automationexercise.com/) using [Playwright](https://playwright.dev/) with TypeScript.

> Developed for purpose of QA automation interview at Wiser Technology.

![Node.js](https://img.shields.io/badge/Node.js-16%2B-green)
![Playwright](https://img.shields.io/badge/Tested%20With-Playwright-blue)
![License](https://img.shields.io/badge/License-Demo-lightgrey)

---

## 📖 Overview

This project includes a suite of automated tests for common user flows on the Automation Exercise website. Covered functionalities include:

- User Registration
- Login / Logout
- Product Search
- Cart Operations

Built with the Page Object Model (POM) pattern for maintainability and scalability.

---

## 📁 Project Structure

```
automation-exercise/
├── playwright.config.ts      # Playwright configuration
├── src/
│   ├── fixtures/             # Shared test fixtures
│   ├── pages/                # Page Object Models
│   ├── test-data/            # Test data (e.g., credentials)
│   └── utils/                # Helper utilities
├── tests/                    # Test specs
├── playwright-report/        # Playwright HTML reports
├── test-results/             # Test result output
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/)

### 🛠 Installation

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd automation-exercise
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

---

## 🧪 Running Tests

### Run all tests
```sh
npx playwright test
```

### Run a specific test
```sh
npx playwright test tests/<test-file>.spec.ts
```

### View the HTML report
```sh
npx playwright show-report
```

---

## 📂 Folder Descriptions

| Folder | Description |
|--------|-------------|
| `src/pages/` | Contains Page Object Models (POM) for UI abstraction |
| `src/fixtures/` | Shared test setup and teardown fixtures |
| `src/test-data/` | JSON or TS files with test data like user credentials |
| `src/utils/` | Utility functions and custom helpers |
| `tests/` | Actual test specifications |
| `playwright-report/` | Auto-generated HTML test reports |
| `test-results/` | Raw results and traces for failed tests |

---

## 📄 License

This project is for **demonstration and learning purposes only**.