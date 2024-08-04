import styled from 'styled-components';

interface Props {
  small?: boolean;
  color?: string;
}

const Container = styled.button<Props>`
  padding: ${(props) => (props.small ? '8px 16px' : '12px 16px')};
  border-radius: 8px;
  border: 0px;
  font-weight: bold;
  height: fit-content;

  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    cursor: pointer;
  }

  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  & .loader {
    height: 12px;
    width: 12px;
  }

  & .loader div {
    border-width: 1px;
    margin: 0px;
    width: 12px;
    height: 12px;
  }
`;

export const Default = styled(Container)`
  background-color: ${({ theme, color = 'primary' }) => theme[color].main};
  color: white;

  &:hover {
    background-color: ${({ theme, color = 'primary' }) => theme[color].dark};
  }

  & .loader div {
    border-color: white transparent transparent transparent;
  }
`;

export const Outlined = styled(Container)`
  border: 1px solid ${({ theme, color = 'primary' }) => theme[color].main};
  color: ${({ theme, color = 'primary' }) => theme[color].main};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme, color = 'primary' }) => theme[color].hover};
  }
`;

export const Text = styled(Container)`
  background-color: transparent;
  color: ${({ theme, color = 'primary' }) => theme[color].main};

  &:hover {
    background-color: ${({ theme, color = 'primary' }) => theme[color].hover};
  }
`;
