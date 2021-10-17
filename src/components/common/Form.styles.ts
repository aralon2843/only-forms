import styled from 'styled-components';

import theme from '../../styles/theme';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
`;

interface IInput {
  error?: boolean;
}

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input<IInput>`
  outline: none;
  padding: 18px 16px;
  background: ${theme.colors.lightGray};
  border: 1px solid
    ${({ error }) => (error ? theme.colors.red : theme.colors.blue)};
  border-radius: 4px;
  width: 445px;
  color: ${theme.colors.darkGray};
  transition: 0.3s ease all;
  position: relative;
  &::placeholder {
    color: ${theme.colors.mediumGray};
  }
  &:placeholder-shown {
    border-color: ${theme.colors.semiLightGray};
  }
`;

interface IEye {
  icon: string;
}

export const PasswordWrapper = styled.div`
  position: relative;
`;

export const Eye = styled.div<IEye>`
  position: absolute;
  right: 18px;
  top: 17px;
  width: 23px;
  height: 21px;
  cursor: pointer;
  background: url(${({ icon }) => icon}) center/cover no-repeat;
`;

export const InputError = styled.p`
  color: ${theme.colors.red};
  margin-top: 6px;
`;

interface ICheckbox {
  icon: string;
}

export const Checkbox = styled.input<ICheckbox>`
  margin-bottom: 10px;
  cursor: pointer;
  margin-right: 10px;
  height: 14px;
  width: 14px;
  position: absolute;
  z-index: -1;
  opacity: 0;

  & + label {
    display: flex;
    align-items: center;
    user-select: none;
  }
  & + label::before {
    content: '';
    display: inline-block;
    height: 14px;
    width: 14px;
    flex: 0 0 auto;
    border: 1px solid ${theme.colors.semiLightGray};
    margin-right: 10px;
    border-radius: 2px;
  }
  &:checked + label::before {
    background: url(${({ icon }) => icon}) center no-repeat;
    background-color: ${theme.colors.blue};
  }
`;

export const SubmitButton = styled.button`
  outline: none;
  border: none;
  border-radius: 4px;
  background: ${theme.colors.blue};
  color: ${theme.colors.lightBlack};
  font-size: 16px;
  height: 50px;
  font-weight: 500;
  margin: 20px 0 10px 0;
  cursor: pointer;
`;

export const Loader = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 22px;
    height: 22px;
  }
  & {
    margin: 10px auto;
    font-size: 3px;
    position: relative;
    text-indent: -9999em;
    border-top: 1.1em solid rgba(255, 255, 255, 0.2);
    border-right: 1.1em solid rgba(255, 255, 255, 0.2);
    border-bottom: 1.1em solid rgba(255, 255, 255, 0.2);
    border-left: 1.1em solid #ffffff;
    transform: translateZ(0);
    animation: load8 1.1s infinite linear;
  }
  @-webkit-keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes load8 {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Label = styled.label`
  display: flex;
  color: #000000;
  width: 100%;
  cursor: pointer;
`;

export const Offer = styled.p`
  font-weight: 500;
  color: #000000;
  span {
    color: ${theme.colors.green};
    cursor: pointer;
  }
`;
