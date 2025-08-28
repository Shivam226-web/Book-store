import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.Password, // lowercase
    };

    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      if (res.data) {
        toast.success(" Loggedin Successfully ");
        document.getElementById("my_modal_3").close();
        setTimeout(()=>{

          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        },2000)
      }
    } catch (err) {
      console.error("Signup Error:", err.response?.data || err.message);

      toast.error("Error: " + (err.response?.data?.message || err.message));
      setTimeout(()=>{},3000)
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              type="button"
              onClick={() => document.getElementById("my_modal_3").close()}
              className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold">Login</h3>
            {/* email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter Your Email"
                className="px-3 py-1 border rounded-md outline-none w-80"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="Password"
                placeholder="Enter Your Password"
                className="px-3 py-1 border rounded-md outline-none w-80"
                {...register("Password", { required: true })}
              />
              <br />
              {errors.Password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            {/* Button */}
            <div className="flex justify-around mt-4">
              <button className="px-3 py-1 text-white duration-200 bg-pink-500 rounded-md hover:bg-pink-700">
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link
                  to="/signup"
                  className="text-blue-500 underline cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
