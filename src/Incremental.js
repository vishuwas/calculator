// import React, {useState} from "react";

// export default function App () {

//     let [value1, setValue1] = useState()
//     let [value2, setValue2] = useState()
//     let [value3, setValue3] = useState()

//     const handleValue1 = (e) => {
//         setValue1(e.target.value)
//     }

//     const handleValue2 = (e) => {
//         setValue2(e.target.value)
//     }

//     const handleDropdown = (e) => {
//         setValue3(e.target.value)
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         if (value3 === 'add') {
//             alert(+value1 + +value2)
//         }
//         else if (value3 === 'sub') {
//             alert((+value1) - (+value2))
//         }
//         else if (value3 === 'multiply') {
//             alert((+value1) * (+value2))
//         }
//         else if (value3 === 'divide') {
//             alert((+value1) / (+value2))
//         }
//         else {
//             alert((+value1) % (+value2))
//         }
//     }

//     return (
//         <>
//         <input type="number" placeholder="Insert value 1" onChange={(e) => handleValue1(e)} />
//         <input type="number" placeholder="Insert value 2" onChange={(e) => handleValue2(e)} /><br />
//         <select onChange={(e) => handleDropdown (e) }>
//             <option value="select">Select</option>
//             <option value="add">Addition</option>
//             <option value="sub">Subtraction</option>
//             <option value="multiply">Multiplication</option>
//             <option value="divide">Division</option>
//             <option value="mod">Modulus</option>
//         </select>
//         <button onClick={(e) => handleSubmit(e)}>Submit</button>
//         </>
//     )
// }

import React, {useState} from "react";
import FirstInput from "./components/FirstInput";
import SecondInput from "./components/SecondInput";
import SubmitButton from "./components/SubmitButton";
import DropdownButton from "./components/DropdownButton";

export default function App () {
    let [value1, setValue1] = useState()
    let [value2, setValue2] = useState()
    let [value3, setValue3] = useState()

    const handleFInput = (e) => {
        setValue1(e.target.value)
    }

    const handleSInput = (e) => {
        setValue2(e.target.value)
    }

    const handleTInput = (e) => {
        setValue3(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        if (value3 === 'add') {
            alert((+value1) + (+value2))
        }

        else if (value3 === 'sub') {
            alert((+value1) - (+value2))
        }
        else if (value3 === 'multiply') {
            alert((+value1) * (+value2))
        }
        else if (value3 === 'divide') {
            alert((+value1) / (+value2))
        }
        else {
            alert ((+value1) % (+value2))
        }
    }

    return (
        <>
        <FirstInput handleFInput={handleFInput} />
        <SecondInput handleSInput={handleSInput}/><br />
        <DropdownButton handleTInput={handleTInput} /><br />
        <SubmitButton handleSubmit={handleSubmit} />
        </>
    )
}