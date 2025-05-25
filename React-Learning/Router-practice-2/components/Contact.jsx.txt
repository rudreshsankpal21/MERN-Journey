import React from "react";

function Contact() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-6 xl:p-6">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-lg text-gray-600 mt-4">
              Have a question or just want to say hi?
            </p>
            <form className="mt-6">
              <input
                type="text"
                placeholder="Name"
                className="block w-full p-4 mb-4 border border-gray-300 rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="block w-full p-4 mb-4 border border-gray-300 rounded-lg"
              />
              <textarea
                placeholder="Message"
                className="block w-full p-4 mb-4 border border-gray-300 rounded-lg"
              />
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
