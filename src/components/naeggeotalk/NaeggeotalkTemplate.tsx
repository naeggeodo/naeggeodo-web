import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
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

  const target = useRef<HTMLDivElement>(null);

  const [selectItem, setSelectItem] = useState<NaeggeotalkItem>();

  const [skip, setSkip] = useState(0);
  const [dataList, setDataList] = useState([]);

  const limit = 5;

  useEffect(() => {
    if (naeggeotalkList) {
      const observer = new IntersectionObserver(callback, { threshold: 0.8 });
      observer.observe(target.current);

      return () => {
        observer && observer.disconnect();
      };
    }
  }, [naeggeotalkList]);

  useEffect(() => {
    if (naeggeotalkList && skip <= naeggeotalkList.chatRooms.length) {
      const arr = [];
      for (let i = skip; i < naeggeotalkList.chatRooms.length; i++) {
        if (arr.length > limit) break;
        arr.push(naeggeotalkList.chatRooms[i]);
      }
      setDataList((prev) => [...prev, ...arr]);
    }
  }, [skip, naeggeotalkList]);

  const callback = async ([entry], observer: IntersectionObserver) => {
    if (entry.isIntersecting) {
      observer.unobserve(entry.target);
      setSkip((prev) => prev + limit + 1);
      observer.observe(entry.target);
    }
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

export default NaeggeotalkTemplate;
