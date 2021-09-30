import React, { useState, useEffect } from 'react';

//Style
import { Wrapper } from './InputText.styles';

const InputText = () => {

    const [state, setState] = useState('');

    console.log('gg');

    return (
        <Wrapper
            type="text"
            placeholder="New list name" 
            value = {state} 
            onChange={e => setState(e.target.value)}
        />
    );
};

export default InputText;