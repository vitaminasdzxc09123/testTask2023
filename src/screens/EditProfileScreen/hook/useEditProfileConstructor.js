/* eslint-disable max-lines-per-function */
import  {
    useEffect,
    useState
}                 from 'react';
import { INPUT }  from '../constants';

export function useEditProfileConstructor({ localStateParams, handleUpdateParams }) {
    const [ renderList, setRenderList ] = useState(null);

    useEffect(() => {
        const block = {
            id   : 'Person',
            rows : [
                {
                    id           : 'name',
                    type         : INPUT,
                    title        : 'Name',
                    placeholder  : 'Name',
                    value        : localStateParams.name,
                    onChange     : (value) => handleUpdateParams('name', value)
                }, 
                {
                    id           : 'email',
                    type         : INPUT,
                    title        : 'Email',
                    placeholder  : 'Email',
                    value        : localStateParams.email,
                    onChange     : (value) => handleUpdateParams('email', value)
                },
                 {
                    id           : 'phone',
                    type         : INPUT,
                    title        : 'Phone',
                    placeholder  : 'Phone',
                    keyboardType : 'numeric',
                    value        : localStateParams.phone,
                    onChange     : (value) => handleUpdateParams('phone', value)
                }, 
                {
                    id          : 'position',
                    type        : INPUT,
                    title       : 'Position',
                    placeholder : 'Position',
                    value       : localStateParams.position,
                    onChange    : (value) => handleUpdateParams('position', value)
                }, 
                {
                    id          : 'skype',
                    type        : INPUT,
                    title       : 'Skype',
                    placeholder : 'Skype',
                    value       : localStateParams.skype,
                    onChange    : (value) => handleUpdateParams('skype', value)
                },
            ]
        };

        setRenderList(block);
    }, [ localStateParams ]);

    return renderList;
}
