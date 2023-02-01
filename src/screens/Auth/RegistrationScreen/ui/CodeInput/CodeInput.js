import React, {
    useCallback,
    useEffect, 
    useMemo, 
    useState 
}                                  from 'react';
import { Text, View}               from 'react-native';
import PropTypes                   from 'prop-types';

import { useThemedStyles }         from '../../../../../hooks/useThemeStyles';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell
}                                 from 'react-native-confirmation-code-field';

import Input                       from '../../../../../components/base/Input';
import AnimatedPress               from '../../../../../components/base/AnimatedPress';
import ROUTE                       from '../../../../../constants/Route';
import PhoneInput                  from 'react-phone-number-input'
import DropDownPicker              from 'react-native-dropdown-picker';

import Styles                      from './styles';

const text = {} 

const MOCK_DATA = []

const CELL_COUNT = 4;

function CodeInput ({ containerStyle, onChange , value }) {
   const { styles } = useThemedStyles(Styles);
   const ref = useBlurOnFulfill({ value, CELL_COUNT });

   const [ codeFieldProps, getCellOnLayout ] = useClearByFocusCell({
       value,
       setValue : onChange
   });

   const renderCell = useCallback(({ index, symbol, isFocused }) => (
    <View
        key      = {index}
        onLayout = {getCellOnLayout(index)}
        style    = {[
            styles.cell,
            // error && styles.cellError,
            // isCorrect && styles.cellSuccess
        ]}
    >
        <Text style = {!symbol && isFocused ? styles.cursor : styles.cellText} >
            {symbol || (isFocused ? <Cursor /> : null)}
        </Text>
    </View>
), []);

   return (
        <View style = {[styles.container,containerStyle]}>
            <Text style={styles.headerTitle}>
               Code
            </Text>
            <CodeField
                {...codeFieldProps}
                autoFocus
                ref          = {ref}
                cellCount    = {CELL_COUNT}
                keyboardType = 'number-pad'
                value        = {value}
                onChangeText = {onChange}
                renderCell   = {renderCell}
            />
       </View>

   )
}
CodeInput.propTypes = {
    containerStyle : PropTypes.object,
    onChange       : PropTypes.func,
    value          : PropTypes.string,
};

CodeInput.defaultProps = {
    containerStyle : {},
    onChange       : () => {},
    value          : ''
};

export default React.memo(CodeInput)