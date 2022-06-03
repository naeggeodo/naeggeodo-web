import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import {
  NaeggeotalkItem,
  NaeggeotalkListResponse,
} from '../../modules/naeggeotalk/types';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const { naeggeotalkList } = useSelector(
    (state: RootState) => state.naeggeotalkState,
  );
  const [selectItem, setSelectItem] = useState<NaeggeotalkItem>();

  return (
    <>
      <Container>
        <CreateTabMenu />
        <Content>
          {naeggeotalkList.chatRooms &&
            naeggeotalkList.chatRooms.map((item, i) => (
              <NaeggeotalkListItem
                key={i}
                data={item}
                setSelectItem={setSelectItem}
              />
            ))}
        </Content>
        <ButtonWrapper>
          <CreateButton
            handleClick={() => {
              console.log('asdf');
            }}
            storeName={'sample'}
          />
        </ButtonWrapper>
      </Container>
      <TabMenu />
    </>
  );
};

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

  display: flex;
  justify-content: center;

  margin: 0 auto;
`;

export default NaeggeotalkTemplate;
