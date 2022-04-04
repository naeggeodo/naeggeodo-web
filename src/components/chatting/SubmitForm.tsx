import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import imgaddbtn from '../../assets/icons/imgaddbtn.svg';
import submitbtn from '../../assets/icons/submitbtn.svg';
const SubmitForm = () => {
  return (
    <Wrap>
      <ContentWrap>
        <label htmlFor='image'>
          <Image src={imgaddbtn} alt='img add icon' width={19} height={24} />
        </label>
        <ImgAddBtn type='file' id='image' />
        <Input type='text' />
        <Image src={submitbtn} alt='submit button' width={23} height={24} />
      </ContentWrap>
    </Wrap>
  );
};

export default SubmitForm;
const Wrap = styled.div`
  background: #fff;
  width: 100%;
  height: 8%;
`;
const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 100%;
  margin: 0 auto;
  justify-content: center;
  gap: 3%;
`;
const Input = styled.input`
  background: #f2f2f8;
  outline: none;
  border: none;
  border-radius: 10px;
  width: 90%;
  height: 70%;
  padding: 0 10px;
`;
const ImgAddBtn = styled.input`
  display: none;
`;
