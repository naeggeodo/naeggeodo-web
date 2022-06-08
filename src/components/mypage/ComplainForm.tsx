import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useReport } from '../../hooks/useReport';
import palette from '../../styles/palette';
import Popup from '../common/Popup';

const ComplainForm = ({
  setPopupState,
}: {
  setPopupState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { submitReport } = useReport();

  const [complainBody, setComplainBody] = useState({
    user_id: '',
    contents: '',
    type: 'CHATMAIN',
  });

  const onSubmitComplain = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!complainBody.user_id || !complainBody.contents)
      return alert('값을 입력해주세요');
    submitReport(complainBody, '신고').then(() =>
      setComplainBody({ ...complainBody, user_id: '', contents: '' }),
    );
  };

  const onChangeComplainType = (e: ChangeEvent<HTMLSelectElement>) => {
    setComplainBody({ ...complainBody, type: e.target.value });
  };

  const onChangecomplainBody = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setComplainBody({ ...complainBody, [e.target.name]: e.target.value });
  };

  return (
    <Popup setPopupState={setPopupState}>
      <Form onSubmit={onSubmitComplain}>
        <Title>신고하기</Title>
        <ComplainType onChange={onChangeComplainType}>
          <ComplainTypeItem value='CHATMAIN'>채팅방 신고</ComplainTypeItem>
          <ComplainTypeItem value='CHATDETAIL'>채팅내용 신고</ComplainTypeItem>
        </ComplainType>
        <UserIdInput
          placeholder='신고 대상 아이디'
          onChange={onChangecomplainBody}
          name='user_id'
          value={complainBody.user_id}
        />
        <Content
          placeholder='신고 내용'
          onChange={onChangecomplainBody}
          name='contents'
          value={complainBody.contents}
        />
        <CompleteButton>완료</CompleteButton>
      </Form>
    </Popup>
  );
};

export default ComplainForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  color: ${palette.mainOrange};
`;

const ComplainType = styled.select`
  border: 1px solid ${palette.Gray};
  padding: 6px;
  outline: none;
`;

const ComplainTypeItem = styled.option``;

const UserIdInput = styled.input`
  outline: none;
  padding: 6px;
  border: 1px solid ${palette.Gray};
`;

const Content = styled.textarea`
  height: 200px;
  padding: 6px;

  border: 1px solid ${palette.Gray};

  resize: none;
  outline: none;
`;

const CompleteButton = styled.button`
  width: 70%;

  background: ${palette.mainOrange};
  color: #fff;

  outline: none;
  border: none;
  cursor: pointer;

  border-radius: 4px;
  padding: 6px;
  margin: 0 auto;
`;
