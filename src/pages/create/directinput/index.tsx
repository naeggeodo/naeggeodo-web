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
  width: 100%;
  height: 86vh;

  position: relative;

  margin: 0 auto;
  margin-top: 20px;
`;

export default DirectInput;
