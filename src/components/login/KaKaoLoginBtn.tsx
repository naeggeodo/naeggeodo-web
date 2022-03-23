import styled from 'styled-components';
import palette from '../../styles/palette';
import { RiKakaoTalkFill } from 'react-icons/ri';

const KaKaoLoginBtn = () => {
  return (
    <Wrap>
      <Icon />
      카카오 계정으로 로그인
    </Wrap>
  );
};

export default KaKaoLoginBtn;
const Wrap = styled.div`
  font-family: 'SpoqaHanSansNeobold', 'Sans-serif';
  width: 94%;
  border-radius: 10px;
  height: 50px;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.kakaoYellow};
`;
const Icon = styled(RiKakaoTalkFill)`
  color: #000;
  font-size: 18px;
  margin-right: 6px;
`;
