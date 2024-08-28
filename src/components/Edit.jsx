import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8080/User/${id}`)
      .then(response => {
        const user = response.data;
        setName(user.name || "");
        setEmail(user.email || "");
        setAge(user.age || "");
        setPhone(user.phone || "");
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
      });
  }, [id]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || age === "" || phone === "") {
      alert("Please fill all fields");
      return;
    }

    const value = { name, email, age, phone };

    axios.put(`http://localhost:8080/User/${id}`, value)
      .then(() => {
        setName("");
        setEmail("");
        setAge("");
        setPhone("");
        navigate("/");    
      })
      .catch(error => {
        setError("There was an error updating the user data!", error);
      });
  };

  return (
    <section className="w-full h-screen flex items-center justify-center bg-neutral-700">
      <div className="bg-white flex justify-evenly w-[60%] rounded-lg p-4 pb-6">
        <div className="w-[47%] flex items-center justify-center">
          <img src="/login.png" className='w-[70%]' alt="Edit Form" />
        </div>
        <div className="w-2/4">
          <h1 className="text-[2rem] uppercase text-center mb-5 font-bold">
            <span className="text-[#5036c1]">Edit Form</span>
          <p className='text-[red] text-[0.9rem]'>{error}</p>
          </h1>
          <form onSubmit={handleFormSubmit} className="w-full">
            <label htmlFor="name" className="text-[1.1rem]">Name</label>
            <br />
            <input
              className="w-full p-2 rounded-md mt-1 mb-2 border-2 outline-none focus:border-2 focus:border-[#5036c1] border-[#d4d4d4]"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label htmlFor="email" className="text-[1.1rem]">Email</label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              placeholder="Enter Your Email"
              type="email"
              id="email"
              name="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <label htmlFor="age" className="text-[1.1rem]">Age</label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              type="number"
              placeholder="Enter Your Age"
              id="age"
              name="age"
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />

            <label htmlFor="phone" className="text-[1.1rem]">Phone</label>
            <br />
            <input
              className="w-full p-2 outline-none focus:border-2 focus:border-[#5036c1] rounded-md mt-1 mb-2 border-2 border-[#d4d4d4]"
              maxLength={11}
              placeholder="Enter Phone Number"
              type="number"
              id="phone"
              name="phone"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />

            <button
              type="submit"
              className="my-2 px-12 text-[1rem] w-full transition-all hover:bg-[#5327b9] py-2 rounded-md text-white bg-[#5036c1] focus:outline-none focus:outline-purple-900"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Edit;
