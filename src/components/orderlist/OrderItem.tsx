import Image from 'next/image';
import styled from 'styled-components';

const OrderItem = ({ data }: any) => {
  return (
    <Wrap>
      <Image src='/assets/images/hamburger.svg' width={44} height={44} />
      <div>
        <Title>{data.title}</Title>
        <Date>{data.date}</Date>
        <Populate>{data.populate}</Populate>
      </div>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;

  display: flex;

  padding: 20px 0;
  & > div {
    margin-left: 10px;
  }
`;

const Title = styled.h3`
  font-size: 0.9375rem;
  margin-bottom: 5px;
  line-height: 20px;
`;

const Date = styled.span`
  font-size: 0.75rem;
  color: #696969;
  background: #ebebeb;
  padding: 2px 5px;
  margin-right: 5px;
  border-radius: 3px;
`;

const Populate = styled.span`
  font-size: 0.75rem;
  color: #696969;
`;

export default OrderItem;
