import React                     from 'react';
import { createStackNavigator }  from '@react-navigation/stack';

import ROUTES                    from '../../constants/Route';

import EditProfileScreen         from '../../screens/EditProfileScreen';
import ProfileScreen             from '../../screens/ProfileScreen';

const AuthStack = createStackNavigator();

function AuthStackScreen() {
    return (
        <AuthStack.Navigator
            detachInactiveScreens = {false}
            screenOptions         = {{ headerShown : false }}
        >
            <AuthStack.Screen
                name      = {ROUTES.PROFILE_EDIT_SCREEN}
                component = {EditProfileScreen}
            />
            <AuthStack.Screen
                name      = {ROUTES.PROFILE_SCREEN}
                component = {ProfileScreen}
            />
        </AuthStack.Navigator>
    );
}

export default React.memo(AuthStackScreen);
