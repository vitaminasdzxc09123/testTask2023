import React, { useState } from 'react';
import PropTypes           from 'prop-types';

import {
    colors,
    fonts
}                          from '../../theme';
import { AuthContext }     from './AuthContext';


export function AuthProvider({ children }) {

    const [token , setToken] = useState('')

    const context = {
        token,
        setToken
    };

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children : PropTypes.oneOfType([ PropTypes.array, PropTypes.object ])
};

AuthProvider.defaultProps = {
    children : null
};
