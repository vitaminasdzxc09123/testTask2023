import { StyleSheet } from 'react-native';

export default function styles({ fonts , colors }) {
    return (
        StyleSheet.create({
            pageInfoContainer:{
                alignItems : 'center'
            },
            titleInfo: {
                marginTop  : 110,
                lineHeight : fonts.font36,
                fontSize   : fonts.font24
            },
            phoneNumberContainer: {
              zIndex    : 100,
              marginTop : 12
            },
            inputContainer: {
                marginTop : 30
            },
            codeConfirm: {
                zIndex    : 0,
                marginTop : 12
            },
            inputContent: {
                paddingVertical   : 12,
                borderColor       : colors.BORDER,
                borderBottomWidth : 1
            },
            forgotPasswordContainer: {
                alignSelf : 'flex-end'
            },
            forgotPasswordTitle: {
                color : colors.ACCENT_SECOND
            },
            bottomButton: {
                marginTop : 50
            },
            newAccountContainer: { 
                marginTop      : 35,
                alignItems     : 'center',
                flexDirection  : 'row',
                justifyContent : 'center'
            },
            createAccountTitle: {
                marginLeft  : 5,
                color       : colors.ACCENT,
            },
        })
    );
}
