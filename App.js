/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './src/reducers/index';
import Header from './src/components/common/header';
import Library from './src/components/Library';
import {styles} from './style/styleSheet';
export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header style={styles.container}title={"Redux"}/>
          <Library />
        </View>
      </Provider> 
    );
  }
}
