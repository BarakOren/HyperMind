import React from "react";
import styled from "styled-components"

const Div = styled.div`
    width: 24%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s all;

`

const Row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    transition: 1s all;
`

const Title = styled.p`
    font-size: 15px;
    margin: 0 10px 0 0;
`

const Stat = styled.p`
    font-size: 15px;
    padding: 5px 7px;
    border-radius: 25px;
    background-color: ${p => `${p.bg}30`};
    margin: 0 7px 0 0;
`

const Stats = (props) => {
    const {object} = props
    // object.bf object.redToks object.redInvs object.greenToks object.greenInvs
    return(
        <Div>
            <Row>
                <Title>Investors: </Title>
                <Stat bg={`#ffffff`}>{object.greenInvs + object.redInvs}</Stat>
                <Stat bg={`#7AC85F`}>{object.greenInvs}</Stat>
                <Stat bg={`#FA4B4B`}>{object.redInvs}</Stat>
            </Row>
            <Row>
                <Title>BF: </Title>
                <Stat bg={`#317FF1`}>{object.bf.toString()}</Stat>
            </Row>
        </Div>
    )
}

export default Stats;