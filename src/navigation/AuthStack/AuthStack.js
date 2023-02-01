import React                     from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

import LoginScreen               from '../../screens/Auth/LoginScreen';

import ROUTES                    from '../../constants/Route';
import RegistrationScreen        from '../../screens/Auth/RegistrationScreen';

const AuthStack = createStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator
            detachInactiveScreens = {false}
            screenOptions         = {{ headerShown : false }}
        >
            <AuthStack.Screen
                options   = {{ gestureEnabled : false }}
                name      = {ROUTES.LOGIN_SCREEN}
                component = {LoginScreen}
            />
            <AuthStack.Screen
                options   = {{ gestureEnabled : false }}
                name      = {ROUTES.REGISTRATION_SCREEN}
                component = {RegistrationScreen}
            />
        </AuthStack.Navigator>
    );
}

export default React.memo(AuthStackScreen);
