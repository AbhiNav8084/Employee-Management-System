import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        console.log("Email is ",email)
        console.log("Password is ",password)

        setEmail("")
        setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-cyan-500 p-20 bg-gradient-to-t from-sky-100 to-blue-300">
        <span className="relative flex items-center justify-center mb-20 ">
             <h1 className="text-4xl font-bold text-blue-700  ">Login Page</h1>
        </span>
        <form
          onSubmit={(e)=>{
            submitHandler(e)
          }}
          className="flex flex-col items-center justify-center "
        >
          <input
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-black text-xl py-3 px-5 rounded-2xl placeholder:text-gray"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required
            className="text-black outline-none bg-transparent border-2 border-black text-xl py-3 px-5 rounded-2xl mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter Password"
          />
          <button className="text-white border-none outline-none bg-cyan-700 text-xl py-3.5 px-12 rounded-full mt-5 hover:bg-cyan-800">
                Log In
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;
