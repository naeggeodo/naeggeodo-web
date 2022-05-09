import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TabMenu from '../main/TabMenu';
import CreateInit from './CreateInit';
import { useDispatch } from 'react-redux';
import { setChattingCreateTabMenu } from '../../modules/chatting/actions';
import CreateForm from './CreateForm';

const CreateTemplate = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setChattingCreateTabMenu('새로입력'));
  }, []);

  return (
    <>
      <Wrap>
        <CreateForm />
        {/* <CreateInit /> */}
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  height: 84vh;
  border: 1px solid red;

  position: relative;

  padding-bottom: 40px;
  margin: 0 auto;
  margin-top: 20px;
`;

export default CreateTemplate;
