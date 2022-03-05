import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"
import { maxwidth800, mobile } from "../responsive";


const Container = styled.div`
    display: flex;  
    ${mobile({ flexDirection: "column" })}

`;


const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
    &:hover{
        color: red;
    }
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50px;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;


const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}

`;

const Title = styled.h3`
    margin-bottom: 30px;
    ${maxwidth800({ display: "none" })}
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    ${maxwidth800({ display: "none" })}
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    &:hover{
        color: red;
    }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "lightyellow" })}

`


const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    &:hover{
        color: red;
    }
`;


const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
      <Container>
          <Left>
              <Logo>SHOP TK</Logo>
              <Desc>Nice too meet you ♥♥..!

              </Desc>
              <SocialContainer>
                  <SocialIcon color="3B5999">
                      <Facebook/>
                  </SocialIcon>
                  <SocialIcon color="E4405F">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter/>
                  </SocialIcon>
                  <SocialIcon color="EE6023">
                      <Pinterest/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <SocialContainer></SocialContainer>
          <Center>

              <Title>USEFUL LINKS</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Nature Honey</ListItem>
                  <ListItem>Forest Honey</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms</ListItem>
              </List>
          </Center>
          <Right>

              <Title>CONTACT</Title>
              <ContactItem>
                  <Room style={{marginRight:"10px"}}/>Tuyen Quang, Tuyen Quang, VietNam 30000
              </ContactItem>
              <ContactItem>
                  <Phone style={{marginRight:"10px"}}/>+84 368-699-131
              </ContactItem>
              <ContactItem>
                  <MailOutline style={{marginRight:"10px"}}/>khanhk10.195@eaut.edu.vn
              </ContactItem>
              <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
          </Right>
      </Container>
    )
}

export default Footer





