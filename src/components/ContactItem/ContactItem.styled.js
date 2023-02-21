import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  &:not(:last-child) {
     margin-bottom: 30px;
  }
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
`;