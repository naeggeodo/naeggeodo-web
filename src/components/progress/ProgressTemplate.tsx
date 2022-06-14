import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';
import ProgressTalkItem from './ProgressTalkItem';

const ProgressTemplate = () => {
  const { chatRoom } = useSelector(
    (state: RootState) => state.progressStates.progressChatRoomList,
  );

  return (
    <React.Fragment>
      <Container>
        <Title>
          참여중인 <Emphasize>내꺼톡</Emphasize> 리스트
        </Title>

        <ProgressTalkList>
          {chatRoom.length > 0 &&
            chatRoom.map((data, index) => {
              return (
                <ProgressTalkItem
                  user_id={data.user_id}
                  key={String(data.id)}
                  id={String(data.id)}
                  imgPath={data.imgPath}
                  title={data.title}
                  index={index}
                  latestMessage={data.latestMessage}
                />
              );
            })}
        </ProgressTalkList>
      </Container>
      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  padding: 46px 0 0;
  background-color: #fff;
`;

const Title = styled.h2`
  font-size: 1.125rem;
  padding: 0 24px;

  letter-spacing: -0.5px;
  color: ${palette.black};
`;

const Emphasize = styled.span`
  color: ${palette.mainOrange};
`;

const ProgressTalkList = styled.ul`
  padding: 5px 0 60px;
`;

export default ProgressTemplate;
