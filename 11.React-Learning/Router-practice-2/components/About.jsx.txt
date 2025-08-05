import React from "react";

function About() {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-6 xl:p-6">
        <div className="flex justify-center items-center h-full">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">About Us</h1>
            <p className="text-lg text-gray-600 mt-4">
              Learn more about our company and mission.
            </p>
            <div className="flex flex-wrap justify-center mt-6">
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <h2 className="text-2xl font-bold text-gray-900">Our Team</h2>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-4">
                <h2 className="text-2xl font-bold text-gray-900">Our Values</h2>
                <p className="text-lg text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  sit amet nulla auctor, vestibulum magna sed, convallis ex.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
