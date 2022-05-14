import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';
import { selectOrderType } from '../../modules/create/actions';
import palette from '../../styles/palette';

type StyledType = {
  active: boolean;
};

const buttonValue = [
  '1시간 이내',
  '최대한 빨리',
  '상관없음 (인원이 모집되는대로)',
  '선택하지 않음',
];

const CreateInit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { orderType } = useSelector((state: RootState) => state.createStates);

  return (
    <Wrap>
      <div>
        <Title>언제 음식을</Title>
        <Title>주문하실건가요?</Title>
      </div>
      <Content>
        <CustomButton>직접입력</CustomButton>
        {buttonValue.map((item, i) => (
          <Button
            key={i}
            onClick={() => {
              dispatch(selectOrderType(item));
              router.push('/create/directinput');
            }}
            active={orderType === item ? true : false}>
            {item}
          </Button>
        ))}
      </Content>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background-color: #fff;

  padding: 46px 30px 83px;

  position: relative;

  margin: 0 auto;
`;

const Title = styled.h3`
  font-family: 'SpoqaBold';
  padding: 0 6px;
  line-height: 36.4px;
  font-size: 1.625rem;
`;

const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

const CustomButton = styled.button`
  margin-bottom: 10px;

  background-color: #fff;
  color: ${palette.DarkGray};

  text-align: right;
  outline: none;
  border: none;
`;

const Button = styled.button<StyledType>`
  padding: 15px;

  font-size: 0.9375rem;
  font-family: 'SpoqaBold';
  color: ${(props) => (props.active ? '#EF6212' : '#000')};

  background-color: ${(props) => (props.active ? '#FDEFE7' : '#f5f5f5')};

  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
`;

export default CreateInit;
