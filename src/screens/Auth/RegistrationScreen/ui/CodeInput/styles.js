import { StyleSheet } from 'react-native';

export default function styles({ fonts , colors }) {
    return (
        StyleSheet.create({
            container: {
               width:'70%'
            },
            headerTitle: {
                marginBottom:12
            },
            cell : {
                width           : 48,
                height          : 48,
                alignItems      : 'center',
                justifyContent  : 'center',
                borderWidth     : 1,
                borderColor     : colors.BORDER,
                backgroundColor : colors.WHITE,
                borderRadius    : 15,
            },
        })
    );
}
