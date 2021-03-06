export const LOGIN = 'LOGIN';
export const CURRENCIES = 'CURRENCIES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_TOTAL_EXPENSE = 'UPDATE_TOTAL_EXPENSE';
export const EDIT_EXPENSE = 'EDIT_EXPENSE';

export const doLogin = (email) => ({
  type: LOGIN,
  email,
});

export const getCurrencies = (currencies) => ({
  type: CURRENCIES,
  currencies,
});

export const addExpense = (expense) => ({
  type: ADD_EXPENSE,
  expense,
});

export const updateTotal = (value) => ({
  type: UPDATE_TOTAL_EXPENSE,
  value,
});

export const deleteExpense = (id) => ({
  type: DELETE_EXPENSE,
  id,
});

export const editExpense = (expense) => ({
  type: EDIT_EXPENSE,
  id: expense.id,
  expense,
});
