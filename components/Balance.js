import React, {useContext} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GlobalContext} from '../contexts/GlobalState';
const Balance = (props) => {
  const {transactions} = useContext(GlobalContext);
  var total = 0;
  var expense = 0;
  transactions.map((d) => {
    total += d.amount;
    d.amount < 0 ? (expense += Math.abs(d.amount)) : '';
  });
  total - expense;
  return (
    <View
      style={{
        ...styles.mainView,
        width: props.screen.width / 1.3,
        marginTop: props.screen.height / 33,
        marginLeft: props.screen.width / 10,
        paddingBottom: props.screen.height / 33,
      }}>
      <Text
        style={{
          textAlign: 'left',
          color: 'black',
          marginTop: props.screen.height / 27,
          fontSize: (props.screen.height + props.screen.width) / 55,
        }}>
        Your Balance
      </Text>
      <Text
        style={{
          textAlign: 'left',
          color: 'black',
          marginTop: props.screen.height / 99,
          fontSize: (props.screen.height + props.screen.width) / 55,
          fontWeight: 'bold',
        }}>
        $ {total}
      </Text>
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

export default Balance;
