import React, {useState, useEffect} from "react";
import styled from "styled-components"
import SmallRow from "./smallRow";
import Button from "./button";

const Div = styled.div`
    width: 90%;
    margin: 40px 0;
`

const Title = styled.h1`
    font-size: 45px;
    margin: 20px 0;
`

const ButtonsDiv = styled.div`
    width: 100%;
    height: 30px;
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    
`



const SortedRoles = (props) => {
    const {sortedRoles} = props;
    const [selection, setSelection] = useState("role")
    const sorted = []
    sortedRoles.forEach(role => {
        role[1].forEach(cohorts => {
            sorted.push({id: Object.keys(cohorts)[0], obj: Object.values(cohorts)[0]})
        })
    })

    useEffect(() => {

    }, [selection])
    const sortedSelection = sorted.filter(element => element.obj.mainGroup === selection)
    // chapterTitle

    const ButtonsList = [
        "role", "type", "title", "setting", "size", "model", "region", "chapterTitle" 
    ]

    return(
        <Div>
            <Title>sort by roles</Title>
            <ButtonsDiv>
                {ButtonsList.map(name => {
                    return <Button selection={selection} setSelection={setSelection} name={name}/>
                })}
            </ButtonsDiv>
            {sortedSelection.map((obj, index) => {
            const {mainGroup, groupsName, value} = obj.obj
            return <SmallRow key={index} id={obj.id} value={value} mainGroup={mainGroup} groupsName={groupsName} />
            }
            )}
        </Div>
    )
}

export default SortedRoles;