import React, { useState } from 'react';

const InputComponent = ({ onChange, className, onFocus }) => {

    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;

        setInputVal(value)
        typeof onChange === 'function' && onChange(value.toLowerCase())
    }

    const handleFocus = () => {
        console.log('focused');
        typeof onFocus === 'function' && onFocus()
    }

    return (
        <input 
            name={'advance_input'}
            type={'text'} 
            className={className}
            value={inputVal} 
            onChange={handleInputChange}
            onFocus={handleFocus}
            placeholder={'Start your search...'} 
        />
    )
}

export default InputComponent;