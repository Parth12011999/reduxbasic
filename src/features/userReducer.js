import * as types from './types'
const intialstate = {
    allUser:[],
    singleUser:{},
    name:"Parth"
}

const userReducer = (state=intialstate,action) => {
    switch (action.type) {

        case types.VIEW_USER:
        return{
            ...state,
            allUser: action.payload,
        }

        case types.SINGLEVIEW_USER:
            return{
                ...state,
                singleUser:action.payload
            }
        default:return state;
    }

}

export default userReducer