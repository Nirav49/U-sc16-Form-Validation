import React from 'react';
import useCustomInput from '../components/CustomInput'

const SimpleInput = (props) => {
    const {
        value: name,
        isValid: nameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        reset: resetNameInput,
        inputBlurHandler: nameBlurHandler } = useCustomInput(value => value.trim() !== '');

        const {
            value: email,
            isValid: emailIsValid,
            hasError: emailInputHasError,
            valueChangeHandler: emailChangeHandler,
            reset: resetEmailInput,
            inputBlurHandler: emailBlurHandler } = useCustomInput(value => value.includes('@'));

    let formIsValid = false;

    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }


    const submitHandler = event => {
        event.preventDefault();

        if (!nameIsValid) {
            return;
        }
        if (!emailIsValid) {
            return;
        }
        resetNameInput();
       resetEmailInput();
    }

    const nameclasses = nameInputHasError ?
        'form-control invalid' :
        'form-control'

    const emailclasses = emailInputHasError ?
        'form-control invalid' :
        'form-control'

    return (
        <form onSubmit={submitHandler}>
            <div className={nameclasses}>
                <label
                    htmlFor='name'>Your Name</label>
                <input type='text'
                    id='name'
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                    value={name} />
                {nameInputHasError 
                && <p>can not be empty input field</p>}
            </div>
            <div className={emailclasses}>
                <label
                    htmlFor='name'>Your Email</label>
                <input type='text'
                    id='name'
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    value={email} />
                {emailInputHasError
                 && <p>can not be empty email field</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
