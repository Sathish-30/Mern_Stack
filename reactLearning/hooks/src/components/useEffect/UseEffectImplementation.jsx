import {useEffect} from "react";
import axios from "axios";

const UseEffectImplementation = () => {
    useEffect(() => {
        const res = axios.get("https:jsonplaceholder.typicode.com/comments")
            .then((res) => res.data).then((data) => console.log(data));
    });
    return (<h2>Health check</h2>);
}

export default UseEffectImplementation;