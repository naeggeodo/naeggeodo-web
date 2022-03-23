import styled from "styled-components";
import palette from "../../styles/palette";
import { SiNaver } from "react-icons/si";
const NaverLoginBtn = () => {
  return (
    <Wrap>
      <Icon />
      네이버 계정으로 로그인
    </Wrap>
  );
};

export default NaverLoginBtn;
const Wrap = styled.div`
  width: 94%;
  border-radius: 10px;
  height: 50px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.naverGreen};
`;
const Icon = styled(SiNaver)`
  color: ${palette.naverGreen};
  background: #fff;
  font-size: 18px;
  margin-right: 6px;
`;
