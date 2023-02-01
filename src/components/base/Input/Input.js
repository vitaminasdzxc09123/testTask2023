import React, {
    useCallback,
    useRef
}                          from 'react';
import {
    TextInput,
    Pressable,
    View,
    Text
}                          from 'react-native';
import PropTypes           from 'prop-types';

import { useThemedStyles } from '../../../hooks/useThemeStyles';
import TextError           from '../../ui/TextError/TextError';

import AnimatedPress       from '../AnimatedPress';
import Styles              from './styles';

function Input({
    title,
    rightContent,
    value,
    disabled,
    onChange,
    containerStyle,
    error,
    extraData,
    handleChangeVisible,
    errorText,
    placeholder,
    isRequired,
    style,
    ...props
}) {
    const { styles } = useThemedStyles(Styles);

    const inputRef = useRef(null);

    const handleInputPress = useCallback(() => {
        if (inputRef.current) inputRef.current.focus();
    }, []);

    return (
        <View style = {[ styles.container, containerStyle ]}>
            {Boolean(title) &&
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>
                        {title}
                        {
                            Boolean(isRequired) &&
                            <Text style = {styles.isRequiredSymbol}>
                                *
                            </Text>
                        }
                    </Text>
                </View>
            }
            <Pressable
                onPress = {handleInputPress}
                style   = {[ styles.content ]}
            >
                <View style = {styles.inputContainer}>
                    <TextInput
                        placeholderTextColor = {'gray'}
                        editable             = {!disabled}
                        ref                  = {inputRef}
                        style                = {[ styles.input, style ]}
                        value                = {value}
                        placeholder          = {placeholder}
                        onChangeText         = {onChange}
                        {...props}
                        {...extraData}
                    />
                    {Boolean(rightContent) &&
                        <AnimatedPress onPress = {handleChangeVisible}>
                            {rightContent}
                        </AnimatedPress>
                    }
                </View>
            </Pressable>
            {Boolean(error) ? <TextError error = {errorText} style = {styles.errorText} /> : null}
        </View>
    );
}

Input.propTypes = {
    extraData            : PropTypes.object,
    isRequired           : PropTypes.bool,
    disabled             : PropTypes.bool,
    title                : PropTypes.string,
    value                : PropTypes.string,
    onChange             : PropTypes.func,
    rightContent         : PropTypes.node,
    onFocus              : PropTypes.func,
    error                : PropTypes.bool,
    errorText            : PropTypes.string,
    handleChangeVisible  : PropTypes.func,
    placeholder          : PropTypes.string,
    style                : PropTypes.object,
    useFooter            : PropTypes.bool,
    containerStyle       : PropTypes.object,
    useActivePlaceholder : PropTypes.bool
};

Input.defaultProps = {
    extraData            : {},
    isRequired           : false,
    value                : '',
    disabled             : false,
    handleChangeVisible  : () => {},
    rightContent         : null,
    title                : '',
    style                : {},
    containerStyle       : {},
    onChange             : null,
    onFocus              : null,
    useFooter            : false,
    error                : false,
    errorText            : null,
    placeholder          : null,
    useActivePlaceholder : true
};


export default React.memo(Input);
