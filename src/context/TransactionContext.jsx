import React, { createContext, useReducer, useEffect } from 'react';

const initialState = JSON.parse(localStorage.getItem('expenseTrackerData')) || [];

function transactionReducer(state, action) {
  switch (action.type) {
    case 'ADD_TRANSACTION':
      return [
        {
          ...action.payload,
          id: Date.now(),
        },
        ...state,
      ];

    case 'DELETE_TRANSACTION':
      return state.filter(item => item.id !== action.payload);

    case 'EDIT_TRANSACTION':
      return state.map(item => (item.id === action.payload.id ? { ...item, ...action.payload.updatedData } : item));

    default:
      return state;
  }
}

export const TransactionContext = createContext();

export function TransactionProvider({ children }) {
  const [state, dispatch] = useReducer(transactionReducer, initialState);

  useEffect(() => {
    localStorage.setItem('expenseTrackerData', JSON.stringify(state));
  }, [state]);

  return <TransactionContext.Provider value={{ state, dispatch }}>{children}</TransactionContext.Provider>;
}
