import styled from 'styled-components';
import TabMenu from '../main/TabMenu';

const NaeggeotalkTemplate = () => {
  return (
    <>
      <Container>참여중인 내꺼톡 페이지</Container>
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
