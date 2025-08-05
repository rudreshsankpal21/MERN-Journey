import React from "react";

function Home() {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "linear-gradient(to bottom, #3498db, #2ecc71)",
      }}
    >
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-6 xl:p-6">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white animate-bounce">
              Welcome to our website!
            </h1>
            <p className="text-lg text-white mt-4">
              This is a sample animated home page using React and Tailwind CSS.
            </p>
            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded mt-6">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
