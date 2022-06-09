import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/reder/useInfiniteScroll';
import { useLoadLib } from '../../hooks/utils/useLoadLib';
import { RootState } from '../../modules';
import { createChatRoomActions } from '../../modules/create/actions';
import { NaeggeotalkItem } from '../../modules/naeggeotalk/types';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const { dispatch } = useLoadLib();

  const { naeggeotalkList } = useSelector(
    (state: RootState) => state.naeggeotalkState,
  );
  const { target, dataList } = useInfiniteScroll(naeggeotalkList.chatRooms);

  const [selectItem, setSelectItem] = useState<NaeggeotalkItem>();

  const createChattingRoom = () => {
    // const {
    //   address,
    //   category,
    //   link,
    //   place,
    //   title,
    //   user_id,
    //   orderTimeType,
    //   maxCount,
    //   tags,
    // } = selectItem;
    // const body = {
    //   address,
    //   category,
    //   link,
    //   place,
    //   title,
    //   user_id,
    //   tag: tags,
    //   orderTimeType,
    //   maxCount,
    // };
    // // console.log(body);
    // dispatch(createChatRoomActions.request(body));

    // ** 에러남
    const headers = {
      'Content-type': 'multipart/form-data',
      Authorization:
        'Bearer ' +
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJfc3JNZ19DS0VBX0hWS0dVU3lwamZoQXROZk5RMUNTRXFiQ3FFelpQelo4IiwiZXhwIjoxNjU0ODMyNjQ2LCJpc3MiOiJuYWVnZ2VvZG8uY29tIn0.MKahMMTSENvmKPbQ2oWqU1_1MukpA4iO0UmOkDzHAZ8',
    };

    axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/chat-rooms`,
        {
          address: '서울',
          category: 'PIZZA',
          link: 'www....',
          place: '1층',
          title: 'ㄴㄴㄴ',
          user_id: 'idididid',
          tag: ['피자', '족발', '떡볶이', '순대'],
          orderTimeType: 'ASAP',
          maxCount: 1,
        },
        {
          headers: headers,
        },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log('에러', err));
  };

  return (
    <>
      <Container>
        <CreateTabMenu />
        <Content>
          {dataList &&
            dataList.map((item, i) => (
              <NaeggeotalkListItem
                key={i}
                data={item}
                selectItem={selectItem}
                setSelectItem={setSelectItem}
              />
            ))}
        </Content>
        <ButtonWrapper>
          <CreateButton handleClick={createChattingRoom} storeName={'sample'} />
        </ButtonWrapper>
        <div ref={target} />
      </Container>
      <TabMenu />
    </>
  );
};

export default NaeggeotalkTemplate;

const Container = styled.div`
  width: 100%;

  padding: 46px 0 83px;
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
