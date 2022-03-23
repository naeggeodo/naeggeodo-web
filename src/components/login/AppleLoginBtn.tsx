import styled from 'styled-components';
const AppleLoginBtn = () => {
  return (
    <Wrap>
      <Icon viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <Icon
          viewBox='0 0 15 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M14.0621 5.45739C13.9857 5.50195 12.1671 6.44248 12.1671 8.52785C12.2528 10.9061 14.4621 11.7401 14.5 11.7401C14.4621 11.7847 14.1665 12.8763 13.2907 14.0205C12.5956 15.0062 11.8242 16 10.6528 16C9.5385 16 9.1385 15.3431 7.85278 15.3431C6.47203 15.3431 6.08135 16 5.0242 16C3.85277 16 3.02419 14.953 2.29127 13.9766C1.3391 12.6986 0.529778 10.6931 0.501206 8.76747C0.481952 7.74707 0.69189 6.74403 1.22481 5.89206C1.97699 4.70265 3.31985 3.89524 4.78631 3.86862C5.90992 3.83331 6.90992 4.58747 7.59563 4.58747C8.25278 4.58747 9.48135 3.86862 10.8714 3.86862C11.4714 3.86919 13.0714 4.03762 14.0621 5.45739ZM7.5006 3.66488C7.3006 2.73303 7.85278 1.80119 8.36707 1.20677C9.02421 0.487918 10.0621 0 10.9571 0C11.0143 0.931848 10.6522 1.84575 10.005 2.51136C9.42421 3.23021 8.42421 3.77138 7.5006 3.66488Z'
            fill='white'
          />
        </Icon>
      </Icon>
      애플 계정으로 로그인
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
  margin-bottom: 3%;
`;
const Icon = styled.svg`
  width: 15px;
  height: 16px;
  margin-right: 6px;
`;
