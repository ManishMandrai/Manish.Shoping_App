import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmithandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={onSubmithandler}
        className="bg-white shadow-lg rounded-lg p-8 w-[60%] sm:max-w-md m-auto"
      >
        <div className="text-center mb-6">
          <p className="prata-regular text-3xl text-gray-800">{currentState}</p>
          <hr className="border-none h-[1.5px] w-16 bg-gray-800 mx-auto mt-2" />
        </div>

        {currentState === "Login" ? null : (
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 mt-4"
          placeholder="Email"
          required
        />

        <input
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 mt-4"
          placeholder="Password"
          required
        />

        <div className="w-full flex justify-between text-sm mt-4">
          <p className="cursor-pointer text-blue-600 hover:underline">
            Forgot password?
          </p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("SignUp")}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Create Account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-blue-600 hover:underline"
            >
              Login here
            </p>
          )}
        </div>

        <button className="bg-blue-600 text-white font-medium px-8 py-2 mt-6 rounded-lg hover:bg-blue-700 transition-all duration-200">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
