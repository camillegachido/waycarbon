import { componentsTestId } from '../../../common/constants/testid';
import { Container, Tab } from './index.styled';

interface Props {
  value: string;
  tabs: string[];
  onChange: (value: string) => void;
}

export const Tabs = ({ value, tabs, onChange }: Props) => {
  return (
    <Container>
      {tabs.map((tab) => (
        <Tab
          key={tab}
          isActive={tab === value}
          onClick={() => onChange(tab)}
          data-testid={
            tab === value
              ? componentsTestId.tabs.active
              : componentsTestId.tabs.default
          }
        >
          {tab}
        </Tab>
      ))}
    </Container>
  );
};
