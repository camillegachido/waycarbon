import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 22px;
  background-color: ${(props) => props.theme.primary.main};
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: rgba(255, 255, 255, 1);
`;
