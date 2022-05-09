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
`

const SmallRow = (props) => {
    const {id, value, mainGroup, groupsName} = props
    return (
        <Div bg={`${value.classification.bgColor}50`}>
            <Text>{mainGroup}</Text>
            <Text>{id.slice(1, 4)}</Text>
            <Text>{groupsName}</Text>
            <Text>{value.greenToks}</Text>
            <Text>{value.redToks}</Text>
        </Div>
    )
}

export default SmallRow;