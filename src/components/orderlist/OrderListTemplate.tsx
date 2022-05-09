import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setChattingCreateTabMenu } from '../../modules/chatting/actions';
import CreateTabMenu from '../chatting/CreateTabMenu';
import TabMenu from '../main/TabMenu';
import OrderItem from './OrderItem';

const OrderListTemplate = () => {
  const dispatch = useDispatch();

  const listData = [
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '교촌치킨 백석역점', date: '4월 30일', populate: '1/3명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
    { title: '버거킹 백석 이마트점', date: '하루 전', populate: '1/2명' },
  ];

  useEffect(() => {
    dispatch(setChattingCreateTabMenu('주문목록'));
  }, []);

  return (
    <>
      <Wrap>
        <CreateTabMenu />
        <Content>
          {listData.map((v, i) => (
            <OrderItem key={i} data={v} />
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

export default OrderListTemplate;
