import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
        
    return (
        <>
            <h1>Home</h1>
            <button onClick={()=>navigate("/about")}>About</button>
        </>
    )
};

export default Home;

