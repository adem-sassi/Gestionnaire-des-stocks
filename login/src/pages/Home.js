import { StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup } from "../components/Styles";
import Logo from "./../assets/logo.png";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

   
    return(
        
        <div>

<div>
           
           
        </div>
            <div style={{
                position:"absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",


            }}>
                    <Avatar image = {Logo}/>

            </div>
        <StyledTitle size={65}>
            Welcome
        </StyledTitle>
        <StyledSubTitle size={27}>
           this web site is dedicated to bowling foch  
        </StyledSubTitle>
       <ButtonGroup> <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">SignUp</StyledButton> </ButtonGroup>
        </div>
    );

}
export default Home;