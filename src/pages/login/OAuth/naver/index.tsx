import React, { useEffect } from 'react';
import styled from 'styled-components';
import Loading from '../../../../components/common/Loading';
import { TOKEN_NAME } from '../../../../constant/Login';
import { useNaverLogin } from '../../../../hooks/useNaverLogin';

const naver = () => {
  const { router } = useNaverLogin();

  useEffect(() => {
    if (localStorage.getItem(TOKEN_NAME.ACCESS_TOKEN)) {
      router.push('/');
    }
  }, [router]);

  return (
    <Wrap>
      <Loading />
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default naver;
