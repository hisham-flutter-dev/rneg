/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  BackHandler,
  Dimensions,
  Text,
  SectionList,
  StatusBar,
  Button,
} from 'react-native';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import ExpenseHistory from './components/ExpenseHistory';
import Footer from './components/Footer';
import GlobalProvider from './contexts/GlobalState';
const screen = Dimensions.get('screen');

const App = (props) => {
  BackHandler.addEventListener('hardwareBackPress', function () {
    if (this.navigator && this.navigator.getCurrentRoutes().length > 1) {
      this.navigator.pop();
      return true;
    }
    console.log('Ok');

    return false;
  });

  return (
    <GlobalProvider>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.body}>
        <StatusBar
          barStyle="dark-content"
          animated="true"
          translucent
          sectionTitle="ABC"
          color="blue"
          showHideTransition="slide"
          networkActivityIndicatorVisible="true"
        />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header screen={screen.height} />
            <Balance screen={screen} />
            <IncomeExpense screen={screen} />
            <ExpenseHistory screen={screen} />
            <Footer screen={screen} />
          </ScrollView>
        </SafeAreaView>
      </ScrollView>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'silver',
  },
  statbar: {
    backgroundColor: 'red',
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: 'silver',
    textAlignVertical: 'center',
    height: screen.height,
    width: screen.width,
  },
  sectionContainer: {
    marginTop: screen.height / 13,
    paddingHorizontal: screen.width / 13,
  },
  sectionTitle: {
    fontSize: (screen.width + screen.height) / 37,
    fontWeight: '600',
    color: 'black',
  },
  sectionDescription: {
    marginTop: screen.height / 55,
    fontSize: (screen.width + screen.height) / 55,
    fontWeight: '400',
    color: 'yellow',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: 'green',
    fontSize: (screen.width + screen.height) / 75,
    fontWeight: '600',
    padding: (screen.width + screen.height) / 55,
    paddingRight: screen.width / 3,
    textAlign: 'center',
  },
});

export default App;
