import React from 'react';
import Navbar from "../../component/Navbar/Navbar";
import Footer from "./../../component/Footer/Footer";
import { Outlet } from 'react-router-dom';



export default function MainLayOut() {
  return (
    <div>

      <Navbar></Navbar>

    <Outlet></Outlet>


      
    </div>
  )
}
