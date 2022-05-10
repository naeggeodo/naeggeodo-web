import styled from 'styled-components';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = () => {
  const listData = [
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '교촌치킨 백석역점', date: '4월 30일', populate: '1/3명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
  ];

  return (
    <>
      <Wrap>
        <CreateTabMenu />
        <Content>
          {listData.map((v, i) => (
            <NaeggeotalkListItem key={i} data={v} />
          ))}
        </Content>
      </Wrap>
      <TabMenu />
    </>
  );
};

const Wrap = styled.div`
  width: 90%;
  min-height: 84vh;

  padding-bottom: 60px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Content = styled.div`
  margin-top: 19.5px;
`;

export default NaeggeotalkTemplate;
