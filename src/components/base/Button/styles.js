import { StyleSheet } from 'react-native';

export default function styles({}) {
    return (
        StyleSheet.create({
            container : {
                alignItems     : 'center',
                justifyContent : 'center'
            },
            buttonSm : {
                height            : 32,
                paddingVertical   : 8,
                paddingHorizontal : 16,
                borderRadius      : 16
            },
            buttonMd : {
                height            : 44,
                paddingVertical   : 12,
                paddingHorizontal : 16,
                borderRadius      : 12
            },
            buttonLg : {
                width        : '100%',
                height       : 62,
                borderRadius : 20
            },
            titleSm : {
                fontSize : 14
            },
            titleMd : {
                fontSize : 16
            },
            titleLg : {
                fontSize : 18
            },
            withoutShadow : {
                shadowColor : 'transparent'
            },
            disabled : {
                opacity : 0.4
            },
            content : {
                flexDirection : 'row',
                alignItems    : 'center'
            }
        })
    );
}
