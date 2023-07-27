import * as types from './types'

const intialstate = {
    allContact:[],
    singleContact:{},
    name:"Parth"
}
const contactReducer = (state=intialstate,action) => {
    switch (action.type) {
        case types.VIEW_CONTACT:
            return{
                ...state,
                allContact:action.payload
            }    
        default:return state
    }
}

export default contactReducer