import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import { connect } from 'react-redux';

import Login from './screens/Login';
import Signup from './screens/SignUp';
import SideDrawer from './navigation/SideNavigation';
import Layout from './components/Layout';

class Routes extends Component {
	render() {
        const unLoggedRoutes = (
        <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Login} title="Login" initial={true}/>
            <Scene key="signup" component={Signup} title="Register"/>
        </Stack> );

        const loggedRoutes = (
            <Stack key="root" hideNavBar={true}>
            <Scene key="login" component={Layout} />
            <Scene key="signup" component={Layout} />
        </Stack> );

		return(
			<Router>
			     {this.props.isUserLogged ? loggedRoutes : unLoggedRoutes}
			 </Router>
			)
	}
}

const mapStateToProps = state => {
    return {
        isUserLogged: state.user.isUserLogged
    }
}

export default connect(mapStateToProps)(Routes);