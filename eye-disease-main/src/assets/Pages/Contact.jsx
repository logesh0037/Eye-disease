import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let onSubmit=(data)=>{
    console.log(data);
    
  }
  return (
    <div>
      <div className="bg-gray-500/80 px-12 py-12  lg:py-24  lg:pb-32 text-center text-white flex flex-col gap-3">
        <h1 className="text-3xl">Contact Us</h1>
        <p>Get in touch with our team for any questions or support</p>
      </div>
      <div className="flex flex-col md:flex-row lg:px-28 lg:py-12 px-4 py-3 justify-center bg-white gap-5 ">
      <div className="bg-gray-500/20 p-8 rounded-md">
        <ul className="flex flex-col gap-3">
          <h1 className="text-lg mb-2">Get in Touch</h1>
          <li className="flex items-start gap-2">
          <div className="text-blue-500">
          <i className="fa-regular fa-envelope"></i>
          </div>
            <div>
              <p>Email</p>
              <p>contact@visionai.com</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
          <div  className="text-blue-500">
          <i className="fa-solid fa-phone"></i>
          </div>
            <div>
              <p>Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </li>
          <li className="flex items-start gap-2">
          <div  className="text-blue-500">
          <i className="fa-solid fa-location-dot"></i>
          </div>
            <div>
              <p>Address</p>
              <p>123 Innovation DriveSilicon Valley, CA 94025</p>
            </div>
          </li>
        </ul>
      </div>
      <div className=" basis-[50%] bg-white shadow-xl border-1 border-gray-500/20 p-3 rounded-md">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1 px-3 mb-2">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  className="border px-2 py-1 rounded-sm outline-none"
                  placeholder="First Name"
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
              <div className="flex flex-col gap-1 px-3 mb-2">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  className="border px-2 py-1 rounded-sm outline-none"
                  placeholder="Last Name"
                  {...register("surname", {
                    required: "Last Name Is Required",
                    pattern: {
                      value: /^[A-Z][a-z]*$/,
                      message: "Last Name Is Invalid",
                    },
                  })}
                  autoComplete="off"
                />
                { errors.surname && <p className="text-sm text-red-500">{errors.surname.message}</p>}
              </div>
              
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
              <label htmlFor="">Message</label>
              <textarea name="" id="" placeholder="Message"  className=" border px-2 py-1 rounded-sm outline-none resize-none" ></textarea>
            </div>
            <div className="px-3">
              <button type="submit" className="w-full mt-3 bg-blue-500 text-white rounded px-2 py-1 cursor-pointer">
                Submit
              </button>
             </div>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
