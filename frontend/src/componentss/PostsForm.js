import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { reset } from "../features/auth/authSlice";

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

const Input = styled.textarea`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  resize: none;
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

const Post = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate()

  const dispatch = useDispatch();

  console.log(text);

  const onSubmit = (e) => {
    if (text === "" || text === null) {
      toast.error("Please fill up post form");
    } else {
      e.preventDefault();

      dispatch(createGoal({ text }));
      setText("");

      toast.success("Post successfully posted");
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>ADMIN</Title>
        <Form>
          <Input
            placeholder="POST"
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="post"
            rows="10"
          />
          <Button onClick={onSubmit}>ADD</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Post;
