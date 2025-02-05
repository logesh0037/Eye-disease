import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [isSignup, setIsSignUp] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let onSubmit=(data)=>{
    console.log(data);
    
  }
  return (
    <div className=" grid place-items-center h-[80vh] ">
      <div></div>
      <div className=" w-[350px] max-w-[90%] my-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white  border-1 rounded-md border-gray-300"
        >
          <div className="">
            <h1 className="text-lg font-semibold text-center px-5 py-4">
              Welcome To Upto Skills
            </h1>
            <div className="flex gap-2 justify-center border-b-1 pb-4 px-3">
              <button onClick={()=>setIsSignUp(false)} className={`w-full ${isSignup?"bg-gray-400":"bg-blue-500"} text-white rounded px-2 py-1 cursor-pointer`}>
                Sign In
              </button>
              <button onClick={()=>setIsSignUp(true)} className={`w-full ${isSignup?"bg-blue-500":"bg-gray-400"} text-white rounded px-2 py-1 cursor-pointer`}>
                Register
              </button>
            </div>
          </div>
          <div className="px-3 pb-8 pt-3">
            {isSignup ? (
              <div className="flex flex-col gap-1 px-3 mb-2">
                <label htmlFor="">Username</label>
                <input
                  type="text"
                  className="border px-2 py-1 rounded-sm outline-none"
                  placeholder="Create a Username"
                  {...register("name", {
                    required: "Name Is Required",
                    pattern: {
                      value: /^[A-Z][a-z]*$/,
                      message: "Name Is Invalid",
                    },
                  })}
                  autoComplete="off"
                />
                { errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
              </div>
            ) : (
              <></>
            )}
            <div className="flex flex-col gap-1 px-3 mb-2">
              <label htmlFor="">Email</label>
              <input
                placeholder="example@gmail.com"
                type="email"
                className="border px-2 py-1 rounded-sm outline-none"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Email Is Invalid",
                  },
                })}
                autoComplete="off"
              />
              
              {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
            </div>
            <div className="flex flex-col gap-1 px-3 mb-2">
              <label htmlFor="">Password</label>
              <input
                placeholder="password"
                type="password"
                className="border px-2 py-1 rounded-sm outline-none"
                {...register("password", {
                  required: "Password Is Required",
                  pattern: {
                    value: /^[A-Z][a-zA-Z0-9!@#$%^&*()_+]{7,}$/,
                    message: "Password Is Invalid",
                  },
                })}
                autoComplete="off"
              />
              {errors.password && <p className="text-sm text-red-500">{errors.password.message}</p>}
            </div>
            {isSignup ? (
              <div className="flex mt-3 items-center gap-2 px-3">
                <input type="checkbox" />
                <p className="text-blue-500 underline text-sm">Terms & conditions</p>
              </div>
            ) : (
              <></>
            )}
            {isSignup ? (
             <div className="px-3">
              <button type="submit" className="w-full mt-3 bg-blue-500 text-white rounded px-2 py-1 cursor-pointer">
                Register
              </button>
             </div> 
            ) : (
              <div className="px-3">
                <button type="submit" className="w-full mt-3 bg-blue-500 text-white rounded px-2 py-1 cursor-pointer">
                Sign In
              </button>
              </div>
              
            )}
            {isSignup ? <></> : <p className="text-sm px-3 mt-3 text-blue-500 underline">Forgot password?</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
