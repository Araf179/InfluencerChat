import React, { useEffect, useState } from "react";
import Header from "../components/Header";

import "../styles/App.css";

const Login: React.FC = () => {
  return (
    <div className="container mx-auto h-full flex justify-center items-center">
      <div className="relative top-[10vh] w-1/3">
        <h1 className="font-hairline mb-6 text-center">Register</h1>
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Username or Email
            </label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Username"
            />
          </div>

          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Password
            </label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Password"
            />
          </div>

          <div className="mb-4">
            <label className="font-bold text-grey-darker block mb-2">
              Password
            </label>
            <input
              type="text"
              className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow"
              placeholder="Your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button>
              Register
            </button>

            <a
              className="no-underline inline-block align-baseline font-bold text-sm text-blue hover:text-blue-dark float-right"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </div>
        <div className="text-center">
          <p className="text-grey-dark text-sm">
            Don't have an account?{" "}
            <a href="#" className="no-underline text-blue font-bold">
              Create an Account
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
