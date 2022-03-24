import styled from 'styled-components';
import Image from 'next/image';
import Applelogo from '../../assets/icons/applelogo.svg';

const AppleLoginBtn = () => {
  return (
    <Wrap>
      <Image src={Applelogo} alt='apple logo' />
      <Span>애플 계정으로 로그인</Span>
    </Wrap>
  );
};

export default AppleLoginBtn;
const Wrap = styled.div`
  width: 100%;
  border-radius: 10px;
  height: 28%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Span = styled.span`
  margin-left: 6px;
`;
