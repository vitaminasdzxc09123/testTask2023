import React, {
    useCallback,
    useEffect, 
    useMemo, 
    useState 
}                                    from 'react';
import { Image, Text, View }         from 'react-native';
import PropTypes                     from 'prop-types';
import * as ImagePicker              from 'expo-image-picker';

import { useThemedStyles }           from '../../hooks/useThemeStyles';

import Input                         from '../../components/base/Input';
import ScreenWrapper                 from '../../components/ui/ScreenWrapper';
import AnimatedPress                 from '../../components/base/AnimatedPress';
import Button                        from '../../components/base/Button/Button';
import ROUTE                         from '../../constants/Route';

import { useEditProfileConstructor } from './hook/useEditProfileConstructor';
import { INPUT }                     from './constants';
import { useAuthState }              from '../../context/Auth';

import Styles                        from './styles';

// import { openDatabase } from 'expo-sqlite';

const text = {
   email : {
       placeholder : 'Email' ,
       title       : 'Your Email'
   },
   password : {
       placeholder : 'Pssword',
       title       : 'Your Pssword'
   },
   button: 'Save'
} 

function EditProfileScreen ({ navigation }) {
   const { styles } = useThemedStyles(Styles);

   const { setToken } = useAuthState();  

   const [ localStateParams, setLocalStateParams] = useState({
        name     : '',
        email    : '',
        phone    : '',
        position : '',
        skype    : '',
})
const [ imageData, setImageData ] = useState(null);

const handleOpenLibrary = useCallback( async () => {

  const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
  });

  if (!result.canceled) {
    setImageData(result.assets[0].uri);
  }
}, []);

   const handleUpdateParams = useCallback((key, value) => {
       setLocalStateParams(oldRequestParams => ({
          ...oldRequestParams,
          [key] : value
       }));
   }, [ localStateParams ]);

   const handleOpenProfile = useCallback(() => {
         setToken('')
   }, []);

   const editProfileBlock = useEditProfileConstructor({ localStateParams, handleUpdateParams });
 
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
     default: return null;
 }
}, [ localStateParams , editProfileBlock ]);
   
const renderEditProfileSection = useCallback(() => {
    return (
        <>
            { editProfileBlock?.rows.map((item) => {
                if (item.isHidden) return <></>;

                return (
                    <View key = {item.id}>
                        {renderItem(item)}
                    </View>
                );
            })}
        </>
    );
}, [ localStateParams , editProfileBlock ]);

   return (
       <ScreenWrapper
           useBottomInset 
           containerStyle = {styles.container}
       >
        <AnimatedPress 
            onPress = {handleOpenLibrary}
            style   = {styles.imageProfileContainer}
        >
        {Boolean(imageData) ? 
         <Image 
            style      = {styles.imageUser}
            resizeMode = 'cover'
            source     = {{ uri: imageData }}
         />
         :
         <View style = {styles.selectedContainer}>
            <Text style = {styles.selectImageTilte}>
                Select
            </Text>  
        </View>       
         }
        </AnimatedPress>
        {renderEditProfileSection()}
        <Button
                onPress = {handleOpenProfile}
                title   = {text.button}
                style   = {styles.bottomButton}
             />
       </ScreenWrapper>
   )
}
EditProfileScreen.propTypes = {
   navigation : PropTypes.object.isRequired
};

export default React.memo(EditProfileScreen)