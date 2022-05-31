import styled from 'styled-components';
import { NaeggeotalkListResponse } from '../../modules/naeggeotalk/types';
import CreateButton from '../create/CreateButton';
import CreateTabMenu from '../create/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import NaeggeotalkListItem from './NaeggeotalkListItem';

const NaeggeotalkTemplate = ({
  naeggeotalkList,
}: {
  naeggeotalkList: NaeggeotalkListResponse;
}) => {
  return (
    <>
      <Container>
        <CreateTabMenu />
        <Content>
          {naeggeotalkList.chatRoom &&
            naeggeotalkList.chatRoom.map((v, i) => (
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
