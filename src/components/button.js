import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
    font-size: 12px;
    color: white;
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    position: relative;
    left: 40px;
    background-color: #317FF150;
    transition: .2s all;
    opacity: ${p => p.disabled ? "0.5" : "1"};
    :hover{
        transition: .2s all;
        box-shadow: ${p => p.disabled ? "none" : "2px 2px 20px #317FF150"};
        cursor: pointer;
    }
`

const Button = ({name, setSelection, selection, setSelectionType}) => {
    return(
        <ButtonStyle disabled={name === selection} onClick={() => {setSelection(name); setSelectionType("role")}}>
            {name.charAt(0).toUpperCase() + name.slice(1)}
        </ButtonStyle>
    )
}

export default Button;