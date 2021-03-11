import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  text-align: center;
  padding-bottom: 20px;
  h1,
  p,
  a {
    font-size: 24px;
    max-width: 240px;
  }
  a {
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }
`;

const Home = () => (
  <Wrapper>
    <h1>Welcome to the Trivia Challenge!</h1>
    <p>You will be presented with 10 True or False questions.</p>
    <p>Can you score 100%?</p>
    <Link to="/quiz">Begin</Link>
  </Wrapper>
);

export default Home;
