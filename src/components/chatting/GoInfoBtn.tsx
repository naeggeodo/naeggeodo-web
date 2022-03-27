import styled from 'styled-components';
import nextbtn from '../../assets/icons/nextbtn.svg';
const GoInfoBtn = () => {
  return (
    <Button>
      <span>가게정보 보러가기</span>
      <img src={nextbtn} alt='icon' />
    </Button>
  );
};

export default GoInfoBtn;

const Button = styled.button`
  display: block;
  outline: none;
  border: none;
  background: #fff;
  padding: 10px 20px;
  width: 80%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  box-sizing: border-box;
  cursor: pointer;
  margin: 0 auto;
  font-size: 12px;
  position: relative;
  & > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  & > img {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;
