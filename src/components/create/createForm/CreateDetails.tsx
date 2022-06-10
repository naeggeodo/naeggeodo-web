import { useState } from 'react';
import styled from 'styled-components';
import CreateForm from './CreateForm';
import CreateTabMenu from '../CreateTabMenu';
import PrevCreatedList from '../PrevCreatedList';

const CreateDetails = () => {
  const [isShowCreateForm, setIsShowCreateForm] = useState(true);
  return (
    <Container>
      <CreateTabMenu
        isShowCreateForm={isShowCreateForm}
        setIsShowCreateForm={setIsShowCreateForm}
      />
      {isShowCreateForm ? <CreateForm /> : <PrevCreatedList />}
    </Container>
  );
};

export default CreateDetails;

const Container = styled.div`
  width: 100%;

  padding: 46px 0 83px;
  background-color: #fff;
`;
