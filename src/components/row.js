import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Stats from "./stats"
import NameAndId from "./nameNid"
import Graph from "./graph";
import Dislikes from "./dislikes";

const RowContainer = styled.div`
    /* sizes */
    width: 90%;
    height: 70px;
    padding: 10px;
    margin: 10px 0;
    /* display */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    /* styles */
    font-size: 20px;
    border-radius: 10px;
    background: linear-gradient(90deg, ${p => p.bg} 0%, rgba(0,0,0,0) 80%);
    transition: 1s all;
`

const Button = styled.button`
    font-size: 12px;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    position: relative;
    left: 40px;
    background-color: #FA4B4B40;
    /* background-image: linear-gradient(to right, #461313, #531919, #601f1f, #6e2525, #7c2b2b); */
    transition: .2s all;
    :hover{
        transition: .2s all;
        box-shadow: 2px 2px 10px rgb(255, 255, 255, 0.3);
        cursor: pointer;
    }
    `

// const Arrow = styled.div`
//     position: relative;
//     right: -10px;
//   border: solid white;
//   border-width: 0 5px 5px 0;
//   display: inline-block;
//   padding: 5px;
//   transform: rotate(45deg);
//   -webkit-transform: rotate(45deg);
//   cursor: pointer;
// `


const Row = (props) => {
    const {projectId, object, projectName, length, dislikes} = props;
    // object.bf object.redToks object.redInvs object.greenToks object.greenInvs
    const [toggle, setToggle] = useState(false)
    const mappedDislikes = new Map(Object.entries(dislikes))
   
    return(
        <RowContainer bg={`${object.classification.bgColor}50`}>
            <NameAndId length={length} index={props.index} object={object} projectName={projectName} projectId={projectId} />
            <Stats  object={object} />
            <Graph  object={object} />
            {/* {haters && haters.length > 0 && haters.map((a, index) => {
                if(a.idea === projectId)return <p key={index}>{a.result} hates it</p>
            })} */}
            <Button onClick={() => setToggle(!toggle)}>Dislikes</Button>
            {/* <Dislikes toggle={toggle} 
            dislikes={mappedDislikes.size > 0 ? mappedDislikes : null}/> */}
        </RowContainer>
    )
}

export default Row;