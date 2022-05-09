import React, {useState, useEffect} from "react";
import styled from "styled-components"

const Div = styled.div`
    z-index: 5;
    padding: 15px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    min-height: 100px;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-color: #18181A;
    border-radius: 10px;
    overflow-y: scroll;
`

const Row = styled.div`
    width: 90%;
    height: 30px;
    border-bottom: ${p => p.last ? "none" : "1px solid white"};
    font-size: 13px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
`

const Title = styled.p`
    font-size: 15px;
`

const X = styled.p`
    position: fixed;
    top: 5px;
    left: 10px;
    margin: 0;
    cursor: pointer;
`

const Text = styled.p`
    margin: 0;
    width: 20%;
    text-align: left;
    color: ${p => p.color};
`

const Dislikes = (props) => {
    const {dislikes, setToggle} = props
        let show = []
        dislikes.forEach(dis => {   
        Object.values(dis)[1].map(d => {
            show.push(d)
        })
        })
            // object = Object.values(group)[0] .redToken .greenTokens .mainGroup
    
        return(
        <Div>
            <X onClick={() => setToggle(false)}>X</X>
            <Title>The following groups do not rejected this idea</Title>
            <Row>
                <Text>Role</Text>
                <Text>Cohorts</Text>
                <Text>Green</Text>
                <Text >Red</Text>
            </Row>
            {show.map((d, index) => {
                const obj = Object.values(d)[0]
                return <Row key={index} last={show.length === index + 1} >
                    <Text>{obj.mainGroup}</Text>
                    <Text>{Object.keys(d)[0]}</Text>
                    <Text>{obj.greenTokens}</Text>
                    <Text color={"#e60000"}>{obj.redToken}</Text>
                    </Row>
            })}
        </Div>
    )
}

export default Dislikes;