import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  display: flex;
`;

interface TabProps {
  isActive: boolean;
}

export const Tab = styled.button<TabProps>`
  border: none;
  background-color: transparent;
  padding: 6px 14px;
  line-height: 24px;
  color: ${({ theme, isActive }) =>
    isActive ? theme.primary.main : theme.text.secondary};

  ${({ theme, isActive }) =>
    isActive && `border-bottom: 1px solid ${theme.primary.main}`};
`;
