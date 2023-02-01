import React, {
    useCallback,
    useEffect, 
    useMemo, 
    useState 
}                                  from 'react';
import { Text, View}               from 'react-native';
import PropTypes                   from 'prop-types';

import { useThemedStyles }         from '../../../../../hooks/useThemeStyles';

import Input                       from '../../../../../components/base/Input';
import AnimatedPress               from '../../../../../components/base/AnimatedPress';
import ROUTE                       from '../../../../../constants/Route';
import PhoneInput                  from 'react-phone-number-input'
import DropDownPicker              from 'react-native-dropdown-picker';

import Styles                      from './styles';

const text = {} 

const MOCK_DATA = [
    {label: '+38', value: '1'},
    {label: '+48', value: '2'}
]

function PhoneNumberInput ({ containerStyle,onChange , value}) {
   const { styles } = useThemedStyles(Styles);

   const [open, setOpen] = useState(false);
   const [valueCodNumber, setValueCodNumber] = useState(null);
   const [itemCode, setItemCode] = useState(MOCK_DATA);

   return (
        <View style = {[styles.container,containerStyle]}>
         <DropDownPicker
              containerStyle         = {styles.codPickerContainer}
              dropDownContainerStyle = {styles.dropDownContent}
              style                  = {styles.dropDownContent}
              open                   = {open}
              value                  = {valueCodNumber}
              placeholder            = {'+1'}
              items                  = {itemCode}
              setOpen                = {setOpen}
              setValue               = {setValueCodNumber}
              setItems               = {setItemCode}
    />
           <Input 
             placeholder    = {'phone'}
             keyboardType   = {'numeric'}
             style          = {styles.input}
             containerStyle = {styles.inputContainer}
             onChange       = {onChange}
             value          = {value}
             />
       </View>

   )
}
PhoneNumberInput.propTypes = {
    containerStyle : PropTypes.object,
    onChange       : PropTypes.func,
    value          : PropTypes.string,
};

PhoneNumberInput.defaultProps = {
    containerStyle : {},
    onChange       : () => {},
    value          : ''
};

export default React.memo(PhoneNumberInput)