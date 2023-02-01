import React, {
     useCallback,
     useEffect, 
     useMemo, 
     useState 
}                                  from 'react';
import { Text, View}               from 'react-native';
import PropTypes                   from 'prop-types';

import { useThemedStyles }         from '../../../hooks/useThemeStyles';
import LogoIcon                    from '../../../assets/icons/LogoIcon'

import Input                       from '../../../components/base/Input';
import ScreenWrapper               from '../../../components/ui/ScreenWrapper/ScreenWrapper';
import AnimatedPress               from '../../../components/base/AnimatedPress';
import Button                      from '../../../components/base/Button/Button';
import ROUTE                       from '../../../constants/Route';
import { openDatabase } from "expo-sqlite";

import Styles                      from './styles';
import { useAuthState } from '../../../context/Auth';

const text = {
    email : {
        placeholder : 'Email' ,
        title       : 'Your Email'
    },
    password : {
        placeholder : 'Pssword',
        title       : 'Your Pssword'
    },
    button: 'Log in'
} 

const MOCK_TOKEN = 'djkwdi23dio2doi2doi23oidio32dio34dio3'

function HomeScreen ({ navigation }) {
    const { styles } = useThemedStyles(Styles);
    const [ email, setEmail] = useState('')
    const [ password, setPassword] = useState('')

    const { setToken } = useAuthState();  

    const handleSignIn = useCallback((item) => {
        setToken(MOCK_TOKEN)
  }, []);
    const handleChangeEmail = useCallback((item) => {
        setEmail(item);
    }, [ email ]);

    const handleChangePassword = useCallback((item) => {
        setPassword(item);
    }, [ email ]);

    const handleOpenSignIn = useCallback((item) => {
        navigation.navigate(ROUTE.REGISTRATION_SCREEN)
    }, [ ]);

    const renderInfoScreen = useCallback(() => {
        return (
            <View style = {styles.pageInfoContainer}>
              <LogoIcon/>
                  <Text style = {styles.titleInfo}>
                   Log in to woorkroom
                  </Text>
            </View>
        );
    }, []);

    const renderBottom = useCallback(() => {
        return (
         <>
           <AnimatedPress style = {styles.forgotPasswordContainer}>
                <Text style = {styles.forgotPasswordTitle}>
                    Forgot password?
                </Text>
            </AnimatedPress>
            <Button
                 onPress = {handleSignIn}
                 title   = {text.button}
                 style   = {styles.bottomButton}
              />
              <View style = {styles.newAccountContainer}>
                  <Text>
                      New User?
                   </Text>
              <AnimatedPress onPress = {handleOpenSignIn}>
                   <Text style = {styles.createAccountTitle}>
                        Create Account
                   </Text>
              </AnimatedPress>
              </View>
         </>
        ); 
    }, []);

    return (
        <ScreenWrapper
            containerStyle = {styles.container}
        >
          {renderInfoScreen()}
          <Input
                 containerStyle = {styles.inputContainer}
                 style          = {styles.inputContent}
                 value          = {email}
                 title          = {text.email.title}
                 placeholder    = {text.email.placeholder}
                 onChange       = {handleChangeEmail}
                 keyboardType   = 'email-address'
                 autoCapitalize = 'none'
                //  error          = {Boolean(validationError)}
                //  errorText      = {validationError}
                />
         <Input
                 containerStyle = {styles.inputContainer}
                 style          = {styles.inputContent}
                 value          = {password}
                 title          = {text.password.title}
                 placeholder    = {text.password.placeholder}
                 onChange       = {handleChangePassword}
                 autoCapitalize = 'none'
                //  error          = {Boolean(validationError)}
                //  errorText      = {validationError}
                />
            {renderBottom()}
        </ScreenWrapper>
    )
}
HomeScreen.propTypes = {
    navigation : PropTypes.object.isRequired
};

export default React.memo(HomeScreen)