import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class LinksScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text>
        Links Page
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
