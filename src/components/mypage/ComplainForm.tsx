import { ChangeEvent, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useReport } from '../../hooks/useReport';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import Popup from '../common/Popup';

const ComplainForm = ({
  setPopupState,
}: {
  setPopupState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { submitReport } = useReport();

  const userId = useSelector((state: RootState) => state.loginState.userId);

  const [complainBody, setComplainBody] = useState({
    user_id: userId,
    contents: '',
    type: 'CHATMAIN',
  });

  const onSubmitComplain = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!complainBody.contents) return alert('값을 입력해주세요');
    submitReport(complainBody, '신고').then(() =>
      setComplainBody({ ...complainBody, contents: '' }),
    );
  };

  const onChangeComplainType = (e: ChangeEvent<HTMLSelectElement>) => {
    setComplainBody({ ...complainBody, type: e.target.value });
  };

  const onChangecomplainBody = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComplainBody({ ...complainBody, contents: e.target.value });
  };

  return (
    <Popup setPopupState={setPopupState}>
      <Form onSubmit={onSubmitComplain}>
        <Title>신고하기</Title>
        <ComplainType onChange={onChangeComplainType}>
          <ComplainTypeItem value='CHATMAIN'>채팅방 신고</ComplainTypeItem>
          <ComplainTypeItem value='CHATDETAIL'>채팅내용 신고</ComplainTypeItem>
        </ComplainType>
        <Content
          placeholder='신고 내용'
          onChange={onChangecomplainBody}
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

  padding: 20px 0;
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
