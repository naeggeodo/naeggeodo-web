import React from 'react';
import styled from 'styled-components';
import TabMenu from '../main/TabMenu';
import CreateInit from './CreateInit';

const CreateTemplate = () => {
  return (
    <>
      <Wrap>
        <CreateInit />
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  height: 86vh;

  position: relative;

  margin-top: 20px;
`;

export default CreateTemplate;
