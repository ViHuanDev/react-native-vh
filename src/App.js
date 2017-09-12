import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import {HomeStack} from './Route';
export default class App extends Component {
  render() {
    return (
      		<HomeStack />
    );
  }
}
const styles = StyleSheet.create({
});
