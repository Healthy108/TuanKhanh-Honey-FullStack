import styled from "styled-components"

const Container = styled.div`
    height: 30px;
    background-color: yellow;
    color: black;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    justify-content: center;
`

const Announcement = () => {
    return (
        <Container>
            TK HONEY SHOP - WELCOMES CUTOMERS !
        </Container>
    )
}

export default Announcement
