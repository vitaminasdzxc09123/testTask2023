import React, {
    useCallback,
    useRef
}                              from 'react';
import PropTypes               from 'prop-types';
import { Pressable, Animated } from 'react-native';

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

function AnimatedPress({
    duration,
    children,
    scale,
    withoutAnimation,
    style,
    containerStyle,
    ...props
}) {
    const animScale = useRef(new Animated.Value(1)).current;

    const pressIn = useCallback(() => {
        if (withoutAnimation) return;
        Animated.timing(animScale, {
            useNativeDriver : true,
            toValue         : scale,
            duration
        }).start();
    }, []);

    const pressOut = useCallback(() => {
        if (withoutAnimation) return;
        Animated.timing(animScale, {
            useNativeDriver : true,
            toValue         : 1,
            duration
        }).start();
    }, []);


    return (
        <Pressable
            {...props}
            style      = {[ containerStyle ]}
            onPressIn  = {pressIn}
            onPressOut = {pressOut}
        >
            <Animated.View
                style = {[
                    style,
                    { transform : [ { scale : animScale } ] }
                ]}
            >
                {children}
            </Animated.View>
        </Pressable>
    );
}

AnimatedPress.propTypes = {
    onPress          : PropTypes.func,
    children         : PropTypes.node.isRequired,
    duration         : PropTypes.number,
    withoutAnimation : PropTypes.bool,
    scale            : PropTypes.number,
    style            : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ]),
    containerStyle : PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array
    ])
};

AnimatedPress.defaultProps = {
    style            : {},
    onPress          : undefined,
    containerStyle   : {},
    duration         : PRESS_DURATION,
    scale            : DEFAULT_SCALE,
    withoutAnimation : false
};

export default React.memo(AnimatedPress);
