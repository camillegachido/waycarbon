import styled from 'styled-components';

export const Container = styled.article`
  padding-top: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.text.light};
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
`;

export const Subtitle = styled.h3`
  font-size: 13px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.text.secondary};
`;

export const Text = styled.p`
  font-size: 13px;
  line-height: 20px;
  margin: 6px 0px;
`;

export const ReadMore = styled.a`
  font-size: 13px;
  line-height: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.primary.main};
`;
