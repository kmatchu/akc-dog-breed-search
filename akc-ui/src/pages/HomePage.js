import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaFlask, FaDog } from "react-icons/fa";
import { IoPawOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoDocumentsOutline } from "react-icons/io5";
import DogCard from '../components/DogCard';
// React code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281

function HomePage({ updateBreedCards }){
    const [activeBreeds, setActiveBreeds] = useState([])
    const navigate = useNavigate();

    const setAllBreeds = async () => {
        console.log("Called setAll")
        const res = await fetch('/allbreeds')
        
        const converted = await res.json()
        console.log(converted)
        setActiveBreeds(converted)
    }

    const setFilteredBreeds = async (category, value) => {
        // To do: add precheck if params are strings for error checking
        const res = await fetch('/filteredbreeds/' + category.toString() + "/"+ value.toString())
        console.log("made here")
        console.log(res)
        const converted = await res.json()
        setActiveBreeds(converted)
    }

    // useEffect runs on initial page load
    useEffect(() => {
        setAllBreeds()
    }, [])


    const onEdit = breed => {
        updateBreedCards(breed)
        //
    }

    const strategyMicroserviceCall = async (risk_tolerance) => {
        console.log("Calling Strategy Microservice with "+risk_tolerance+" risk tolerance.")
        const res = await fetch("http://localhost:5000/strategy" + "?risk_tolerance=" + risk_tolerance)
        console.log("Response Received:")
        console.log(await res.text())
    }

    const conversionMicroserviceCall = async (input_value) => {
        console.log("Calling Conversion Microservice with " + input_value + " pounds.")
        const res = await fetch("https://cs361conversionservice-production.up.railway.app/" + "Pounds-Kilograms?pounds=" + input_value)
        const second_res = await fetch("https://cs361conversionservice-production.up.railway.app/" + "Pounds-Kilograms?pounds=" + input_value*2)

        console.log("Response Received:")
        console.log(await res.text())
        console.log("2nd Response Received:")
        console.log(await second_res.text())
    }

    return (
        <div>
            <button onClick={()=> {setAllBreeds(); alert("Careful where you click Mr. Tinkerer, app is still in development")}}><h1><FaFlask />Research<FaFlask /></h1></button>
            <br />
            <h3>Buying a dog is a lifetime commitment - our App will help you find the best possible companion!</h3>
            <button style={{ margin: "5px"}} onClick={()=> {setAllBreeds()}}><IoPawOutline />  Show All Breeds -  **Start Here!!**    <IoPawOutline /></button>
            <button style={{ margin: "5px"}} onClick={() => {setFilteredBreeds('energy',"0.6")}}><IoSearchOutline />  Filter: Show dogs that are a 6/10 on energy. Longest Load time.  <IoSearchOutline /></button>
            <IoDocumentsOutline />
            <div>
                <table>
                <tbody>
                <tr style={{ height: "500px"}} >
                {activeBreeds.map((breed, i) => <DogCard breed = {breed} key={i} />)}
                </tr>
                </tbody>
                </table>
            </div>
            <h3>Microservice Investor Strategy</h3>
            <button onClick={() => {strategyMicroserviceCall("High")}}>High Risk Tolerance</button>
            <button onClick={() => {strategyMicroserviceCall("Medium")}}>Medium Risk Tolerance</button>
            <button onClick={() => {strategyMicroserviceCall("Low")}}>Low Risk Tolerance</button>
            <br />
            <br />
            <button onClick={() => {conversionMicroserviceCall(5)}}>5 pounds and 10 pounds</button>
            <button onClick={() => {conversionMicroserviceCall(15)}}>15 pounds and 30 pounds</button>
        </div>
    )


}

export default HomePage;
