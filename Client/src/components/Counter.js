import React, {useState, useEffect} from 'react';
const Counter = (props) =>{
    const [resp, setResp] = useState("");
    useEffect(()=>{
        fetch("http://localhost:1337/api/tasks")
        .then(res => res.text())
        .then(res => setResp(res))
        .catch(err => err);
    });
    
    
    return (
        <h2>{resp}</h2>
    );
};


export default Counter;