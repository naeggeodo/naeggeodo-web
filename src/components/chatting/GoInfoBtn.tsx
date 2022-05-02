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

  width: 88%;
  height: 100%;

  padding: 10px 20px;
  margin: 0 auto;

  border-radius: 5px;

  background-color: #fff;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.06);

  font-size: 0.75rem;

  text-align: left;
  cursor: pointer;
  outline: none;
  border: none;
`;

export default GoInfoBtn;
