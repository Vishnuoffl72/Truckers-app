// import React, { useEffect, useState } from 'react'
import "./Homepage.css";
import Heropage from "./Heropage";
import logo from "./search-b.png";
import pic1 from "./goodsimage.jpg";
import pic2 from "./container-on-hcv-fedex.jpg";
import pic3 from "./petroleum-2.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Mappopup from "./Mappopup";

const Homepage = () => {
  const job1 = [
    {
      pic: pic1,
      pickup:"Tirunelveli",
      destination:"Chennai",
      name: "empty pallets",
      company: "vishnu ltd..",
      amount: 3000,
    },
    {
      pic: pic2,
      pickup:"Chennai",
      destination:"Mumbai",
      name: "Container",
      company: "vishnu ltd..",
      amount: 5000,
    },
    {
      pic: pic3,
      pickup:"Madurai",
      destination:"Chennai",
      name: "Petrolium",
      company: "vishnu ltd..",
      amount: 10000,
    },
  ];

    const navigate=useNavigate();
    const [openmodal,setOpenmodal] =useState(false)

    const handleClick=() =>{
      setOpenmodal(true)
    }
 
  return (
    <main>
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
            <button className="postinp" onClick={() => navigate('Postjob')}>Post Job</button>
          </div>
        </div>
      </div>

      <div>
        {job1.map((items) => (
          <Heropage jobs={items }  open={handleClick}/>
        ))} 
      </div>
      {openmodal? <Mappopup close={setOpenmodal}/>:null}
      
    </main>
  );
};

export default Homepage;
