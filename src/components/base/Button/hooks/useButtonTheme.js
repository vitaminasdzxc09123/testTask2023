import { buttonTypes, buttonThemes } from '../../../../theme/constants';
import { useThemedStyles }           from '../../../../hooks/useThemeStyles';

import Styles                        from './../styles';

export function useButtonTheme({
    type = buttonTypes.DEFAULT,
    theme = buttonThemes.DEFAULT
}) {
    const { colors } = useThemedStyles(Styles);

    const backgroundMap = {
        [buttonThemes.DEFAULT] : {
            [buttonTypes.DEFAULT]     : colors.ACCENT,
            [buttonTypes.TRANSPARENT] : '',
            [buttonTypes.LINK]        : 'transparent'
        }
        // [buttonThemes.ERROR] : {
        //     [buttonTypes.DEFAULT]     : colors.BUTTON_ERROR,
        //     [buttonTypes.TRANSPARENT] : colors.BUTTON_ERROR_TRANSPARENT,
        //     [buttonTypes.LINK]        : colors.TRANSPARENT
        // },
        // [buttonThemes.SUCCESS] : {
        //     [buttonTypes.DEFAULT]     : colors.BUTTON_SUCCESS,
        //     [buttonTypes.TRANSPARENT] : colors.BUTTON_SUCCESS_TRANSPARENT,
        //     [buttonTypes.LINK]        : colors.TRANSPARENT
        // },
    };

    const textColorMap = {
        [buttonThemes.DEFAULT] : {
            [buttonTypes.DEFAULT]     : colors.WHITE,
            [buttonTypes.TRANSPARENT] : '',
            [buttonTypes.LINK]        : 'transparent'
        }
        // [buttonThemes.ERROR] : {
        //     [buttonTypes.DEFAULT]     : colors.BUTTON_TEXT,
        //     [buttonTypes.TRANSPARENT] : colors.BUTTON_ERROR_TEXT,
        //     [buttonTypes.LINK]        : colors.BUTTON_ERROR_TEXT
        // },
        // [buttonThemes.SUCCESS] : {
        //     [buttonTypes.DEFAULT]     : colors.BUTTON_TEXT,
        //     [buttonTypes.TRANSPARENT] : colors.BUTTON_SUCCESS_TEXT,
        //     [buttonTypes.LINK]        : colors.BUTTON_SUCCESS_TEXT
        // },
    };

    const defaultBackground = backgroundMap[buttonThemes.DEFAULT][buttonTypes.DEFAULT];
    const defaultTextColor = textColorMap[buttonThemes.DEFAULT][buttonTypes.DEFAULT];

    const defaultBackgroundLoadingColor = textColorMap[buttonThemes.DEFAULT][buttonTypes.TRANSPARENT];
    const defaultTextLoadingColor = textColorMap[buttonThemes.DEFAULT][buttonTypes.TRANSPARENT];


    const backgroundColor = backgroundMap[theme]?.[type] || defaultBackground;
    const textColor       = textColorMap[theme]?.[type] || defaultTextColor;

    const backgroundLoadingColor = backgroundMap[theme]?.[buttonTypes.TRANSPARENT] || defaultBackgroundLoadingColor;
    const textLoadingColor       = textColorMap[theme]?.[buttonTypes.TRANSPARENT] || defaultTextLoadingColor;

    return {
        backgroundColor,
        backgroundLoadingColor,
        textColor,
        textLoadingColor
    };
}
