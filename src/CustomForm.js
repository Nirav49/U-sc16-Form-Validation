import React,{useState} from 'react'

const useCustomForm = () => {
    const [values,setValue] = useState('');
    const [touched,setTouched] = useState(false);

    const valueIsValid = values.trim() !== '';
    const hasError = !valueIsValid && touched;

    const inputHandler = (event) => {
        setValue(event.target.value)
    }

    const inputBlurHandler = (event) => {
        setTouched(true)
    }

    const reset = () => {
        setValue('');
        setTouched(false)
    }

    return {
        val:values,
        valid:valueIsValid,
        hasError,
        inputHandler,
        inputBlurHandler,
        reset
    }
  
}

export default useCustomForm;
