import React from 'react';
import useCustomForm from '../components/CustomFormReducer'

const SimpleInput = (props) => {
  const {
    val: name,
    valid: nameIsValid,
    hasError: nameInputHasError,
    inputHandler: nameChangeHandler,
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler } = useCustomForm(value => value.trim() !== '');

  const {
    val: lastName,
    valid: lastNameIsValid,
    hasError: lastNameInputHasError,
    inputHandler: lastNameChangeHandler,
    reset: resetlastNameInput,
    inputBlurHandler: lastNameBlurHandler } = useCustomForm(value => value.trim() !== '');


  const {
    val: email,
    valid: emailIsValid,
    hasError: emailInputHasError,
    inputHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler } = useCustomForm(value => value.includes('@'));

  let formIsValid = false;

  if (nameIsValid && emailIsValid && lastNameIsValid) {
    formIsValid = true;
  }


  const submitHandler = event => {
    event.preventDefault();

    if(!formIsValid){
      return;
    }
    console.log(name,lastName,email)
    resetNameInput();
    resetEmailInput();
    resetlastNameInput();
  }

  const nameclasses = nameInputHasError ?
    'form-control invalid' :
    'form-control'

  const lastNameclasses = lastNameInputHasError ?
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
      <div className={lastNameclasses}>
        <label
          htmlFor='name'>Your LastName</label>
        <input type='text'
          id='name'
          onChange={lastNameChangeHandler}
          onBlur={lastNameBlurHandler}
          value={lastName} />
        {lastNameInputHasError
          && <p>can not be empty input lastName field</p>}
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
