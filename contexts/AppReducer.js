export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id != action.payload,
        ),
      };
    case 'ADD_TRANSACTION':
      state.transactions.push(action.payload);
      console.log(state.transactions);
      return {...state, transactions: state.transactions};
    default:
      return state;
  }
};
