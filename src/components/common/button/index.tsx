import { Default, Outlined, Text } from './index.styled';
import { componentsTestId } from '../../../common/constants/testid';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'text' | 'outlined';
  small?: boolean;
  color?: string;
}

export const Button = ({ variant = 'default', ...props }: Props) => {
  if (variant === 'text')
    return <Text data-testid={componentsTestId.button.text} {...props} />;

  if (variant === 'outlined')
    return (
      <Outlined data-testid={componentsTestId.button.outlined} {...props} />
    );

  return <Default data-testid={componentsTestId.button.default} {...props} />;
};
