<script setup>
import { reactive } from 'vue';
import logger from "../utils/logger.js";


// Reactive state for form data and history
const formdata = reactive({
  description: '',
  amount: 0,
  type: '',
  balance: 0,
});

const history = reactive([]);

// Method for adding transaction and logging it
const addTransaction = () => {
  const { description, amount, type } = formdata;

  if (type === 'income') {
    formdata.balance += amount;
  } else {
    formdata.balance -= amount;
  }

  history.push({ description, amount, type, balance: formdata.balance });

  // Reset form data
  formdata.description = '';
  formdata.amount = 0;
  formdata.type = '';

  // Log the expense action
  addExpense();
};

// Method for logging expense
const addExpense = () => {
  logger.info("User clicked Add Expense button.");
  try {
    // Simulate adding an expense
    throw new Error("Failed to save expense.");
  } catch (error) {
    logger.error(`Error occurred: ${error.message}`);
  }
};
</script>


<template>
  <div id="app" class="app">
    <h1>Budget Tracker</h1>
    <form @submit.prevent="addTransaction">
      <input v-model="formdata.description" type="text" placeholder="Description" required>
      <input v-model.number="formdata.amount" type="number" placeholder="Amount" required>
      <select v-model="formdata.type">
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <span v-for="trns, index in history" :key="index">
      <div :class="trns.type === 'income' ? 'txt-green' : 'txt-red'">
        {{ trns.description }}: {{ trns.type === 'income' ? '+' : '-' }}${{ trns.amount }}
      </div>
      <br>
    </span>

    <div class="total">
      Total Balance: ${{ formdata.balance }}
    </div>
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
}

.app {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input,
select,
button {
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 5px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.total {
  text-align: center;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}

.txt-green {
  color: green;
}

.txt-red {
  color: red;
}
</style>
