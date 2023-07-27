import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer,toast } from 'react-toastify';

import { deleteData, getContact } from '../features/action';

function ManageContact() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getContact())
    },[])

    const {allContact} = useSelector((state)=>state.contact)

    const ondelete = (id) =>{
        dispatch(deleteData(`http://localhost:3000/contact/${id}`))
        dispatch(getContact())
    }

    // console.log(allUser,singleUser,name)
    
    return (
        <div id="page-wrapper" className='container'>
            <div id="page-inner">
                {/* /. ROW  */}
                <div className="row">
                    <div className="col-md-12">
                        {/*   Kitchen Sink */}
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h1>ManageContact:</h1>
                            </div>
                            <div className="panel-body">
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>subject</th>
                                                <th>Message</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                allContact.map(item => {
                                                    return(
                                                        <tr key={item.id}>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.email}</td>
                                                            <td>{item.subject}</td>
                                                            <td>{item.msg}</td>
                                                            <td><button className='btn btn-danger' onClick={() => {ondelete(item.id)}}>Delete</button></td>
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
            {/* /. PAGE INNER  */}
        </div>
    )
}

export default ManageContact