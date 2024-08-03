import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary.main};
`;

export const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
`;

export const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text.terciary};
`;
