import React, {
    useMemo,
    useState,
    useEffect
}                                     from 'react';

import { NavigationContainer }        from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ROUTES                         from '../constants/Route';
import { useAuthState }               from '../context/Auth';
import MainStack                      from './MainStack';
import AuthStack                      from './AuthStack';

const StackNavigation = createNativeStackNavigator();

const screenOptions = {
    headerShown    : false,
    gestureEnabled : false
};

function Navigation() {
    const [ navigationState, setNavigationState ] = useState({});
    const { token } = useAuthState();

    const stack = useMemo(() => {
        if(!Boolean(token)) {
            return (
                <StackNavigation.Screen
                    name      = {ROUTES.AUTH_STACK}
                    component = {AuthStack}
                    options   = {screenOptions}
                />
            );
            }
        return (
            <StackNavigation.Screen
                name      = {ROUTES.MAIN_STACK}
                component = {MainStack}
                options   = {screenOptions}
            />
        );
    }, [token]);

    return (
        <NavigationContainer>
            <StackNavigation.Navigator>
                {stack}
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

export { Navigation };
