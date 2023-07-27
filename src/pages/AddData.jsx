import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { insert } from '../features/action';

function AddData() {
    const dispatch = useDispatch()
    const [formData, setformData] = useState({
        id:'',
        name:'',
        email:'',
        mobile:'',
        password:'',
        cpassword:'',
        status:'unblock'
    })

    const onchange = (e) => {
        setformData({...formData,id:new Date().getMilliseconds().toString(),[e.target.name]:e.target.value})
    }
    const validate = () => {
        let res = true;
        if (formData.name == "" || formData.name == null) {
            res = false;
            toast.error('Name required')
        }
        if (formData.email == "" || formData.email == null) {
            res = false;
            toast.error('Email required')
    }
        if (formData.mobile == "" || formData.mobile == null) {
            res = false;
            toast.error('Mobile required')

        }
        if (formData.password == "" || formData.password == null) {
            res = false;
            toast.error('Password required')
        }
        if(formData.cpassword != formData.password){
            res = false;
            toast.error('Password Does not match')
        }
        return res
    }
    const onsubmit = async(e) => {
        e.preventDefault()
        if (validate()) {
            dispatch(insert(`http://localhost:3000/user`,formData))
            setformData({...formData,name:'',email:'',mobile:'',password:'',cpassword:''})
            toast.success('Registered')
        }
    }
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4 d-flex justify-content-center">
                    <div className="col-lg-12 text-center"><h1>Add Data</h1></div>
                    <div className="col-lg-6 py-5 px-4 rounded ">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="text" name="name" value={formData.name} onChange={onchange} className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-12 form-group mt-3">
                                    <input type="email" className="form-control" value={formData.email} onChange={onchange} name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-12 form-group mt-3">
                                    <input type="tel" className="form-control" value={formData.mobile} onChange={onchange} name="mobile" id="mobile" placeholder="Mobile" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="password" className="form-control" value={formData.password} onChange={onchange} name="password" id="password" placeholder="Password" required />
                            </div>
                            <div className="form-group mt-3">
                                <input type='password' className="form-control" name="cpassword" value={formData.cpassword} onChange={onchange} id="cpassword" placeholder="Confirm Password" required />
                            </div>
                            <div className="my-3 col-md-12 text-center">
                                <p>Already have an account ? <Link to="/login">Click here</Link></p>
                            </div>
                            <div className="text-center"><button className='btn btn-primary' type="submit" onClick={onsubmit}>Sign Up</button></div>
                        </form>
                    </div>{/* End Contact Form */}
                </div>
            </div>
        </section>
    )
}

export default AddData