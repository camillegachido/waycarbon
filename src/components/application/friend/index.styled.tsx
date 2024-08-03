import styled from 'styled-components';

export const Container = styled.article`
  padding-top: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.text.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.primary.main};
`;

export const InfoContainer = styled.div`
  display: inline-flex;
  gap: 20px;
  align-items: center;
`;

export const Name = styled.p`
  font-size: 12px;
  font-weight: 500;
`;
