import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View >
        <ScrollView >
          <Text style={{color: 'red', textAlign: 'center'}}>
            Planning  Pages
          </Text>
        </ScrollView>
      </View>
    );
  }
}
