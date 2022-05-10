import React, {useState, useRef} from "react"
import styled from "styled-components"

const NameNId = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    transition: 1s all;
`

const ProjectID = styled.h1`
    font-size: 28px;
    width: 30%;
    margin: 0;
`

const Priority = styled.p`
    font-size: 13px;
    margin: 0;
`

const ProjectName = styled.p`
    font-size: 15px;
    margin: 10px 0 0 0;
    cursor: pointer;
    transition: .2s all;
:hover{
    text-shadow: 1px 1px 5px rgb(255, 255, 255, 1);
    transition: .2s all;
}
`

const Modal = styled.div`
    font-size: 18px;
    border-radius: 10px;
    padding: 25px;
    width: 25vw;
    height: auto;
    background-color: #18181A;
    position: absolute;
    top: ${p => p.top};
    left: ${p => p.rightPos};
    display: ${p => p.modalToggle ? "none" : "block"};
    z-index: 2;
`

const X = styled.p`
    position: absolute;
    top: 5px;
    left: 10px;
    margin: 0;
    cursor: pointer;
`

const NameAndId = (props) => {
    const {projectId, object, projectName, index, length} = props;
    const [modalToggle, setModalToggle] = useState(false)
    const textRef = useRef(null)

    return(
        <NameNId>
            <ProjectID >{projectId}</ProjectID>
            <Priority>{object.classification.label}</Priority>
            <ProjectName 
            ref={textRef} onClick={() => setModalToggle(true)
            }>
                {projectName.slice(0,25)}...
            </ProjectName>
            
            {modalToggle && <Modal 
            top={`${index >= length - 2 ? textRef.current.offsetTop - 200 : textRef.current.offsetTop + 25 }px`}
            rightPos={`${textRef.current.getBoundingClientRect().right - 100}px`} >
            {projectName} 
            <X onClick={() => setModalToggle(false)}>X</X>
            </Modal>}

        </NameNId>
    )
}

export default NameAndId;