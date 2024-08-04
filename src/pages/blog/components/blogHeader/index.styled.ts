import styled from 'styled-components';

export const Banner = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  color: ${({ theme }) => theme.text.secondary};
`;
