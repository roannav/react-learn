import React from 'react';
import {useNavigate} from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
      
  return (
    <>
      <h1>Page 1</h1>
      <button onClick={()=>navigate("/page1")}>Page 1</button>
      <button onClick={()=>navigate("/page2")}>Page 2</button>
      <button onClick={()=>navigate("/page3")}>Page 3</button>
      <button onClick={()=>navigate(-1)}>Go Back in History</button>
      <button onClick={()=>navigate(1)}>Go Forward in History</button>
    </>
  )
};

export default Page1;

