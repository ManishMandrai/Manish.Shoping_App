import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");

  const onSubmithandler = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <form
        onSubmit={onSubmithandler}
        className="bg-white shadow-xl rounded-xl p-8 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[30%] m-auto transition-all duration-300"
      >
        <div className="text-center mb-6">
          <p className="text-4xl font-bold text-gray-800">{currentState}</p>
          <hr className="border-none h-[2px] w-20 bg-blue-500 mx-auto mt-3" />
        </div>

        {currentState === "Login" ? null : (
          <input
            type="text"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 mt-4"
            placeholder="Name"
            required
          />
        )}

        <input
          type="email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 mt-4"
          placeholder="Email"
          required
        />

        <input
          type="password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 mt-4"
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

        <button className="bg-blue-600 text-white font-medium px-8 py-3 mt-6 rounded-lg hover:bg-blue-700 transition-all duration-200 w-full">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
