import React               from 'react';
import PropTypes           from 'prop-types';
import { Text, View }      from 'react-native';

import {
    buttonTypes,
    buttonThemes,
    buttonSizes
}                          from '../../../theme/constants';
import AnimatedPress       from '../AnimatedPress';
import Loader              from '../Loader';

import { useThemedStyles } from '../../../hooks/useThemeStyles';

import { colors }          from '../../../theme';
import { useButtonTheme }  from './hooks/useButtonTheme';

import Styles              from './styles';

function Button({
    title,
    type,
    theme,
    size,
    onPress,
    style,
    titleStyle,
    disabled,
    isLoading,
    loadingText,
    loadingColor,
    bgColor,
    icon,
    ...props
}) {
    const { styles } = useThemedStyles(Styles);

    const { backgroundColor, textColor } = useButtonTheme({ type, theme });

    const buttonStyleBySize = {
        [buttonSizes.SMALL]  : styles.buttonSm,
        [buttonSizes.MEDIUM] : styles.buttonMd,
        [buttonSizes.LARGE]  : styles.buttonLg
    };

    const textStyleBySize = {
        [buttonSizes.SMALL]  : styles.titleSm,
        [buttonSizes.MEDIUM] : styles.titleMd,
        [buttonSizes.LARGE]  : styles.titleLg
    };

    const buttonStyles = {
        backgroundColor : bgColor ?? backgroundColor,
        ...(buttonStyleBySize[size] || styles.buttonLg)
    };

    const textStyles = {
        color : textColor,
        ...(textStyleBySize[size] || styles.textLg)
    };

    return (
        <AnimatedPress
            disabled       = {isLoading || disabled}
            onPress        = {!disabled ? onPress : null}
            containerStyle = {style}
            {...props}
        >
            <View style = {[ styles.container, buttonStyles ]}>
                {isLoading ?
                    <Loader
                        size  = 'small'
                        style = {styles.leftIcon}
                        color = {loadingColor ?? colors.WHITE}
                    />
                    :
                    <View style = {styles.content}>
                        <Text style = {[ textStyles, titleStyle ]}>
                            {Boolean(isLoading) && loadingText ? `${loadingText}...` : title}
                        </Text>
                        {
                            Boolean(icon) && icon
                        }
                    </View>
                }
            </View>
        </AnimatedPress>
    );
}

Button.propTypes = {
    icon         : PropTypes.func,
    rightIcon    : PropTypes.func,
    title        : PropTypes.string.isRequired,
    onPress      : PropTypes.func.isRequired,
    style        : PropTypes.object,
    titleStyle   : PropTypes.object,
    type         : PropTypes.string,
    theme        : PropTypes.string,
    size         : PropTypes.string,
    loadingText  : PropTypes.string,
    blurType     : PropTypes.string,
    disabled     : PropTypes.bool,
    isLoading    : PropTypes.bool,
    useArrow     : PropTypes.bool,
    bgColor      : PropTypes.string,
    loadingColor : PropTypes.string
};

Button.defaultProps = {
    icon         : null,
    rightIcon    : null,
    blurType     : null,
    style        : {},
    titleStyle   : {},
    type         : buttonTypes.DEFAULT,
    theme        : buttonThemes.DEFAULT,
    size         : buttonSizes.LARGE,
    loadingText  : null,
    disabled     : false,
    isLoading    : false,
    useArrow     : false,
    bgColor      : null,
    loadingColor : null
};

export default React.memo(Button);
