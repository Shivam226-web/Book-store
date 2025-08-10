import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Close button to go back to home */}
        <div className="flex justify-end">
          <Link
            to="/"
            className="text-xl btn btn-sm btn-circle btn-ghost"
          >
            ✕
          </Link>
        </div>

        <h1 className="mb-6 text-[40px] font-bold text-center">Contact Us</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
              <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("Name", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Message</label>
            <input
              type="text"
              placeholder="Enter Your Message"
                wrap="hard"
              className="w-full min-h-[160px] px-3 py-3 border rounded-md outline-none resize-y focus:ring-2 focus:ring-pink-400"
              {...register("message", { required: true })}
            />
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              className="w-full px-3 py-2 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700"
            >
              Sumbit
            </button>
           
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
