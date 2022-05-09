import React from 'react';
import styled from 'styled-components';
import CreateForm from '../../../components/create/CreateForm';
import TabMenu from '../../../components/main/TabMenu';

const DirectInput = () => {
  return (
    <>
      <Container>
        <CreateForm />
      </Container>
      <TabMenu />
    </>
  );
};

const Container = styled.div`
  width: 90%;
  height: 84vh;
  border: 1px solid red;

  position: relative;

  padding-bottom: 40px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default DirectInput;
