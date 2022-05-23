import styled from 'styled-components';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const listData = [
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '교촌치킨 백석역점', date: '4월 30일', populate: '1/3명' },
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
  margin-top: 19.5px;
  padding-bottom: 52px;
  min-height: 70vh;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
`;

export default NaeggeotalkTemplate;
