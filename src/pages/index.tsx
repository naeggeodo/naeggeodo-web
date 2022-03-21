import React from 'react';
import styled from 'styled-components';

const Home: React.FC = () => {
  return (
    <>
      <Container>Home</Container>
      <h1>hello</h1>
    </>
  );
};

const Container = styled.div`
  height: 100vh;
  background-color: yellowgreen;
`;

export default Home;
