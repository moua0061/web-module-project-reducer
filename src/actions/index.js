export const CLEAR_DISPLAY = 'CLEAR_DISPLAY';
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const ADD_MEMORY = 'ADD_MEMORY';
export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const CURRENT_MEMORY ='CURRENT_MEMORY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperator = (operator) => {
    return({type: CHANGE_OPERATION, payload: operator});
}

export const clearDisplay = () => {
    return({type: CLEAR_DISPLAY})
}

export const addMemory = () => {
    return({type: ADD_MEMORY});
}

export const memoryClear = () => {
    return({type:MEMORY_CLEAR});
}

export const currentMemory = () => {
    return({type: CURRENT_MEMORY});
}