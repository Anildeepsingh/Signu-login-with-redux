import React, { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import { useDispatch } from "react-redux";
import { signup } from "./Slice";
import store from "./store";

const Signup = () => {
  const [userRegistration, setUserRegistration] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cnpassword: "",
    date: "",
  });

  const dispatch = useDispatch();

  const handleInput = (e) => {
    setUserRegistration({ ...userRegistration, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dbcheck = JSON.parse(localStorage.getItem("user"));
    // const usersCount = dbcheck === null ? 1 : dbcheck.length + 1;

    dispatch(
      signup({
        firstname: userRegistration.firstname,
        lastname: userRegistration.lastname,
        email: userRegistration.email,
        password: userRegistration.password,
        cnpassword: userRegistration.cnpassword,
        // id: usersCount,
      })
    );

    const stateData = store.getState();
    const usersDetails = stateData.user.details;

    const arr = [];

    if (
      dbcheck === null ||
      dbcheck.every((elm) => elm.email !== userRegistration.email)
    ) {
      arr.push(usersDetails);
      localStorage.setItem("user", JSON.stringify(arr));
    } else {
      alert("already have account");
      return;
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <form onSubmit={handleSubmit} className="shadow-2xl rounded-2xl ">
        <div>
          <h1 className="pb-5 text-center text-5xl font-serif font-bold">
            SignUp
          </h1>
          <label className="m-3">Name</label>
          <input
            type="text"
            name="firstname"
            placeholder="First name"
            id="firstname"
            className="border relative bg-gray-100 p-2 m-1"
            required
            value={userRegistration.firstname}
            onChange={handleInput}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last name"
            id="lastname"
            className="border relative bg-gray-100 p-2 m-1"
            required
            value={userRegistration.lastname}
            onChange={handleInput}
          />
        </div>

        {/* <div>
          <label className="m-3">Email </label>
          <input
            type="text"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            placeholder="Email"
            id="email"
            required
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            className="border relative bg-gray-100 p-2 m-1"
          />
        </div> */}
        {/* <div>
          <label className="m-3">Password</label>
          <input
            type="text"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            placeholder="Password"
            id="password"
            required
            className="border relative bg-gray-100 p-2 m-1"
            // pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
          />
        </div> */}
        {/* <div>
          <label className="m-3">Confirm Password</label>
          <input
            type="text"
            value={userRegistration.cnpassword}
            onChange={handleInput}
            name="cnpassword"
            placeholder="Confirm Password"
            id="cnpassword"
            required
            className="border relative bg-gray-100 p-2 m-1"
            // pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"
          />
        </div> */}
        {/* <div>
          <label className="m-3">Date</label>
          <input
            type="date"
            value={userRegistration.date}
            onChange={handleInput}
            name="date"
            placeholder="Date"
            id="date"
            required
            className="border relative bg-gray-100 p-2 m-1"
          />
        </div> */}

        <Input 
        type="text" 
        name="email" 
        // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"  
        placeholder="Email" 
        id="email"
        value={userRegistration.email}
        onChange={handleInput}
         />

        <Input
          type="password"
          name="password"
          placeholder="Password"
          id="password"
          // pattern=""
          value={userRegistration.password}
          onChange={handleInput}
        />

        <Input
          type="cnpassword"
          name="cnpassword"
          placeholder="Confirm password"
          id="cnpassword"
          // pattern=""
          value={userRegistration.cnpassword}
          onChange={handleInput}
        />

        <Input
         type="date"
         name="date"
         placeholder="Date" 
         value={userRegistration.date} 
         onChange={handleInput} />

        <div className="p-2 m-3">
          <input type="checkbox" id="agree" name="checkbox" required />
          <label htmlFor="agree">
            {" "}
            I agree to <b>terms and conditions</b>
          </label>
        </div>
        <div className="pt-2 pb-2">
          <label className="p-6 ">
            Already have an account ?
            <Link to="/" className="text-blue-500 pl-1">
              Login
            </Link>
          </label>
        </div>
        <div className="m-6">
          <button
            className="w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white"
            type="submits"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
