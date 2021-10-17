import styled from 'styled-components';

interface IAuthWrapper {
  bg: string;
}

export const AuthWrapper = styled.div<IAuthWrapper>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background: ${({ bg }) => bg};
`;

export const LoginWrapper = styled.div`
  background: #ffffff;
  padding: 40px;
  border-radius: 10px;
`;
