import React,{useReducer} from 'react'

const initialState = {
    value:'',
    isTouched:false,
}

const usingReducer = (state,action) => {
    if(action.type === 'input'){
        return{
            value:action.value,
            isTouched:state.isTouched
        };
    }
    if(action.type === 'blur'){
        return{
            isTouched:true,
            value:state.value
        };
    }
    if(action.type === 'reset'){
        return{
            value:'',
            isTouched:false
        };
    }
}

const useCustomForm = (getvalue) => {
  const[iState,dispatch] = useReducer(usingReducer,initialState)

    const valueIsValid = getvalue(iState.value);
    const hasError = !valueIsValid && iState.isTouched;

    const inputHandler = (event) => {
        dispatch({type:'input',value:event.target.value})
    }

    const inputBlurHandler = (event) => {
        dispatch({type:'blur'})
    }

    const reset = () => {
        dispatch({type:'reset'})
    }

    return {
        val:iState.value,
        valid:valueIsValid,
        hasError,
        inputHandler,
        inputBlurHandler,
        reset
    }
  
}

export default useCustomForm;
