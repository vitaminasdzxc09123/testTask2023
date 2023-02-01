import { StyleSheet } from 'react-native';

export default function styles({ fonts , colors }) {
    return (
        StyleSheet.create({
            container: { 
               flexDirection  : 'row',
               justifyContent : 'center',
               alignItems     : 'center'
            },
            input: {
                borderWidth       : 1,
                borderRadius      : 12,
                paddingHorizontal : 15,
                paddingVertical   : 15,
                borderColor       : colors.BORDER
            },
            inputContainer: {
                flex            : 1,
                marginLeft      : 10,
            },
            codPickerContainer: {
                width : '25%'
            },
            dropDownContent: {
                borderColor: colors.BORDER
            }
        })
    );
}
