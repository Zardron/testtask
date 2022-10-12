import styled from 'styled-components'

const Container = styled.div`
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #212121;
  color: white;
`;

const Footer = () => {
  return (
    <Container>Copyright © 2022</Container>
  )
}

export default Footer