import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [addres, setAddres] = useState("");
  const [gender, setGender] = useState("Male");
  const [agencyname, setAgencyName] = useState("");
  const [position, setPosition] = useState("");
  const [idcardnumber, setIdCardNumber] = useState("");
  const [date, setDate] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, [id]);

  const getUserById = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/users/${id}`);
      setName(response.data.name);
      setEmail(response.data.email);
      setMobile(response.data.mobile);
      setAddres(response.data.addres);
      setGender(response.data.gender);
      setAgencyName(response.data.agencyname);
      setPosition(response.data.position);
      setIdCardNumber(response.data.idcardnumber);
      setDate(response.data.date);
    } catch (error) {
      toast.error("Error fetching user data");
    }
  };

  const validateEmail = (email) => {
    const regex = /^[a-zA-Z._%+-]+@gmail\.com$/;
    return regex.test(email);
  };

  const validateMobile = (mobile) => {
    const regex = /^\+670[0-9]{8}$/;
    return regex.test(mobile);
  };

  const updateUser = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Halo favor prenche Gmail halo los.");
      return;
    }

    if (!validateMobile(mobile)) {
      toast.error("Halo favor prenche numero telefone tuir code +670.");
      return;
    }

    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name,
        email,
        mobile,
        addres,
        gender,
        agencyname,
        position,
        idcardnumber,
        date,
      });
      toast.success("User updated successfully!");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error("Error adding user");
      }
    }
  };

  // const getUserById = async () => {
  // const response = await axios.get(`http://localhost:5000/users/${id}`);
  //setName(response.data.name);
  //setEmail(response.data.email);
  //setMobile(response.data.mobile);
  // setAddres(response.data.addres);
  // setGender(response.data.gender);
  // }

  //const updateUser = async (e) => {
  // e.preventDefault();
  // try {
  // await axios.patch(`http://localhost:5000/users/${id}`, {
  //  name,
  //  email,
  // mobile,
  //  addres,
  //  gender,
  //});
  // toast.success("User added successfully!");
  // navigate("/");
  // } catch (error) {
  //  if (error.response && error.response.data) {
  //  toast.error(`Error: ${error.response.data.message}`);
  //  } else {
  //  toast.error("Error adding user");
  // }
  // // //console.log(error);
  // }
  // };

  return (

  
    <div className="columns mt-5 is-centered ">
<div className="column is-fullwidth">
<header className="is-flex is-justify-content-space-between is-align-items-center mb-5">
          <div className="is-flex is-align-items-center">
            <img src="/logoinss.png" alt=".." style={{ width: '50px', marginRight: '10px' }} />
            <Link to="/" className="title">Home</Link>
          </div>
         
        </header>
      
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Mobile</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Your Phone Number"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Addres</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={addres}
                onChange={(e) => setAddres(e.target.value)}
                placeholder="Your Address"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Gender</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label">Agency Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={agencyname}
                onChange={(e) => setAgencyName(e.target.value)}
                placeholder="Your Agancy Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Position</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="Your Position"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Id Card Number</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={idcardnumber}
                onChange={(e) => setIdCardNumber(e.target.value)}
                placeholder="Your Id Card Number"
              />
            </div>
          </div>


          <div className="field">
          <label for="date" className="label">Date</label>
          <input type="date" className="control" id="date" value={date} onChange={(e) => setDate (e.target.value) } />
          </div>


          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>

              <Link to={"/"} className="button is-warning">
                {" "}
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
      <ToastContainer />
      </div>
    </div>
  );
};

export default EditUser;
