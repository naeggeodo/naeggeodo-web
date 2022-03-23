import styled from 'styled-components';

const Button = () => {
  return <StyledButton>Button</StyledButton>;
};

const StyledButton = styled.button`
  background-color: pink;
  border: none;
  border-radius: 5px;
  width: 300px;
  height: 40px;
  color: white;
`;

export default Button;
