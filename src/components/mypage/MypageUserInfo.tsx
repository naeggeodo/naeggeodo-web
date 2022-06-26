import Image from 'next/image';
import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { useCustomRouter } from '../../hooks/utils/useCustomRouter';
import { RootState } from '../../modules';
import { patchNickNameActions } from '../../modules/mypage/actions';
import palette from '../../styles/palette';

type StyledType = {
  isActive?: boolean;
};

type StyledInputType = {
  isClicked: boolean;
};

const MypageUserInfo = () => {
  const nickName = useSelector(
    (state: RootState) => state.myPageState.userInfo.nickname,
  );
  const myOrdersCount = useSelector(
    (state: RootState) => state.myPageState.userInfo.myOrdersCount,
  );
  const participatingChatCount = useSelector(
    (state: RootState) => state.myPageState.userInfo.participatingChatCount,
  );
  const user_id = useSelector((state: RootState) => state.loginState.user_id);

  const { shiftPage } = useCustomRouter('/progress');
  const [isClicked, setIsClicked] = useState(false);
  const [nickNameState, setNickNameState] = useState(nickName);
  const inputRef = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  const changeClick = useCallback(() => {
    setIsClicked(!isClicked);
  }, [isClicked]);

  const changeNickName = useCallback<
    (e: ChangeEvent<HTMLInputElement>) => void
  >(
    (e) => {
      setNickNameState(e.target.value);
    },
    [nickNameState],
  );

  useEffect(() => {
    if (isClicked) {
      inputRef.current.disabled = false;
      inputRef.current.style.width = '80%';
      inputRef.current.focus();
    } else {
      inputRef.current.disabled = true;
      inputRef.current.style.width = `${nickName.length * 20}px`;
    }
  }, [isClicked, nickName]);

  const saveNickName = useCallback(() => {
    const requestActionPayload = {
      user_id,
      nickname: nickNameState,
    };
    changeClick();
    if (!nickNameState) {
      setNickNameState(nickName);
      return;
    }
    dispatch(patchNickNameActions.request(requestActionPayload));
  }, [isClicked, nickNameState, nickName]);

  return (
    <Container>
      <Title>안녕하세요,</Title>
      <Title>
        <Name
          ref={inputRef}
          value={nickNameState}
          maxLength={12}
          isClicked={isClicked}
          onChange={changeNickName}></Name>
        <span>님</span>
        {isClicked ? (
          <ModifyButton onClick={saveNickName}>
            <Image
              src="/assets/images/check.svg"
              width={26}
              height={26}
              alt="제목수정 아이콘"
            />
          </ModifyButton>
        ) : (
          <ModifyButton onClick={changeClick}>
            <Image
              src="/assets/images/pencilicon.svg"
              width={26}
              height={26}
              alt="제목수정 아이콘"
            />
          </ModifyButton>
        )}
      </Title>

      <InfoBox>
        <InfoDiv>
          <P>전체 주문 건수</P>
          <P isActive={true}>{myOrdersCount}건</P>
        </InfoDiv>
        <Line></Line>
        <InfoButton onClick={shiftPage}>
          <P>참여 중인 내꺼톡</P>
          <P isActive={true}>{participatingChatCount}건</P>
        </InfoButton>
      </InfoBox>
    </Container>
  );
};

const Container = styled.div`
  padding: 0 24px;

  background-color: #fff;
`;

const Title = styled.p`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 5px;

  font-size: 1.5rem;
  line-height: 30px;
  padding: 0 6px;
`;

const Name = styled.input<StyledInputType>`
  font-family: SpoqaBold;
  font-size: 1.5rem;
  resize: none;
  color: ${palette.black};
  padding: 0;

  border: 1px solid ${palette.mainOrange};
  border-radius: 5px;
  outline: none;

  &:disabled {
    font-family: SpoqaBold;

    color: ${palette.black};
    padding: 0;
    background-color: #fff;
    border: 1px solid transparent;
  }
`;

const ModifyButton = styled.button`
  all: unset;
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  margin-top: 16px;
  padding: 24px;

  background: #f5f5f5;
  border-radius: 8px;
`;

const Line = styled.div`
  width: 1px;
  height: 46px;

  background: #dddddd;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoButton = styled(InfoDiv)`
  cursor: pointer;
`;

const P = styled.p<StyledType>`
  font-size: ${(props) => (props.isActive ? '1.25rem' : '0.875rem')};
  ${(props) =>
    props.isActive &&
    css`
      color: ${palette.mainOrange};
      font-family: 'SpoqaBold';
    `};
`;

export default MypageUserInfo;
