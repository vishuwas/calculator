import React from "react";

function DropdownButton ({ handleTInput }) {    

   

    return (
        <>
        <select onChange={(e) => handleTInput(e)}>
            <option value="select">Select</option>
            <option value="add">Addition</option>
            <option value="sub">Subtraction</option>
            <option value="multiply">Multiplication</option>
            <option value="divide">Division</option>
            <option value="mod">Modulus</option>
        </select>
        </>
    )
}

export default DropdownButton