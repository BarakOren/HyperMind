import React, {useState} from "react";
import styled from "styled-components"

const Div = styled.div`
width: 40%;
height: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`

const GraphDiv = styled.div`
width: 100%;
height: 40%;
`

const GreenBar = styled.div`
transition: 1.5s all;
border-radius: 0 10px 10px 0;
height: 20px;
width: ${p => p.size};
background-color: #7AC85F;
background: linear-gradient(270deg, #7AC85F 30%, #346423 100%);
position: relative;
top: 0;
left: 50%;
transform: rotate(180deg);
transform-origin: top left;
`

const RedBar = styled.div` 
transition: 1.5s all;
border-radius: 0 10px 10px 0;
height: 20px;
width: ${p => p.size};
background: linear-gradient(270deg, #FA4B4B 30%, #7A2121 100%);
position: relative;
top: 0;
left: 50%;
`


const GreenTokens = styled.p`
font-size: 18px;
position: relative;
left: 52%;
opacity: ${p => p.opacity};
transition: 1.5s all;
bottom: 4px;
margin: 0;
width: 50px;

`

const RedTokens = styled.p`
font-size: 18px;
position: relative;
transition: 1.5s all;
opacity: ${p => p.opacity};
right: 50%;
bottom: 4px;
margin: 0;
width: 50px;
`

const Graph = (props) => {
    const {object, toggle} = props;
    const [greenSize, setGreenSize] = useState(30)
    const [redSize, setRedSize] = useState(30)
    const [opacity, setOpacity] = useState(0)
    setTimeout(() => {
        setOpacity(1)
        setGreenSize(object.greenToks)
        setRedSize(object.redToks)
    }, 1000)

    var greenTokenMargin = greenSize > 40 ? 
        {transform: `translateX(${-greenSize * 2 - 20}px)`}
        :
        {transform: `translateX(${-greenSize * 2 - 40}px)`}
    
    var redTokenMargin = redSize > 40 ? 
    {transform: `translateX(${redSize * 2 + 20 }px)`}
    :
    {transform: `translateX(${redSize * 2 + 30 }px)`}

    return(
        <Div toggle={toggle}>
        <GreenTokens opacity={opacity} style={greenTokenMargin}>{object.greenToks}</GreenTokens>
        <GraphDiv>
            <RedBar size={`${redSize * 1.5}px`} toggle={toggle}></RedBar>
            <GreenBar size={`${greenSize * 1.5}px`} toggle={toggle}/>
        </GraphDiv>
        <RedTokens opacity={opacity} style={redTokenMargin}>{object.redToks}</RedTokens>
        </Div>
    )
}

export default Graph;