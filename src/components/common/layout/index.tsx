import { PropsWithChildren } from 'react';
import { StyledContainer } from './index.styled';

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Layout = ({ children, className }: ContainerProps) => {
  return <StyledContainer className={className}>{children}</StyledContainer>;
};
