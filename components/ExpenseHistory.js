import React, {useContext} from 'react';
import {
  Text,
  View,
  SectionList,
  SafeAreaView,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import {GlobalContext} from '../contexts/GlobalState';
const ExpenseHistory = (props) => {
  const {transactions} = useContext(GlobalContext);
  const {deleteTransaction} = useContext(GlobalContext);
  return (
    <SafeAreaView
      style={{
        ...styles.container,
        marginHorizontal: props.screen.width / 10,
      }}>
      {transactions.length > 0 ? (
        <SectionList
          sections={[
            {
              title: 'History',
              data: transactions,
            },
          ]}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
            <View
              style={{
                borderRightWidth: props.screen.height / 103,
                borderRightColor: item.amount > 0 ? 'green' : 'red',
                flexDirection: 'row',
                marginTop: props.screen.height / 75,
                backgroundColor: 'white',
                padding: (props.screen.width + props.screen.height) / 199,
              }}>
              <Text
                onLongPress={() => {
                  deleteTransaction(item.id);
                }}
                style={{
                  marginHorizontal: props.screen.width / 23,
                  fontSize: (props.screen.width + props.screen.height) / 75,
                }}>
                {'X        ' + item.title}
              </Text>
              <Text
                style={{
                  color: 'black',
                  marginHorizontal: props.screen.width / 3.5,
                  fontSize: (props.screen.width + props.screen.height) / 75,
                }}>
                {item.amount > 0
                  ? '+ Rs.' + Math.abs(item.amount)
                  : '- Rs.' + Math.abs(item.amount)}
              </Text>
            </View>
          )}
          renderSectionHeader={({section: {title}}) => (
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 7,
                borderBottomColor: 'gray',
              }}>
              <Text
                style={{
                  fontSize: (props.screen.width + props.screen.height) / 50,
                }}>
                {title}
              </Text>
            </View>
          )}
        />
      ) : (
        <></>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ExpenseHistory;
