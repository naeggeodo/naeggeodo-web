import styled from 'styled-components';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const listData = [
    { title: '버거킹 백석 이마트점', date: '하루 전' },
    { title: '교촌치킨 백석역점', date: '4월 30일' },
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

        <ButtonWrapper>
          <CreateButton storeName={'sample'} />
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
