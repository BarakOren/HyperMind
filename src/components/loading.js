import styled, { keyframes } from 'styled-components'
import React, { useEffect, useState } from 'react'

const Div = styled.div`
    display: ${p => p.display ? "flex" : "none"};
    width: 100vw;
    height: 100vh;
    background-color: #242426;
    background-image: linear-gradient(to right bottom, #191919, #1c1c1d, #1d2021, #202422, #262723);
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    transition: 1s all;
    opacity: ${p => p.loading ? "1" : "0"};
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
  
    100% {
        transform: rotate(360deg);
    }
`

export const LoaderStyle = styled.div`
  border: 5px solid rgba(0, 0, 0, 0.3);
  border-top: 5px solid rgb(126, 134, 145);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 0.8s linear infinite;
`


const Loader = ({loading}) => {

    const [display, setDisplay] = useState(true)
    useEffect(() => {
        if(!loading){
            setTimeout(() => {
                setDisplay(false)
            }, 1000)
        }
    }, [loading])

    return(
        <Div display={+display} loading={loading}>
            <LoaderStyle />
        </Div>
    )
}

export default Loader;