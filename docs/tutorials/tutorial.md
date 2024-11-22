# Tutorial for Budget Tracker Project

**Project Name:** Budget Tracker

## **1. Introduction**

The Budget Tracker application allows you to manage your income and expenses, helping you maintain a balanced budget. This tutorial will guide you through setting up the project and using the main features.

## 2. Project Setup

**Prerequisites**

Ensure you have Node.js and npm installed on your machine. You can check by running:

```bash
node -v
npm -v
```

**Clone the Repository**

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/budget-tracker.git
cd budget-tracker
```

**Install Dependencies**

Once inside the project directory, install the required dependencies:

```bash
npm install
```

This will install Vue, Jest for testing, and other necessary packages.

## 3. Project Structure

The project consists of the following main directories:

- src/: Contains the main source code of the application.
- tests/: Contains unit tests for the application.
- docs/: Contains documentation, including this tutorial.

The main Vue component is located in:

- src/views/main_app.vue

## 4. Running the Application

After installing the dependencies, you can start the development server by running:

```bash
npm run dev
```

This will launch the application on http://localhost:3000. Open this URL in your browser to view the Budget Tracker application.

## 5. Using the Budget Tracker

Once the app is running, you can use the following features:
**Adding Income/Expense**

1. Enter a description for your transaction (e.g., "Salary", "Groceries").
2. Enter the amount.
3. Choose the transaction type:

- **Income:** Adds to your balance.
- **Expense:** Deducts from your balance.

4. Click the "Add" button to record the transaction.

**Viewing Transaction History**

The transaction history will display below the form:

- Green text for income transactions.
- Red text for expense transactions.
- The total balance is updated automatically.

## 6. Running Tests

To ensure the application works as expected, you can run the unit tests:

```bash
npm run test
```

This will run Jest and check for any issues in the application’s functionality.

## 7. Conclusion

This project allows you to efficiently track your budget by adding income and expense transactions. You can expand the application by adding more features, such as monthly reports, or improving the user interface. Feel free to explore the source code and contribute improvements!
