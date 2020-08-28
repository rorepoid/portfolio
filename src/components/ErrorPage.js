import React from "react";

const ErrorPage = (props) => (
  <div className="flex justify-center flex-col w-screen h-screen bg-gray-600">
    <div className="grid grid-cols-1">
      <h1 className="text-center text-6xl text-gray-300 font-bold font-mono select-none">
        {props.errorCode}
      </h1>
      <h1 className="text-center text-4xl text-gray-300 font-mono select-none">
        {props.message}
      </h1>
    </div>
  </div>
);

export default ErrorPage;
