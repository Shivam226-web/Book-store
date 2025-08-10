import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";
function Signup() {
   const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => console.log(data);
  const modalRef = useRef(null);

  const closeModal = () => {
    modalRef.current?.close();
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      {/* DaisyUI modal using <dialog> */}
      <dialog id="signup_modal" className="modal" ref={modalRef} open>
        <div className="modal-box relative">
          {/* Close button */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={closeModal}
            >
              ✕
            </Link>
          

          <h3 className="font-bold text-lg mb-4">Signup</h3>

          {/* Name */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
               {...register("text", { required: true })}
            />
              <br />
               {errors.text && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
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
              className="input input-bordered w-full"
               {...register("Password", { required: true })}
            />
              <br />
               {errors.Password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* Actions */}
          <div className="flex justify-between items-center mt-6">
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
