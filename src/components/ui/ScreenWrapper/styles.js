import { StyleSheet } from 'react-native';

export default function styles({ colors, fonts }) {
    return (
        StyleSheet.create({
            container : {
                flex : 1
            },
            keyboardContainer : {
                flex              : 1,
                paddingHorizontal : 32,
                backgroundColor   : colors.WHITE
            },
            block : {
                position : 'relative',
                flex     : 1
            },
            bottomContainer : {
                flex           : 1,
                alignItems     : 'center',
                justifyContent : 'flex-end'
            },
            headerContainer : {
                alignItems     : 'center',
                justifyContent : 'space-between',
                flexDirection  : 'row'
            },
            containerMainDropDown : {
                marginTop : 12
            },
            titleDropDown : {
                marginRight : 40
            },
            notificationMark : {
                width           : 12,
                height          : 12,
                borderRadius    : 20,
                borderWidth     : 2,
                borderColor     : '#fff',
                backgroundColor : '#FF5151',
                position        : 'absolute',
                zIndex          : 1,
                left            : 29,
                top             : 14
            }
        })
    );
}
