import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  list-style: none;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background: gold;

`;

export const Button = styled.button`
  display: block;
  font-size: 20px;
  font-weight: 700;
  padding: 5px 5px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  background: silver;
`;
export const Item = styled.li`
  padding: 0 10px;
  display: flex;
  gap: 20px;
  align-items: center;
`;