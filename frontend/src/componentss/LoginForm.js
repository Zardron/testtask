import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  background-color: #212121;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #4d4d4d;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 35%;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: white;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 5px;
  border: none;
`;

const Button = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #3548fe;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  font-weight: 600;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const RegisterNow = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: white;
`;

const LoginFOrm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input
            placeholder="Email"
            type="text"
            onChange={onChange}
            name="email"
            value={formData.email}
          />
          <Input
            placeholder="Password"
            type="password"
            onChange={onChange}
            name="password"
            value={formData.password}
          />
          <LinkContainer>
            <RegisterNow>
              Don't you have an account?{" "}
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "#3548FE" }}
              >
                Sign up
              </Link>
            </RegisterNow>
          </LinkContainer>
          <Button onClick={onSubmit}>LOG IN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default LoginFOrm;
