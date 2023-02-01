/* eslint-disable max-lines-per-function */
import  {
    useEffect,
    useState
}                 from 'react';
import { 
    INPUT,
    CONFIRM_CODE,
    PHONE_NUMBER
}  from '../constants';

export function useSignUpConstructor({ localStateParams, handleUpdateParams }) {
    const [ renderList, setRenderList ] = useState(null);

    useEffect(() => {
        const block = {
            id   : 'Person',
            rows : [
                {
                    id           : 'phoneNumber',
                    type         : PHONE_NUMBER,
                    title        : '',
                    placeholder  : 'phone',
                    zIndex       : 10,
                    keyboardType : 'numeric',
                    value        : localStateParams.phoneNumber,
                    onChange     : (value) => handleUpdateParams('phoneNumber', value)
                }, 
                {
                    id           : 'confirmCode',
                    type         : CONFIRM_CODE,
                    title        : 'Code',
                    placeholder  : 'Your phone',
                    value        : localStateParams.confirmCode,
                    onChange     : (value) => handleUpdateParams('confirmCode', value)
                },
                 {
                    id          : 'name',
                    type        : INPUT,
                    title       : 'Your name',
                    placeholder : 'Your name',
                    value       : localStateParams.name,
                    onChange    : (value) => handleUpdateParams('name', value)
                }, 
                {
                    id          : 'email',
                    type        : INPUT,
                    title       : 'Your Email',
                    placeholder : 'Your Email',
                    value       : localStateParams.email,
                    onChange    : (value) => handleUpdateParams('email', value)
                }, 
                {
                    id          : 'password',
                    type        : INPUT,
                    title       : 'Password',
                    placeholder : 'Password',
                    value       : localStateParams.password,
                    onChange    : (value) => handleUpdateParams('password', value)
                },
                {
                    id          : 'confirmPassword',
                    type        : INPUT,
                    title       : 'Confirm Password',
                    placeholder : 'Confirm Password',
                    value       : localStateParams.confirmPassword,
                    onChange    : (value) => handleUpdateParams('confirmPassword', value)
                }
            ]
        };

        setRenderList(block);
    }, [ localStateParams ]);

    return renderList;
}
