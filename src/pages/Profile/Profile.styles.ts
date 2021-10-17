import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 100%;
`;

export const Main = styled.div`
  display: flex;
`;

export const Sidebar = styled.nav`
  background-color: #ffffff;
  margin-top: 26px;
  flex: 0 1 320px;
`;

export const Menu = styled.ul`
  color: #000000;
`;

interface IMenuItem {
  icon: string;
  active: boolean;
}

export const MenuItem = styled.li<IMenuItem>`
  background: url('${({ icon }) => icon}') 23px center no-repeat;
  background-color: ${({ active }) => (active ? '#f0fafa' : '#ffffff')};
  border-right: ${({ active }) => (active ? '4px solid #75ebeb' : 'none')};
  width: 100%;
  font-weight: 500;
  padding: 18px 70px;
  cursor: pointer;
  transition: 0.3s background-color ease;

  &:hover {
    background-color: #f0fafa;
    border-right: 4px solid #75ebeb;
  }
`;

export const SubTitle = styled.h3`
  font-weight: 600;
  color: #738080;
  margin-bottom: 14px;
  padding-left: 23px;
`;

export const Content = styled.div`
  padding-top: 68px;
  flex: 1 1 auto;
`;

export const Title = styled.h2`
  display: block;
  width: 100%;
  background: #fafbff;
  padding: 40px;
  font-weight: 600;
`;
