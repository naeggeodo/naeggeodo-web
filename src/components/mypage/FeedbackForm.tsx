import React, { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useReport } from '../../hooks/useReport';
import { RootState } from '../../modules';
import palette from '../../styles/palette';
import Popup from '../common/Popup';

const FeedbackForm = ({
  setPopupState,
}: {
  setPopupState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { submitReport } = useReport();

  const userId = useSelector((state: RootState) => state.loginState.userId);

  const [feedbackBody, setFeedbackBody] = useState({
    user_id: userId,
    contents: '',
    type: 'FEEDBACK',
  });

  const onSubmitFeedback = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!feedbackBody.user_id || !feedbackBody.contents)
      return alert('값을 입력해주세요');
    submitReport(feedbackBody, '건의').then(() => {
      setFeedbackBody({ ...feedbackBody, contents: '' });
    });
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFeedbackBody({ ...feedbackBody, contents: e.target.value });
  };

  return (
    <Popup setPopupState={setPopupState}>
      <Form onSubmit={onSubmitFeedback}>
        <Title>건의하기</Title>
        <Contents
          placeholder='건의 내용'
          onChange={onChangeContent}
          value={feedbackBody.contents}
        />
        <CompleteButton>완료</CompleteButton>
      </Form>
    </Popup>
  );
};

export default FeedbackForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  color: ${palette.mainOrange};
`;

const Contents = styled.textarea`
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
