import React, { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const value = { name, email, age, phone };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || age === "" || phone === "") {
      return alert("Please fill all fields");
    } else if (name !== "" || email !== "" || age !== "" || phone !== "") {
      axios.post("http://localhost:8080/User", value);
      setName("");
      setEmail("");
      setAge("");
      setPhone("");
      navigate("/");
    }
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-neutral-700">
      <div className="bg-white flex  w-[60%] rounded-lg  p-4 pb-6">
        <div className="w-2/4 flex items-center justify-center">
          <img src="/bg1.png" className="select-none" alt="" />
        </div>
        <div className="w-2/4">
          <h1 className="text-[2rem] uppercase text-center mb-5 font-bold">
            Welcome To <span className="text-[#5036c1]">Api Form </span>
          </h1>
          <form onSubmit={handleFormSubmit} className="w-full">
            <label htmlFor="name" className="text-[1.1rem]">
              Name
            </label>
            <br />
            <input
              className="w-full  p-2 rounded-md mt-1 mb-2 border-2 outline-none focus:border-2 focus:border-[#5036c1] border-[#d4d4d4]"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="name" className="text-[1.1rem]">
              Email
            </label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              placeholder="Enter Your Email"
              type="email"
              id="email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="name" className="text-[1.1rem]">
              Age
            </label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              type="number"
              placeholder="Enter Your Age"
              id="age"
              required
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />

            <label htmlFor="name" className="text-[1.1rem]">
              Phone
            </label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              maxLength={11}
              placeholder="Enter Phone Number"
              type="Number"
              id="name"
              required
              value={phone}
              name="name"
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <button
              onClick={handleFormSubmit}
              type="submit"
              className="my-2 px-12 text-[1rem] w-full transition-all hover:bg-[#5327b9]  py-2 rounded-md  text-white bg-[#5036c1] focus:outline-none focus:outline-purple-900"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Add;
