import React, { useState, useEffect } from 'react';

const SimpleInput = (props) => {
    const [name, setName] = useState('');
    const [touch, setTouch] = useState(false);

    let formsub = false

    const valids = name.trim() !== ''

    if (valids) {
        formsub = true
    }

    const inputHandler = event => {
        setName(event.target.value)
    }

    const blurHandler = () => {
        setTouch(true);
    }

    const submitHandler = event => {
        event.preventDefault();
        setTouch(true)
        if (!valids) {
            return;
        }
        setName('')
        setTouch(false)
    }

    const touching = !valids && touch;
    const animclasses = touching ? 'form-control invalid' : 'form-control'
    
    return (
        <form onSubmit={submitHandler}>
            <div className={animclasses}>
                <label 
                    htmlFor='name'>Your Name</label>
                <input type='text'
                    id='name'
                    onChange={inputHandler}
                    onBlur={blurHandler}
                    value={name} />
                {touching && <p>can not be empty input field</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formsub}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
