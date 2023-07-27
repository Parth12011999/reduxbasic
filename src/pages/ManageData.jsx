import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { getUser, deleteData, Update, getSingleUser, increment } from '../features/action';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ManageData() {
    const redirect = useNavigate()
    const dispatch = useDispatch();
    const { allUser, name, singleUser } = useSelector((state) => state.user)
    const {count} = useSelector((state)=> state.count)

    useEffect(() => {
        dispatch(getUser())
    }, [])



    const ondelete = (id) => {
        dispatch(deleteData(`http://localhost:3000/user/${id}`))
        dispatch(getUser())
    }

    const onstatuschange = async(id) => {

        const response = await axios.get(`http://localhost:3000/user/${id}`)
        // dispatch(Update(`http://localhost:3000/user/${id}`, { status: singleUser.status == "unblock" ? "block" : "unblock" }))
        // toast.success(`Status Change ${singleUser.status}`)
        if (response.data.status == 'block') {
            dispatch(Update(`http://localhost:3000/user/${id}`, { status: "unblock" }))
            toast.success('Unblocked')
            dispatch(getUser())
        }
        if (response.data.status == 'unblock'){
            dispatch(Update(`http://localhost:3000/user/${id}`, { status: "block" }))
            toast.success('Blocked')
            dispatch(getUser())
        }
    }

    const add = () =>{
        dispatch(increment(count + 1))
    }

    const dec = () =>{
        dispatch(increment(count - 1))
    }
    return (
        <div id="page-wrapper" className='container'>
            <div id="page-inner">
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12">
                        {/*   Kitchen Sink */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1>Manage Data:{name}</h1>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Mobile</th>
                                                {/* <th>Password</th> */}
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allUser.map(item => {
                                                    return (
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.mobile}</td>
                                                            {/* <td>{item.password}</td> */}
                                                            <td><button className='btn btn-success mx-3' onClick={() => { onstatuschange(item.id) }}>
                                                                {
                                                                    item.status == 'unblock' ? "Block" : "Unblock"
                                                                }
                                                            </button>
                                                                <button className='btn btn-danger mx-3' onClick={() => { ondelete(item.id) }}>Delete</button>
                                                                <button className='btn btn-primary mx-3' onClick={() => { redirect('/edituser/' + item.id) }}>Edit</button>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* End  Kitchen Sink */}
                    </div>
                </div>
                {/* /. ROW  */}
            </div>
            <button className='btn btn-info' onClick={add}><b>+</b></button>
            <h1>{count}</h1>
            <button className='btn btn-info'onClick={dec} ><b>-</b></button>
            {/* /. PAGE INNER  */}
        </div>
    )
}

export default ManageData