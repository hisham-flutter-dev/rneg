import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [
    {id: 1, title: 'Cash', amount: 324},
    {id: 2, title: 'Book', amount: -67},
    {id: 3, title: 'Table', amount: -34},
    {id: 4, title: 'Cash', amount: 21},
    {id: 5, title: 'Cash', amount: 11},
    {id: 6, title: 'Cash', amount: 44},
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  function deleteTransaction(id) {
    dispatch({type: 'DELETE_TRANSACTION', payload: id});
  }

  function addTransaction(transaction) {
    dispatch({type: 'ADD_TRANSACTION', payload: transaction});
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
