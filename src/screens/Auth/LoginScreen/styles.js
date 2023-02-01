import { StyleSheet } from 'react-native';

export default function styles({ fonts , colors }) {
    return (
        StyleSheet.create({
            container: {
            },
            pageInfoContainer:{
                alignItems : 'center'
            },
            titleInfo: {
                marginTop  : 110,
                lineHeight : fonts.font36,
                fontSize   : fonts.font24
            },
            inputContainer: {
                marginTop : 40
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
