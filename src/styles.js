import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

export const AppStyle = styled.div`
width: 100vw;
color: white;
`

export const GlobalStyle = createGlobalStyle`
body{
background-color: #242426;
background-image: linear-gradient(to right bottom, #191919, #1c1c1d, #1d2021, #202422, #262723);
/* background-image: radial-gradient(at 0% 0%,hsla(253,16%,7%,0.3) 0,transparent 50%),radial-gradient(at 10% 60%,hsla(189, 24%, 32%,0.4) 0,transparent 50%),radial-gradient(at 100% 0%,hsla(360, 23%, 24%, 1) 0,transparent 90%); */
-webkit-touch-callout: none; 
-webkit-user-select: none; 
-khtml-user-select: none; 
-moz-user-select: none; 
-ms-user-select: none; 
user-select: none;
text-align: center;
align-items: center; 
margin: 0;
font-family: 'Montserrat', sans-serif;
overflow-x: hidden; 
}

::-webkit-scrollbar{
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-thumb{
background: rgb(68, 68, 68);
border-radius: 25px ;
}

::-webkit-scrollbar-thumb:hover{
    background: rgb(90, 90, 90);
}

`

export const StatsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 10px;
`

export const Users = styled.p`
  font-size: 20px;
  margin: 10px 0 10px 0;
  width: 20%;
  border-radius: 10px;
  padding:15px;
  background-image: linear-gradient(to right, #3a7f9c, #36748e, #33697f, #2f5e72, #2b5364);
`

export const Investors = styled.p`
  font-size: 20px;
  margin: 10px 0 10px 0;
  width: 20%;
  border-radius: 10px;
  padding:15px;
  background-image: linear-gradient(to right, #5f3a9c, #57368e, #4e3380, #472f72, #3f2b64);
`

export const AllDocs = styled.h1`
  font-size: 50px;
  margin: 0;
`