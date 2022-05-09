import styled from "styled-components"

const HeaderStyle = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`

const Header = () => {
    return(
        <HeaderStyle>
            HyperMind
        </HeaderStyle>
    )
}

export default Header;