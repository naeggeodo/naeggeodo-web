import Image from 'next/image';
import styled from 'styled-components';
import applelogo from '../../assets/icons/applelogo.svg';

const AppleLoginBtn = () => {
  return (
    <Wrap>
      <Image src={applelogo} alt='apple logo' width={14} height={16} />
      <span>애플 계정으로 로그인</span>
    </Wrap>
  );
};

export default AppleLoginBtn;
const Wrap = styled.button`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 10px;
  height: 28%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  color: #fff;
  font-family: 'Spoqa';
  font-size: 17px;
  cursor: pointer;
  margin-bottom: 10px;
  gap: 6px;
`;
