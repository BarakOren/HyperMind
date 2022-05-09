import React, {useState, useEffect} from "react";
import styled from "styled-components"

const Div = styled.div`
    /* display: ${p => p.toggle ? "flex" : "none"}; */
    width: 100%;
    height: 50%;
    visibility: ${p => p.toggle ? "visible" : "hidden"}; 
    opacity: ${p => p.delay ? "1" : "0"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    transition: 1s opacity;
`

const Row = styled.div`
    width: 50%;
    height: 30px;
    border-bottom: 1px solid white;
`

const Dislikes = (props) => {
    const {toggle, dislikes} = props
    const [delay, setDelay] = useState(false)
    // console.log(dislikes)
    useEffect(() => {
        setTimeout(() => {
            setDelay(!delay)
        }, 1000)
    }, [toggle])
    return(
        <Div toggle={toggle} delay={delay}>
            <p>hello world</p>
            <Row/>
            <Row/>
        </Div>
    )
}

export default Dislikes;