import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
  const [ApiData, setApiData] = useState([]);
   const navigate = useNavigate();

   const handleApiDataAxios = async () => {
    try {
      const response = await axios.get("http://localhost:8080/User");
      setApiData(response.data);
    } catch (error) {
      console.error(error); 
    }
   }
  useEffect(() => {
    handleApiDataAxios();
}, []);
const handleDeleteData = (id) => {
  axios.delete(`http://localhost:8080/User/${id}`).then(() => {
    handleApiDataAxios();
  });
};

  return (
    <section className="w-full h-screen flex items-center justify-center bg-neutral-700">
      <div className="w-[80%] overflow-y-scroll bg-white h-[90%] rounded-xl p-4">
        <h1 className="text-4xl text-center my-4 font-semibold text-[#5036c1]">
          User Data
        </h1>
        <NavLink to={"/add"} className="no-underline py-2 px-16 hover:bg-[#321a9c] text-center text-white rounded-lg bg-[#5036c1] ">+ Add</NavLink>
        <table className="table table-sm align-middle mt-4">
          <thead className="table-info">
            <tr className="text-[1.1rem]">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Buttons</th>
            </tr>
          </thead>
          <tbody>
            {ApiData.map((data, index) => {
              return (
                <tr className="text-[1rem]" key={index}>
                  <td scope="row">{data.id}</td>
                  <td scope="row" className="capitalize">{data.name}</td>
                  <td scope="row">{data.age}</td>
                  <td scope="row" >{data.email}</td>
                  <td scope="row">{data.phone}</td>
                  <td scope="row">
                    <button
                      onClick={() => navigate(`/edit/${data.id}`)}
                      className="py-[0.5rem] px-8 text-white tracking-wider hover:bg-green-700 font-semibold bg-green-500 rounded-md m-2"
                    >
                      Edit
                    </button>
                    <button
                    onClick={()=>handleDeleteData(data.id)}
                      className="py-[0.5rem] hover:bg-red-700 px-8 tracking-wider text-white font-semibold bg-red-500 rounded-md m-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Home;
