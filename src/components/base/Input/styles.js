import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                width : '100%'
            },
            content : {
                width             : '100%',
                height            : 58,
                alignItems        : 'center',
                justifyContent    : 'center',
                backgroundColor   : 'transparent',
                borderColor       : colors.BORDER_INPUT
            },
            titleContainer : {
                marginBottom  : 5,
                flexDirection : 'row'
            },
            title : {
                fontSize   : fonts.font14,
                lineHeight : fonts.font21,
                ...fonts.medium
            },
            placeholder : {
                position : 'absolute',
                left     : 10,
                zIndex   : 1,
                color    : colors.TEXT_GRAY
            },
            inputContainer : {
                flexDirection  : 'row',
                alignItems     : 'center',
                justifyContent : 'center'
            },
            input : {
                flex     : 1,
                color    : colors.BLACK,
                fontSize : fonts.font14,
                ...fonts.regular
            },
            isRequiredSymbol : {
                color : colors.ERROR
            },
            error : {
                borderColor : colors.INPUT_BORDER_ERROR
            },
            errorContainer : {
                marginTop : 6
            },
            errorText : {
                marginTop         : 8,
                paddingHorizontal : 16,
                color             : colors.TEXT_ERROR,
                fontSize          : 12,
                ...fonts.medium
            }
        })
    );
}
