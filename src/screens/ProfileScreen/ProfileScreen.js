import React, {
    useCallback,
    useEffect, 
    useMemo, 
    useState 
}                                      from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import PropTypes                       from 'prop-types';

import { useThemedStyles }             from '../../hooks/useThemeStyles';

import Input                           from '../../components/base/Input';
import ScreenWrapper                   from '../../components/ui/ScreenWrapper';
import Button                          from '../../components/base/Button/Button';
import ROUTE                           from '../../constants/Route';

import Styles                          from './styles';
// import { openDatabase }              from 'expo-sqlite';

const text = {} 

function EditProfileScreen ({ navigation }) {
   const { styles } = useThemedStyles(Styles);
    
//    const renderItem = useCallback(({ item }) => {
//      return (
//         <View>
//             <Text style={{color:'red'}}>
//                 {item?.data?.name}
//             </Text>
//         </View>
//       )
//      }, [userData]);

   return (
       <ScreenWrapper
           containerStyle = {styles.container}
       >
        {/* <FlatList
            renderItem = {renderItem}
            data       = {userData}
        /> */}
        <Button
            title = {text.button}
            style = {styles.bottomButton}
        />
       </ScreenWrapper>
   )
}
EditProfileScreen.propTypes = {
   navigation : PropTypes.object.isRequired
};

export default React.memo(EditProfileScreen)