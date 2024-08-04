import { Default, Outlined, Text } from './index.styled';
import { componentsTestId } from '../../../common/constants/testid';
import { ButtonHTMLAttributes } from 'react';
import { Loader } from '../loader';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'text' | 'outlined';
  small?: boolean;
  color?: string;
  isLoading?: boolean;
}

export const Button = ({
  variant = 'default',
  isLoading,
  children,
  ...props
}: Props) => {
  const content = isLoading ? <Loader /> : children;

  if (variant === 'text')
    return (
      <Text data-testid={componentsTestId.button.text} {...props}>
        {content}
      </Text>
    );

  if (variant === 'outlined')
    return (
      <Outlined data-testid={componentsTestId.button.outlined} {...props}>
        {content}
      </Outlined>
    );

  return (
    <Default data-testid={componentsTestId.button.default} {...props}>
      {content}
    </Default>
  );
};
