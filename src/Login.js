
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Input from "./Input";
import { login } from "./Slice";

const Login = () => {
  const [userRegistration, setUserRegistration] = useState({
    email: "",
    password: ""
  });

  const handleInput = (e) => {
    setUserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        email: userRegistration.email,
        password: userRegistration.password
      })
    );
    const dbData = JSON.parse(localStorage.getItem("user"));

    if (
      dbData === null ||
      dbData.every(val => val.email !== userRegistration.email)
    ) {
      alert("can't find user..! Please try again");
      return;
    } else if (
      dbData.map(user => {
        if (user.email === userRegistration.email) {
          if (user.password !== userRegistration.password) {
            alert("Incorrect password.! Try again");
          } else {
            console.log("login");

          }

          navigate("/dashboard");
        }
        return null;
      })
    ) {
      return null;
    }
  };
  return (
    
    <div className="flex flex-col justify-center items-center h-screen ">
      <div className="flex justify-center items-center  shadow-2xl rounded-2xl ">
        <form onSubmit={handleSubmit} className="max-w-[400px] w-full mx-auto bg-white p-8">
          {/* <div className="flex flex-col mb-4">
            <h1 className="text-center text-5xl font-serif font-bold">LogIn</h1>
            <label>Email</label>
            <input
              className="border relative bg-gray-100 p-2"
              name="email"
              id="email"
              placeholder="Username"
              type="text"
              value={userRegistration.email}
              onChange={handleInput}
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </div>
          <div className="flex flex-col ">
            <label>Password</label>
            <input
              name="password"
              id="password"
              placeholder="Password"
              className="border relative bg-gray-100 p-2"
              type="password"
              value={userRegistration.password}
              onChange={handleInput}
              // pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
            />
          </div> */}
          <div className="flex flex-col mb-4">
            <h1 className="pb-5 text-center text-5xl font-serif font-bold">LogIn</h1>
            <Input
              name="email"
              id="email"
              placeholder="Username"
              type="text"
              value={userRegistration.email}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col ">
            <Input
              name="password"
              id="password"
              placeholder="Password"
              type="password"
              value={userRegistration.password}
              onChange={handleInput}
            />
          </div>
          <button
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            type="submit"
          >
            Login
          </button>
          <div className="pr-20 pt-5">
            <h3>
              Don't have account ?{""}
              <Link to="/signup" className="text-blue-500 pl-1">
                register
              </Link>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
