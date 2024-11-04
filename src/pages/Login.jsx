import React, { useState } from "react";
import { dbfirebase } from "../firebaseconfig/dbfirebase";
import { set, push, ref } from "firebase/database";

const Login = () => {
    const [formInput, setFormInput] = useState({
        fullName: "",
        userPassoword: ""
    })


    const onChangeHandler =(e) =>{
        setFormInput({
            ...formInput,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitHandler = (e) =>{
        e.preventDefault()
        console.log(formInput);
        
        set(push(ref(dbfirebase, "userLoginFile/")),{
            userName: formInput.fullName,
            userPassword: formInput.userPassoword
        })
        setFormInput({
            fullName: "",
            userPassoword: ""
        })
    }

  return (
    <section className="bg-colorBG h-screen flex items-center justify-center font-interFont">
      <form onSubmit={onSubmitHandler} action="submit" className="bg-cyan-600 p-3 rounded-lg">
        <h2 className="capitalize text-white font-semibold text-center py-4 text-3xl" >login</h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            name="fullName"
            value={formInput.fullName}
            onChange={onChangeHandler}
            placeholder="Name"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="text"
            name="userPassoword"
            value={formInput.userPassoword}
            onChange={onChangeHandler}
            placeholder="Password"
            className="border border-gray-300 p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
