import styled from 'styled-components';
import KaKaoLoginBtn from '../components/login/KaKaoLoginBtn';

const login = () => {
  return (
    <Wrap>
      로그인 페이지
      <KaKaoLoginBtn />
    </Wrap>
  );
};

export default login;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;
