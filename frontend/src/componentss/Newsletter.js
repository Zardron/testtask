import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const Container = styled.div`
  padding: 0 15%;
  background-color: #3548fe;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

const Title = styled.h1`
  color: #ffffff;
  font-size: 36px;
  padding: 5px 0;
`;

const WriteUs = styled.p`
  color: #ffffff;
  font-size: 30px;
  padding: 5px 0;
`;

const Address = styled.p`
  color: #ffffff;
  font-size: 12px;
  padding-top: 20px;
`;

const Address2 = styled.p`
  color: #ffffff;
  font-size: 12px;
  padding: 5px 0 20px 0;
`;

const Email = styled.p`
  color: #ffffff;
  font-size: 12px;
  padding: 10px 0;
`;

const SocialIcons = styled.div`
  color: #ffffff;
  font-size: 12px;
  padding-top: 10px;
  cursor: pointer;
`;

const Input = styled.input`
width: 96%;
padding: 10px;
border-radius: 5px;
border: none;
margin-top: 20px;
`;

const Message = styled.textarea`
width: 96%;
padding: 10px;
border-radius: 5px;
border: none;
margin-top: 20px;
resize: none;
`;

const Button = styled.button`
width: 100%;
padding: 10px;
border-radius: 20px;
border: 2px solid white;
margin-top: 20px;
background-color: transparent;
color: white;
cursor: pointer;
`;


const Newsletter = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>Occurred question?</Title>
          <WriteUs>Write to us.</WriteUs>
          <Address>24 Woodpark Drive</Address>
          <Address2>67 Highhill Street., Apt. 20</Address2>
          <Email>Email: test@gmail.com</Email>
          <SocialIcons>
            <TelegramIcon style={{paddingRight: "10px"}}/>
            <WhatsAppIcon style={{paddingRight: "10px"}}/>
            <FacebookIcon style={{paddingRight: "10px"}}/>
            <InstagramIcon style={{paddingRight: "10px"}}/>
          </SocialIcons>
        </Left>
        <Right>
          <Input placeholder="Your name"/>
          <Input placeholder="Email"/>
          <Message placeholder="Message" rows={5}/>
          <Button>SUBMIT</Button>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Newsletter;
