import React, {useState, useRef} from "react";
import styled from "styled-components"
import SmallRow from "./smallRow";
import Button from "./button";

const Div = styled.div`
    width: 70%;
    margin: 40px 0;
`

const Title = styled.h1`
    font-size: 45px;
    margin: 20px 0;
`

const SubTitle = styled.p`
    font-size: 25px;
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

const Arrow = styled.div`
    margin-top: 50px;
    border: solid white;
    border-width: 0 4px 4px 0;
    display: inline-block;
    padding: 3px;
    width: 20px;
    height: 20px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    -webkit-transition : -webkit-filter .2s linear;
    :hover{
        cursor: pointer;
        -webkit-transition : -webkit-filter .2s linear;
        filter: drop-shadow(1px 1px 10px rgb(255, 255, 255, 0.9));
    }
`

const SortedRoles = (props) => {
    const {sortedRoles} = props;
    const topRef = useRef(null)
    const [selection, setSelection] = useState("role");
    const [selectionType, setSelectionType] = useState("role")
    
    const sorted = []
    sortedRoles.forEach(role => {
        role[1].forEach(cohorts => {
            sorted.push({id: Object.keys(cohorts)[0], obj: Object.values(cohorts)[0]})
        })
    })

    //catch diffrences between cohorts.
    const differences = []
    const getDifferences = (array) => {
        let ideas = {a300: [],a276: [],a289: [],a246: [],a230: [],a241: [],a292: [],
            a293: [],a272: [],a234: [],a291: [] }
        array.forEach(item => {
            ideas[item.id].push(item)
        })
        const ideasMap = new Map(Object.entries(ideas))
        const mappedIdeas = Array.from(ideasMap)
        mappedIdeas.forEach((idea) => {
            idea[1].forEach((group) => {
                idea[1].forEach(idea => {
//after looking through all information, im going to compare each
//cohort with all the rest cohorts of that attribute.
// Math.abs gives me the "gap" between green tokens and red tokens of all the other cohorts. 
// if the gap is smaller than 5, that means there is a disagreement about this idea.
                    const loopRedsToks = idea.obj.value.redToks
                    const abs = Math.abs(group.obj.value.greenToks - loopRedsToks)
                    if(loopRedsToks < 5 || group.obj.value.greenToks < 5 || group.obj.groupsName === idea.obj.groupsName){return}
                    if(abs < 5){ 
                        differences.push({idea: idea.id, groupsName: group.obj.groupsName, groupsGreen: group.obj.value.greenToks, idreaGroup: idea.obj.groupsName, ideaRed: loopRedsToks })
                    }
// now if you sort by "role", you will see some tokens are more bold,
// that means one of the cohorts next to this one think diffrently about this idea.
                }) 
            })
        })
    }

    var sortedSelection = []
    switch (selectionType) {
        case "role": //sort by attributes
            sortedSelection = sorted.filter(element => element.obj.mainGroup === selection)
            getDifferences(sortedSelection)
            break;
        case "group": //sort by cohort
            sortedSelection = sorted.filter(element => element.obj.groupsName === selection)
            break;
        case "id": //sort by idea.
            sortedSelection = sorted.filter(element => element.id === selection)
            break;
        default: 
        break;
    }

    const ButtonsList = [
        "role", "type", "title", "setting", "size", "model", "region", "chapterTitle" 
    ]
    
    return(
        <Div>
            <Title ref={topRef}>Sort by attributes</Title>
            <SubTitle>Or just click on a cohort/idea</SubTitle>
            <ButtonsDiv>
                {ButtonsList.map((name, index) => {
                    return <Button key={index} setSelectionType={setSelectionType} selection={selection} setSelection={setSelection} name={name}/>
                })}
            </ButtonsDiv>
            {sortedSelection.map((obj, index) => { // map through the selected data
                var color = "default"
                differences.forEach(idea => {//loop throught array that contains "controversial" ideas in an attribute.
                    if(idea.idea === obj.id){// check for the same idea.
                    //now if both have the same cohort name, that means it is stored in the "diffrences" array.
                    if(idea.groupsName === obj.obj.groupsName){color = "green"}
                    if(idea.idreaGroup === obj.obj.groupsName){color = "red"}
                    }
                })
                const {mainGroup, groupsName, value} = obj.obj
                return <SmallRow color={color}  key={index} setSelectionType={setSelectionType} setSelection={setSelection}  id={obj.id} value={value} mainGroup={mainGroup} groupsName={groupsName} />
                }
            )}
            <Arrow onClick={() => {window.scrollTo({ top: topRef.current.offsetTop - 50, behavior: 'smooth' });}}/>
        </Div>
    )
}

export default SortedRoles;