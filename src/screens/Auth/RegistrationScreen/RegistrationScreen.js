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

import Styles                      from './styles';
import PhoneNumberInput            from './ui/PhoneNumberInput';
import CodeInput                   from './ui/CodeInput';
import { useSignUpConstructor }    from './hook/useSignUpConstructor';
import { 
    CONFIRM_CODE,
    INPUT,
    PHONE_NUMBER
}                                  from './constants';
import { useAuthState } from '../../../context/Auth';
import { openDatabase } from 'expo-sqlite';

const text = {
   email : {
       placeholder : 'Email' ,
       title       : 'Your Email'
   },
   password : {
       placeholder : 'Pssword',
       title       : 'Your Pssword'
   },
   button: 'Sign Up'
} 
const MOCK_TOKEN = 'djkwdi23dio2doi2doi23oidio32dio34dio3'

function RegistrationScreen ({ navigation }) {
   const { styles } = useThemedStyles(Styles);
   const [ email, setEmail] = useState('')
   const [ password, setPassword] = useState('')

   const [ phoneNumber, setPhoneNumber] = useState('')
   const [ confirmCode, setConfirmCode] = useState('')

   const [ localStateParams, setLocalStateParams] = useState({
        phoneNumber     : '',
        confirmCode     : '',
        name            : '',
        email           : '',
        password        : '',
        confirmPassword : ''
   })

   const { setToken } = useAuthState();  

   const handleUpdateParams = useCallback((key, value) => {
      setLocalStateParams(oldRequestParams => ({
            ...oldRequestParams,
            [key] : value
         }));
     }, [ localStateParams ]);

   const signUpBlock = useSignUpConstructor({ localStateParams, handleUpdateParams });

   const handleSignUp = useCallback((item) => {
         setToken(MOCK_TOKEN)
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
                onPress = {handleSignUp}
                title   = {text.button}
                style   = {styles.bottomButton}
             />
             <View style = {styles.newAccountContainer}>
                 <Text>
                     New User?
                  </Text>
               <AnimatedPress>
                  <Text style = {styles.createAccountTitle}>
                       Create Account
                  </Text>
               </AnimatedPress>
            </View>
        </>
       ); 
   }, []);

   const renderItem = useCallback((item) => {
       switch (item.type) {
           case INPUT:
               return (
                <Input
                   containerStyle = {styles.inputContainer}
                   style          = {styles.inputContent}
                   {...item}
                  />
               );
           case PHONE_NUMBER:
               return (
              <PhoneNumberInput
                  containerStyle = {styles.phoneNumberContainer}
                  {...item}
                  />
                );
            case CONFIRM_CODE:
                return (
              <CodeInput
                  containerStyle = {styles.codeConfirm}
                  onChange       = {setConfirmCode}
                  value          = {confirmCode}
                  {...item}
                    />
                     );
        default: return null;
    }
   }, [ localStateParams , signUpBlock ]);


   const renderPersonalSection = useCallback(() => {
    return (
        <>
            {signUpBlock?.rows.map((item) => {
                if (item.isHidden) return <></>;

                return (
                    <View 
                      style = {item.zIndex && { zIndex : item.zIndex  }} 
                      key   = {item.id}>
                        {renderItem(item)}
                    </View>
                );
            })}
        </>
    );
}, [localStateParams,signUpBlock]);


   return (
        <ScreenWrapper
              style = {styles.container}
              useBottomInset
            >
           <View style = {styles.pageInfoContainer}>
             <LogoIcon/>
                 <Text style = {styles.titleInfo}>
                       Sign Up To woorkroom
                 </Text>
           </View>
           {renderPersonalSection()}
           {renderBottom()}
       </ScreenWrapper>
   )
}
RegistrationScreen.propTypes = {
   navigation : PropTypes.object.isRequired
};

export default React.memo(RegistrationScreen)