import styled from 'styled-components';
import palette from '../../styles/palette';
const KaKaoLoginBtn = () => {
  return (
    <Wrap>
      <Icon viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8.99671 0.875C4.16663 0.875 0.25 3.98236 0.25 7.81697C0.25 10.2962 1.88631 12.4681 4.35064 13.7011L3.46348 16.8911C3.46348 16.8911 3.44705 17.0399 3.54234 17.0961C3.63763 17.1523 3.75263 17.1093 3.75263 17.1093C4.02863 17.0696 6.93982 15.0102 7.44912 14.6532C7.95184 14.7259 8.47428 14.7622 9.00329 14.7622C13.8334 14.7622 17.75 11.6549 17.75 7.82027C17.75 3.98566 13.8268 0.875 8.99671 0.875Z'
          fill='black'
        />
      </Icon>
      카카오 계정으로 로그인
    </Wrap>
  );
};

export default KaKaoLoginBtn;
const Wrap = styled.div`
  width: 94%;
  border-radius: 10px;
  height: 50px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.kakaoYellow};
  font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  font-size: 17px;
  cursor: pointer;
`;
const Icon = styled.svg`
  width: 18px;
  height: 18px;
  margin-right: 6px;
`;
