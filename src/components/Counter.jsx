import React, {useState} from 'react';
import {Container, Typography} from "@mui/material";

const Counter = () => {
    const [counter, setCount] = useState(0)
    return (
      <div className=''>
            <Typography variant={"h4"} >
                Sign Up
            </Typography>
      </div>
    );
};

export default Counter;