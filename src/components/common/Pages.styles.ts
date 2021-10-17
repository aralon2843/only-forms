import styled from 'styled-components';

interface ILogo {
  lightBlack: string;
  lightGreen: string;
  fz: number;
  mb?: number;
}

export const Logo = styled.div<ILogo>`
  font-size: ${({ fz }) => fz + 'px'};
  font-weight: 700;
  margin-bottom: ${({ mb }) => (mb ? mb + 'px' : '20px')};
  text-align: center;
  cursor: pointer;
  color: ${({ lightBlack }) => lightBlack};
  span {
    color: ${({ lightGreen }) => lightGreen};
  }
`;

export const ErrorTitle = styled.h2`
  text-align: center;
  margin: 20px;
  font-size: 16px;
`;
