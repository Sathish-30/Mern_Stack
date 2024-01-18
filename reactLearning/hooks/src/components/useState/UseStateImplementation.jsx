import {useState} from "react";

const UseStateImplementation = () => {
    const [input , setInput] = useState("Petro");
    const handleChange = (event) => {
        console.log(event);
        setInput(event.target.value);
    }
    return (
        <div>
            <input type = "text" placeholder="Enter something.." onChange={handleChange}/>
            {input}
        </div>
    )
}

export default UseStateImplementation;