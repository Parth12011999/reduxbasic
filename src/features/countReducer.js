import * as types from './types'
const initialState = {
    count: 0
}

const countReducer = (state=initialState, action) =>{

    switch (action.type) {
        case types.C_INCDEC:
            return{
                ...state,
                count:action.payload
            }

        default: return state
    }

}

export default countReducer