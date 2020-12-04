import React, {useState, useContext} from 'react';
import {Text, View, TextInput, Button} from 'react-native';
import {GlobalContext} from '../contexts/GlobalState';
const Footer = (props) => {
  const [title, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const {addTransaction} = useContext(GlobalContext);
  return (
    <View
      style={{
        marginBottom: props.screen.height / 25,
        marginHorizontal: props.screen.width / 10,
        marginTop: props.screen.height / 99,
      }}>
      <Text
        style={{
          fontSize: (props.screen.width + props.screen.height) / 50,
          borderBottomColor: 'gray',
          marginTop: props.screen.height / 99,
          marginBottom: props.screen.height / 99,
          borderBottomWidth: 1,
        }}>
        Add New Transaction
      </Text>
      <Text>Text</Text>
      <TextInput
        style={{
          borderColor: 'wheat',
          borderRadius: 3,
          borderWidth: 3,
          marginBottom: props.screen.height / 99,
          backgroundColor: 'white',
        }}
        onChangeText={(title) => {
          setText(title);
        }}
        textContentType="name"
        editable
        textAlignVertical="center"
        textBreakStrategy="highQuality"
        placeholder="Enter Text ..."
        placeholderTextColor="black"
        keyboardAppearance="dark"></TextInput>
      <Text>Amount</Text>
      <TextInput
        style={{
          borderColor: 'wheat',
          borderWidth: 3,
          marginBottom: props.screen.height / 55,
          backgroundColor: 'white',
        }}
        onChangeText={(amount) => {
          setAmount(amount);
        }}
        textContentType="postalCode"
        editable
        textAlignVertical="center"
        textBreakStrategy="highQuality"
        placeholder="Enter Amount ..."
        placeholderTextColor="black"
        keyboardAppearance="dark"></TextInput>
      <Button
        onPress={() =>
          addTransaction({
            id: Math.random(),
            title: title,
            amount: Number(amount),
          })
        }
        title="Add"
      />
    </View>
  );
};
export default Footer;
