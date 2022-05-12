import styled from 'styled-components';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const listData = [
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '교촌치킨 백석역점', date: '4월 30일', populate: '1/3명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
  ];

  return (
    <>
      <Container>
        <CreateTabMenu />
        <Content>
          {listData.map((v, i) => (
            <NaeggeotalkListItem key={i} data={v} />
          ))}
        </Content>
        <CreateButton storeName={'sample'} />
      </Container>
      <TabMenu />
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 90%;
  min-height: 86vh;

  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;

  position: relative;
`;

const Content = styled.div`
  margin-top: 19.5px;
  padding-bottom: 52px;
`;

export default NaeggeotalkTemplate;
