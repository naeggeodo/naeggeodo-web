import Image from 'next/image';
import styled from 'styled-components';

const GoInfoBtn = () => {
  return (
    <Button>
      <span>가게정보 보러가기</span>
      <Image
        src='/assets/images/nextbtn.svg'
        alt='icon'
        width={11}
        height={16}
      />
    </Button>
  );
};

const Button = styled.button`
  width: 88%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  text-align: left;
  font-size: 0.75rem;
  border: none;
  border-radius: 5px;
  background: #fff;
  padding: 10px 20px;
  margin: 0 auto;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
`;

export default GoInfoBtn;
