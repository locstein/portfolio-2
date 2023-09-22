import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8 mx-auto">
          <p className="text-4xl font-bold inline border-b-4 border-red-700 text-gray-300">
            Contact
          </p>
        </div>
        <input
          className="bg-slate-200 p-1 rounded"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-200 rounded"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-slate-200 p-2 rounded"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 flex items-center hover:bg-[#c1121f] hover:border-[#c1121f] px-4 py-3 my-8 mx-auto duration-100 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
