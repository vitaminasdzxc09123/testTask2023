import { StyleSheet } from 'react-native';

export default function styles({ fonts , colors }) {
    return (
        StyleSheet.create({
            container: {
              alignItems : 'center'
            },
            imageProfileContainer: {
               borderRadius    : 35,
               width           : 70,
               height          : 70,
            },
            selectImageTilte: {
                lineHeight : fonts.font14,
                fontSize   : fonts.font12
            },
            selectedContainer: {
                alignItems      : 'center',
                justifyContent  : 'center',
                backgroundColor : colors.GRAY,
                borderRadius    : 35,
                width           : 70,
                height          : 70,
            },
            inputContainer: {
                marginTop : 30
            },
            inputContent: {
                paddingVertical   : 12,
                borderColor       : colors.BORDER,
                borderBottomWidth : 1
            },
            bottomButton: {
               width:'100%',
                marginTop : 50
            },
            imageUser: {
                borderRadius : 35,
                flex         : 1,
            }
        })
    );
}
