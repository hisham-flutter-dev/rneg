import React from 'react';
import {Text, View} from 'react-native';
const Header = (props) => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          marginTop: props.screen / 17,
          fontSize: props.screen / 31,
        }}>
        Expense Tracker
      </Text>
    </View>
  );
};
export default Header;
