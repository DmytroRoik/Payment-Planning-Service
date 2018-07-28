import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import AppNavigator from '../navigation/AppNavigator';

class Layout extends React.Component {
    constructor(props){
        super(props);
    }
  render() {
      return (
          <View style={styles.container}>
            <View>
                {/* can be header */}
            </View>
            {this.props.isUserLogged && <AppNavigator />}
          </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  

const mapStateToProps = state => {
    return {
        isUserLogged: state.user.isUserLogged
    }
}

export default connect(mapStateToProps)(Layout);