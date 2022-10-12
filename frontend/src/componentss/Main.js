import styled from "styled-components";

const Container = styled.div`
  padding: 0 15%;
  background-color: #212121;
  border-bottom: 1px solid #4d4d4d;
`;

const Wrapper = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  width: 50%;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: white;
  font-weight: 300;
  padding-bottom: 10px;
`;

const Desc = styled.p`
  color: white;
`;

const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Title>TEST LOREM IPSUM</Title>
          <InfoContainer>
            <Desc>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque.
            </Desc>
          </InfoContainer>
        </Left>
        <Right>
          <iframe
            width="478"
            height="250"
            src="https://www.youtube.com/embed/BHACKCNDMW8"
            title="YouTube video player"
            frameborder="0"
          ></iframe>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Main;
