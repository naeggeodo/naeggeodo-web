import Script from 'next/script';
import LoginTemplate from '../components/login/LoginTemplate';

const login = () => {
  return (
    <>
      <Script
        strategy='beforeInteractive'
        charSet='utf-8'
        type='text/javascript'
        src='https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js'
      />
      <LoginTemplate />
    </>
  );
};

export default login;
