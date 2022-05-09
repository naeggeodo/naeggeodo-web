import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { RootState } from '../../modules';
import { setChattingCreateTabMenu } from '../../modules/chatting/actions';

type StyledType = {
  active: boolean;
};

const CreateTabMenu = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { chattingCreateTab } = useSelector(
    (state: RootState) => state.chattingRoomState,
  );

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    dispatch(setChattingCreateTabMenu(target.innerText));
    if (target.innerText === '새로입력') {
      router.push('/chatting/create');
    }
    if (target.innerText === '주문목록') {
      router.push('/orderlist');
    }
  };

  return (
    <Wrap>
      <Button
        active={chattingCreateTab === '새로입력' ? true : false}
        onClick={onClick}>
        새로입력
      </Button>
      <Button
        active={chattingCreateTab === '주문목록' ? true : false}
        onClick={onClick}>
        주문목록
      </Button>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
`;

const Button = styled.button<StyledType>`
  border: none;
  background: none;
  outline: none;
  font-size: 1.125rem;
  font-family: 'SpoqaBold';
  color: ${(props) => (props.active ? '#EF6212' : '#C4C4C4')};
  border-bottom: ${(props) =>
    props.active ? '3px solid #EF6212' : '3px solid transparent'}; ;
`;

export default CreateTabMenu;
