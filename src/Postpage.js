import React, { useState } from "react";
import logo from "./search-b.png";
import './Postpage.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios'

const Postpage = () => {

  const[goods,setGoods]=useState()
  const[pickup,setPickup]=useState()
  const[destination,setDestination]=useState()
  const[price,setPrice]=useState()
  const[weight,setWeight]=useState()

  const Submit =(e) => {
    e.preventDefault();
    axios.post("http://localhost:27017/Postpage",{goods,pickup,destination,price,weight})
    .then(result => console.log(result))
    .catch(err => console.log(err))
  } 

  const navigate=useNavigate();
  return (
    <main className="Postpagebase">
      {/* Nav start */}
      <div className="navbar navbar-expand-lg navbar-light bg-primary  justify-content-between align-items-center">
        <div className="navbar-brand">
          <h4 className="nav_title">Happy Trucking!!</h4>
        </div>
        <div className="search-box">
          <div className="search">
            <input type="text" placeholder="Search" className="inp" />
            <img src={logo} alt="" className="searchimg" />
          </div>
          <div className="post">
            <button className="postinp" onClick={() => navigate('/')}>Home</button>
          </div>
        </div>
      </div>

      {/* Nav End */}
      
      {/* Main start */}

      <div className="container postcontainer">
        <form action="" className="postform" onSubmit={Submit} >
          <div className="row">
            <div className="col-12">
              <label htmlFor="inp_type" className="form-label">Goods Type</label>
              <input type="text"
                id="inp_type"
                className="form-control"
                placeholder="Enter the type of the load"
                onChange={(e) => setGoods(e.target.value)}
              />

            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label for="inp_pickup" className="form-label">Pickup</label>
              <input type="text"
                id="inp_pickup"
                className="form-control"
                placeholder="Enter your pickup location"
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>
            <div className="col-6">
                <label for="inp_destination" className="form-label">Destination</label>
                <input type="text"
                  id="inp_destination"
                  className="form-control"
                  placeholder="Enter drop location"
                  onChange={(e) => setDestination(e.target.value)}

                />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="inp_price" className="form-label">Price</label>
              <input type="text" 
                id="inp_price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-6">
              <label htmlFor="inp_weight" className="form-label">Weight in ton</label>
              <input type="text"
                id="inp_weight"
                className="form-control"
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col6">
              <label htmlFor="inp_about" className="form-label">About</label>
              <input type="text"
                id="inp_about"
                className="form-control"
                placeholder="Write the Description"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <label htmlFor="inp_file" className="form-label">Upload photo</label>
              <input type="file"
                id="inp_file"
                className="form-control"
              />
            </div>
          </div>
          <div className="row text-end">
            <div className="col-12 my-3">
              <button className="postinside btn btn-primary" type="submit">Post Job</button>
            </div>
          </div>
        </form>
      </div>

      {/* Main end */}
    </main>
  );
};

export default Postpage;
