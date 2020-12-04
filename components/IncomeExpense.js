import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalContext} from '../contexts/GlobalState';

const IncomeExpense = (props) => {
  const {transactions} = useContext(GlobalContext);
  var expense = 0;
  var income = 0;
  transactions.map((d) => {
    d.amount > 0 ? (income += d.amount) : '';
    d.amount < 0 ? (expense += Math.abs(d.amount)) : '';
  });
  return (
    <View
      style={{
        ...styles.mainView,
        width: props.screen.width / 1.3,
        marginTop: props.screen.height / 55,
        marginLeft: props.screen.width / 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          padding: props.screen.height / 37,
          borderRightWidth: 1.5,
          borderRightColor: 'silver',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: (props.screen.height + props.screen.width) / 55,
          }}>
          Income
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'green',
            marginTop: props.screen.height / 99,
            fontSize: (props.screen.height + props.screen.width) / 55,
            fontWeight: 'bold',
          }}>
          $ {income}
        </Text>
      </View>
      <View
        style={{
          padding: props.screen.height / 37,
          borderLeftWidth: 1.5,
          borderLeftColor: 'grey',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: (props.screen.height + props.screen.width) / 55,
          }}>
          Expense
        </Text>
        <Text
          style={{
            textAlign: 'center',
            color: 'red',
            marginTop: props.screen.height / 99,
            fontSize: (props.screen.height + props.screen.width) / 55,
            fontWeight: 'bold',
          }}>
          ${expense}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'white',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 33,
    opacity: 0.75,
    flexWrap: 'wrap',
  },
});
export default IncomeExpense;
