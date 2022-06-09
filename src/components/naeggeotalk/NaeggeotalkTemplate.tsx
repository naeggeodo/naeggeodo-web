import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useInfiniteScroll } from '../../hooks/reder/useInfiniteScroll';
import { RootState } from '../../modules';
import { NaeggeotalkItem } from '../../modules/naeggeotalk/types';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const { naeggeotalkList } = useSelector(
    (state: RootState) => state.naeggeotalkState,
  );
  const { target, dataList } = useInfiniteScroll(naeggeotalkList.chatRooms);

  const [selectItem, setSelectItem] = useState<NaeggeotalkItem>();

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
          <CreateButton
            handleClick={() => {
              console.log('asdf');
            }}
            storeName={'sample'}
          />
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
