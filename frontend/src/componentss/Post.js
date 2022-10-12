import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../components/Spinner";
import { getGoals, reset } from "../features/goals/goalSlice";

const Container = styled.div`
  padding: 0 15%;
`;

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Title = styled.h1`
  margin: 30px 0 10px 0;
`;

const PostsContainer = styled.div`
  flex: 1;
  flex-direction: column;
`;

const Posts = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f2f3f7;
  padding: 20px;
  margin: 20px 0;
`;

const Info = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  color: #3548fe;
  font-size: 16px;
  font-weight: 600;
`;

const Time = styled.p`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #959595;
`;

const Post = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getGoals());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Wrapper>
        <Title>POSTS</Title>
        <PostsContainer>
          {goals.length > 0 ? (
            <>
              {goals.map((goal) => (
                <Posts>
                <Info>{goal.text}</Info>
                <Time>{new Date(goal.createdAt).toLocaleString('en-US')}</Time>
              </Posts>
              ))}
            </>
          ) : (
            <center><h3>Please login to view post</h3></center>
          )}
        </PostsContainer>
      </Wrapper>
    </Container>
  );
};

export default Post;
