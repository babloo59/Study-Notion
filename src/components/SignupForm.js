import { AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai';
import React, { useState } from "react";
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [accountType, setAccountType] = useState("student");

    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    

    function changeHandler(event) {
        setFormData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }
    
    function submitHandler(event) {
        event.preventDefault();
        if(formData.password != formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");

        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,accountType
        }
        console.log("Printing account data");
        console.log(finalData);
    }

    return (
        <div>
            {/* student-Instructor Tab */}
            <div className='flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button onClick={() => setAccountType("student")}
                    className={`${accountType === "student" ? "bg-slate-900 text-slate-200" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Student
                </button>
                <button onClick={() => setAccountType("instructor")}
                    className={`${accountType === "instructor" ? "bg-slate-900 text-slate-200" : "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}>
                    Instructor
                </button>
            </div>

            <form onSubmit={submitHandler}
                className="flex flex-col w-full gap-y-4 mt-6">
                {/* first name and last name */}
                <div className='flex gap-x-4'>
                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">First Name<sup className="text-pink-500">*</sup></p>
                    <input
                        required
                        type="text"
                        name='firstName'
                        onChange={changeHandler}
                        placeholder="Enter First Name"
                        value={formData.firstName}
                        className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
                    />
                </label>

                <label className="w-full">
                    <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">Last Name<sup className="text-pink-500">*</sup></p>
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={changeHandler}
                        placeholder="Enter Last Name"
                        value={formData.lastName}
                        className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
                    />
                </label>
                </div>

                {/* Email Address */}
                <label className="w-full">
                <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
                    Email Address<sup className="text-pink-500">*</sup>
                </p>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={changeHandler}
                      placeholder="Enter email Address "
                      name="email"
                      className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
                    />
            </label>

            {/* Create Password and confirm Password */}
            <div className='flex gap-x-4'>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
                   Create Password<sup className="text-pink-500">*</sup>
                </p>
                    <input
                      required
                      type={showPassword ? ("text") : ("password")}
                      value={formData.password}
                      onChange={changeHandler}
                      placeholder="Enter Password"
                      name="password"
                      className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
                    />

                    <span onClick={() => setShowPassword((prev) => !prev)}
                         className="absolute right-3 top-[38px] cursor-pointer">
                        {
                            showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>
            </label>

            <label className="w-full relative">
                <p className="text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]">
                   Confirm Password<sup className="text-pink-500">*</sup>
                </p>
                    <input
                      required
                      type={showConfirmPassword ? ("text") : ("password")}
                      value={formData.confirmPassword}
                      onChange={changeHandler}
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      className="bg-slate-800 rounded-[0.75rem] w-full p-[12px] text-slate-50"
                    />

                    <span onClick={() => setShowConfirmPassword((prev) => !prev)}
                         className="absolute right-3 top-[38px] cursor-pointer">
                        {
                            showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF"/>) : (<AiOutlineEye fontSize={24} fill="#AFB2BF"/>)
                        }
                    </span>
            </label>
            </div>
            <button className="bg-yellow-500 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-6">
                Create Account
            </button>
            </form>
        </div>
    )
}

export default SignupForm;