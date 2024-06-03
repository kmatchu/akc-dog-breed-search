import React from "react";
import HomePage from "../pages/HomePage";
import { Link } from 'react-router-dom';
import { FaFlask, FaDog } from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
// React code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281




function HeaderBar( {update}){

    return(
        <div>
            <Link to="/" class="navbar"><h1><FaFlask />Research<FaFlask /></h1></Link>
            <br />
            <Link to="/allbreeds" class="exnavbar">All<IoPawOutline /></Link>
            <button onClick={() => {HomePage.setFilteredBreeds('energy',0.6)}}>Filter To Energy, 0.6</button>
            <Link to="/filteredbreeds" class="exnavbar"><h3>Filter<IoSearchOutline /></h3></Link>
            <Link to="/comparebreeds" class="exnavbar"><h3>Compare<IoDocumentsOutline /></h3></Link>
        </div>
    )
}

export default HeaderBar;