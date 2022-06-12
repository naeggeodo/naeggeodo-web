import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/render/useInfiniteScroll';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { RootState } from '../../modules';
import { createChatRoomActions } from '../../modules/create/actions';
import { PrevCreatedListItem } from '../../modules/create/types';
import { CsrApiService } from '../../service/api';
import palette from '../../styles/palette';
import TabMenu from '../main/TabMenu';
import PrevCreatedItem from './PrevCreatedItem';

// TODO 인피니티 스크롤 수정하기

const PrevCreatedList = () => {
  const { dispatch } = useLoadLib();
  const { chatRooms } = useSelector(
    (state: RootState) => state.createStates.prevCreatedListResponse,
  );

  const { orderTimeType } = useSelector(
    (state: RootState) => state.createStates.createData,
  );

  // const { target, dataList } = useInfiniteScroll(naeggeotalkList.chatRooms);

  const [selectItem, setSelectItem] = useState<PrevCreatedListItem>();

  const createChattingRoom = async () => {
    const { id } = selectItem;
    try {
      const res = await CsrApiService.postParamsApi(`/chat-rooms/${id}/copy`, {
        orderTimeType: orderTimeType,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      <Container>
        <Content>
          {chatRooms.length > 0 &&
            chatRooms.map((item, i) => (
              <PrevCreatedItem
                key={i}
                data={item}
                selectItem={selectItem}
                setSelectItem={setSelectItem}
              />
            ))}
        </Content>
        <ButtonWrapper>
          <Button onClick={createChattingRoom}>내꺼톡 생성하기 버튼</Button>
        </ButtonWrapper>
        {/* <div ref={target} /> */}
      </Container>
      <TabMenu />
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

const Content = styled.div`
  min-height: 70vh;

  margin-top: 19.5px;
  padding-bottom: 52px;
`;

const ButtonWrapper = styled.div`
  width: 90%;

  position: sticky;
  bottom: 60px;

  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

const Button = styled.button`
  all: unset;
  height: 52px;
  width: 100%;

  text-align: center;

  font-weight: 500;
  font-size: 1.0625rem;
  color: #ffffff;

  border-radius: 10px;
  background-color: ${palette.black};

  transition: 0.5s;
  cursor: pointer;

  &:disabled {
    background-color: ${palette.LineGray};
    cursor: not-allowed;
  }
`;

export default PrevCreatedList;
