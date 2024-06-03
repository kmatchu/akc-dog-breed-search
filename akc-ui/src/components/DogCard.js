import React from 'react';
import { Link } from 'react-router-dom';
import { PiDog } from "react-icons/pi";
// React code loosely based on Oregon State CS290 Assignment 9 Accessed 5/6/24
// https://canvas.oregonstate.edu/courses/1945984/assignments/9475930?module_item_id=23863281


function DogCard( { breed }){
    return (
        <td style={{ padding: "5px", margin: "5px", height: "200px" }}>
            <br />
            <table class="dogcontainter" style={{ border: '3px blue solid', height: "200px"}}>
                <tbody>
                <tr>
                    <td className="dog-photo" rowSpan="5"><PiDog style={{ textAlign: 'center', fontSize: "100px" }}/></td>
                    <td style={{ textAlign: 'right' }}>Weight: {breed.weight}</td>
                </tr>
                <tr><td style={{ textAlign: 'right' }}>Grooming: {breed.grooming}</td></tr>
                <tr><td style={{ textAlign: 'right' }}>Energy: {breed.energy}</td></tr>
                <tr><td style={{ textAlign: 'right' }}>Trainability: {breed.trainability}</td></tr>
                <tr><td style={{ textAlign: 'right' }}>Demeaner: {breed.demeaner}</td></tr>
                <tr><td colSpan="2" style={{ fontWeight: 'bold' }}>{breed.name}</td></tr>
                <tr><td colSpan="2">{breed.temperament}</td></tr>
                </tbody>
            </table>
            <br />
        </td>
    )
}

export default DogCard;