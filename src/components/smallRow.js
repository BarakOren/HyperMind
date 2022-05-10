import React from "react";
import styled from "styled-components";

const Div = styled.div`
    width: 100%;
    background: linear-gradient(90deg, ${p => p.bg} 0%, rgba(0,0,0,0) 100%);
    margin-bottom: 3px;
    border-radius: 10px;
    padding: 3px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const Text = styled.p`
    width: 25%;
    font-size: 13px;
    color: ${p => p.color};
    cursor: ${p => p.cursor};
    transition: .2s all;
    :hover{
        transition: .2s all;
        text-shadow: ${p => p.cursor ? "1px 1px 10px white" : ""}; 
    }
`

const Green = styled.p`
    font-weight: ${p => p.weight};
    width: 25%;
    font-size: 13px;
    color: ${p => p.color};
    cursor: ${p => p.cursor};
    transition: .2s all;
    text-decoration: ${p => p.underline ? "underline" : "none"};
    text-decoration-thickness: 2px;
    :hover{
        transition: .2s all;
        font-weight: 800;
        text-shadow: ${p => p.cursor ? "1px 1px 10px white" : ""}; 
    }
` 

const Red = styled.p`
    font-weight: ${p => p.weight ? "600" : "400"};
    width: 25%;
    font-size: 13px;
    cursor: ${p => p.cursor};
    transition: .2s all;
    color: ${p => p.color};
    text-decoration: ${p => p.underline ? "underline" : "none"};
    text-decoration-thickness: 2px;
    :hover{
        transition: .2s all;
        font-weight: 800;
        text-shadow: ${p => p.cursor ? "1px 1px 10px white" : ""}; 
    }
`

const SmallRow = (props) => {
    const {id, color, value, mainGroup, groupsName, setSelection, setSelectionType} = props

    return (
        <Div bg={`${value.classification.bgColor}50`}>
            <Text cursor={"pointer"} onClick={() => {setSelection(mainGroup); setSelectionType("role");}}>{mainGroup}</Text>
            <Text cursor={"pointer"} onClick={() => {setSelection(id); setSelectionType("id");}} >{id.slice(1, 4)}</Text>
            <Text cursor={"pointer"} onClick={() => {setSelection(groupsName); setSelectionType("group");}}>{groupsName}</Text>
            <Text>{value.classification.label}</Text>
            <Green
            underline={color === "green"}
            weight={color === "green"} 
            color={color === "green" ? "rgb(102, 255, 102)" : "rgb(166, 214, 159)"}
            >{value.greenToks}</Green>
            <Red 
            underline={color === "red"}
            weight={color === "red"} 
            color={color === "red" ? "rgb(212, 17, 17)" : "rgb(222, 149, 155)"}
            >{value.redToks}</Red>
        </Div>
    )
}

export default SmallRow;