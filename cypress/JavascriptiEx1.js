// Create an array called expenses that contains at least 5 different expense amounts
let expenses = [250, 450, 100, 300, 200];

// Initialize variables to store total, max, and min expenses
let totalExpenses = 0;
let maxExpense = expenses[0];
let minExpense = expenses[0];

// Loop through the expenses array to calculate total, max, and min expenses
for (let i = 0; i < expenses.length; i++) {
    // Add the current expense to the total
    totalExpenses += expenses[i];

    // Check if the current expense is greater than the maxExpense
    if (expenses[i] > maxExpense) {
        maxExpense = expenses[i];
    }

    // Check if the current expense is less than the minExpense
    if (expenses[i] < minExpense) {
        minExpense = expenses[i];
    }
}

// Log the results to the console
console.log("Total Expenses: " + totalExpenses);
console.log("Highest Expense: " + maxExpense);
console.log("Lowest Expense: " + minExpense);