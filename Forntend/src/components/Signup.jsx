import React, { useRef } from 'react';
import { Link, Navigate, replace, useLocation, useNavigate } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from 'react-hot-toast';
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname||"/"
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
   const onSubmit = async (data) => {
  const userInfo = {
    fullname: data.fullname,
    email: data.email,
    password: data.Password, // lowercase
  };

  try {
    const res = await axios.post("http://localhost:4001/user/signup", userInfo);
    if (res.data) {
      toast.success("Signup Successfully");
      console.log("Signup Successfully");
     navigate(from,{replace:true});
    }
    localStorage.setItem("Users",JSON.stringify(res.data.user))
  } catch (err) {
    console.error("Signup Error:", err.response?.data || err.message);
    toast.error("Error: " + (err.response?.data?.message || err.message));
  }
};

  const modalRef = useRef(null);

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className='flex items-center justify-center h-screen'>
      {/* DaisyUI modal using <dialog> */}
      <dialog id="signup_modal" className="modal" ref={modalRef} open>
        <div className="relative modal-box">
          {/* Close button */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/"
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </Link>
          

          <h3 className="mb-4 text-lg font-bold">Signup</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full input input-bordered"
               {...register("fullname", { required: true })}
            />
              <br />
               {errors.fullname && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered"
               {...register("email", { required: true })}
            />
              <br />
               {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered"
               {...register("Password", { required: true })}
            />
              <br />
               {errors.Password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-6">
            <button className="btn btn-primary">Signup</button>
            <p className="text-sm">
              Have an account?{" "}
              <button  className="link link-primary"  onClick={()=> document.getElementById("my_modal_3").showModal()}>
                Login
              </button>{" "}
              <Login/>
            </p>
          </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
