// import * as types from './userReducer'
import * as types from './types'
import axios from 'axios'


const loaddata = (data) => ({
    type:types.VIEW_USER,
    payload: data
})

export function getUser(){
  return function(dispatch){
      axios.get(`http://localhost:3000/user`)
      .then((res)=>{
        dispatch(loaddata(res.data))
      })
  }
}

export  function insert(api,formvalue) {
  return function () {
    axios.post(api,formvalue)
  }
}

const loadcontact = (data) => ({
    type:types.VIEW_CONTACT,
    payload: data
})

export function getContact() {
  return function (dispatch) {
    axios.get(`http://localhost:3000/contact`)
    .then((res)=>{
      dispatch(loadcontact(res.data))
    })
  }
}

export const increment = (data) => ({
  type:types.C_INCDEC,
  payload: data
})



export function deleteData(api) {
  return function () {
    axios.delete(api)
  }
}

const singleloaduser = (data) =>({
  type:types.SINGLEVIEW_USER,
  payload: data
})

export function getSingleUser(api) {
  return function(dispatch){
    axios.get(api)
    .then((res)=>{
      dispatch(singleloaduser(res.data))
      console.log(res.data)
    })
  }
}

export function Update(api,formData){
  return function(){
    axios.patch(api,formData)
  }
}
