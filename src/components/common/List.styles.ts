import styled from 'styled-components';

export const ListWrapper = styled.div``;

export const TitlesList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f2f5;
  padding: 17px 40px;
`;

const ListItemsWidth = styled.ul`
  font-weight: 500;
  &:nth-child(1) {
    max-width: 260px;
    width: 100%;
  }
  &:nth-child(2) {
    max-width: 260px;
    width: 100%;
  }
  &:nth-child(3) {
    max-width: 260px;
    width: 100%;
  }
  &:nth-child(4) {
    max-width: 295px;
    width: 100%;
  }
  &:nth-child(5) {
    max-width: 140px;
    width: 100%;
  }
  &:nth-child(6) {
    max-width: 140px;
    width: 100%;
  }
`;

export const TitlesItem = styled(ListItemsWidth)``;

export const List = styled.ul``;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 17px 40px;
  font-weight: 500;
  &:nth-child(2n) {
    background-color: #fafafa;
  }
`;

export const ListItemElement = styled(ListItemsWidth)``;

interface ListItemStatus {
  status: string | boolean;
}

export const ListItemStatus = styled.div<ListItemStatus>`
  display: inline;
  border-radius: 2px;
  padding: 4px 6px;
  color: ${({ status }) => {
    if (status === 'waiting') return '#7A1F1F';
    if (status === 'ended' || status === true) return '#1F7A2E';
    if (status === 'canceled' || status === false) return '#7A1F1F';
  }};
  background-color: ${({ status }) => {
    if (status === 'waiting') return '#EBFFFF;';
    if (status === 'ended' || status === true) return '#EBFFEE';
    if (status === 'canceled' || status === false) return '#FFEBEB;';
  }};
`;
